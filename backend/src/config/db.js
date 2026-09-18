import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri || mongoUri.includes('your_mongodb_connection_string')) {
    console.warn('⚠️  MONGODB_URI is not configured in .env. Running in database-disconnected mode.');
    return;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️  Server will remain operational without database persistence until connection is restored.');
  }
};

export const isDbConnected = () => isConnected && mongoose.connection.readyState === 1;

export default connectDB;
