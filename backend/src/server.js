import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { isSupabaseConfigured } from './config/supabase.js';
import { isResendConfigured } from './config/resend.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB if configured
if (process.env.MONGODB_URI) {
  connectDB();
}

// 1. Security Headers (Helmet)
app.use(helmet());

// 2. CORS Configuration
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000,http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (such as curl, postman, server-to-server)
      if (!origin) return callback(null, true);
      const cleanOrigin = origin.replace(/\/$/, '');
      if (
        allowedOrigins.includes(cleanOrigin) ||
        process.env.NODE_ENV === 'development' ||
        cleanOrigin.endsWith('.vercel.app') ||
        cleanOrigin.includes('localhost')
      ) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// 3. Body Parsing
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// 4. Root & Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Gourab Ghosh Portfolio API Service',
    services: {
      supabase: isSupabaseConfigured() ? 'configured' : 'unconfigured',
      resend: isResendConfigured() ? 'configured' : 'unconfigured',
    },
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)',
    },
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    message: 'Portfolio API is running',
    services: {
      supabase: isSupabaseConfigured() ? 'configured' : 'missing_credentials',
      resend: isResendConfigured() ? 'configured' : 'missing_credentials',
    },
    timestamp: new Date().toISOString(),
  });
});

// 5. Contact Form Route
app.use('/api/contact', contactRoutes);

// 6. 404 & Centralized Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server with conflict handling (macOS AirPlay binds 5000)
const startServer = (portToUse) => {
  const server = app.listen(portToUse, () => {
    console.log(`=========================================`);
    console.log(`🚀 Portfolio Backend Server Running`);
    console.log(`📡 URL: http://localhost:${portToUse}`);
    console.log(`🩺 Health: http://localhost:${portToUse}/api/health`);
    console.log(`⚡ Supabase: ${isSupabaseConfigured() ? 'Configured' : 'Missing credentials'}`);
    console.log(`📧 Resend:   ${isResendConfigured() ? 'Configured' : 'Missing credentials'}`);
    console.log(`=========================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const altPort = Number(portToUse) + 1;
      console.warn(`⚠️  Port ${portToUse} is in use. Falling back to port ${altPort}...`);
      startServer(altPort);
    } else {
      console.error('Server error:', err);
    }
  });
};

if (!process.env.VERCEL) {
  startServer(PORT);
}

export default app;
