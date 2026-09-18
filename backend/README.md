# Portfolio Backend API — Gourab Ghosh

A standalone, secure Node.js and Express REST API service for handling contact form inquiries, MongoDB database persistence, Nodemailer email notifications, and spam protection for the portfolio website.

---

## 🛠️ Tech Stack & Dependencies

- **Node.js** (v18+) with ES Modules (`type: module`)
- **Express.js**: REST API server framework
- **Mongoose**: MongoDB object modeling and schema validation
- **Nodemailer**: Automated email dispatch
- **Helmet**: HTTP response security headers
- **CORS**: Origin access control
- **express-rate-limit**: Abuse & spam prevention
- **express-validator**: Schema input validation and sanitization
- **dotenv**: Environment variable isolation
- **nodemon**: Automatic server reloading during development

---

## 📁 Directory Architecture

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & resilience
│   ├── controllers/
│   │   └── contactController.js  # Validation, DB save, & email dispatch
│   ├── models/
│   │   └── Contact.js            # Contact Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js      # /api/contact router & express-validator
│   ├── middleware/
│   │   ├── errorHandler.js       # Centralized error handler & 404
│   │   └── rateLimiter.js        # IP rate limiter (5 submissions / 15m)
│   └── server.js                 # Server initialization, CORS, Helmet
├── .env                          # Local secrets (NEVER commit to Git)
├── .env.example                  # Template configuration
├── .gitignore                    # Ignores .env and node_modules
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure your credentials in `.env`:
   ```env
   # Server Port
   PORT=5000
   NODE_ENV=development

   # MongoDB Connection String (Atlas or Local)
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority

   # Email Service (Gmail / SMTP)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_16_digit_google_app_password

   # Target recipient
   CONTACT_RECEIVER_EMAIL=ggourab217@gmail.com

   # Allowed Frontend Origins (Comma-separated)
   FRONTEND_URL=http://localhost:3000,http://localhost:5173
   ```

> [!TIP]
> **Gmail App Password Setup**: If using Gmail, enable 2-Step Verification in your Google Account, generate an **App Password** under Security, and paste the 16-character string into `EMAIL_PASSWORD`.

---

## 🚀 Running the Backend

### Installation
```bash
cd backend
npm install
```

### Development Mode (with hot-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Backend will be accessible at: `http://localhost:5000`

---

## 📡 API Endpoints

### 1. Health Check
- **Endpoint**: `GET /api/health`
- **Description**: Verifies backend server health and operational status.
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Portfolio API is running",
    "timestamp": "2026-09-17T14:40:00.000Z"
  }
  ```

### 2. Contact Form Submission
- **Endpoint**: `POST /api/contact`
- **Rate Limit**: 5 submissions per 15 minutes per IP
- **Request Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Project Collaboration",
    "message": "Hi Gourab, I loved your portfolio and would like to discuss an opportunity."
  }
  ```
- **Success Response (`200 OK`)**:
  ```json
  {
    "success": true,
    "message": "Message received successfully."
  }
  ```
- **Validation Failure (`400 Bad Request`)**:
  ```json
  {
    "success": false,
    "message": "Please provide a valid email address.",
    "errors": [
      { "field": "email", "message": "Please provide a valid email address." }
    ]
  }
  ```
- **Rate Limit Exceeded (`429 Too Many Requests`)**:
  ```json
  {
    "success": false,
    "message": "Too many contact requests from this IP. Please try again after 15 minutes."
  }
  ```

---

## 🔗 Frontend Integration

In your `frontend/` application:
1. Create `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
2. Call the API from your contact component:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   const response = await fetch(`${apiUrl}/api/contact`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   const data = await response.json();
   ```
