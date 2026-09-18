# Gourab Ghosh — Fullstack Developer Portfolio

A modern, high-performance portfolio website showcasing projects, skills, achievements, and technical experience. Built with a decoupled frontend and backend architecture, featuring a full-page 240-frame cinematic scroll-driven canvas background.

---

## 🚀 Overview

- **Developer**: Gourab Ghosh
- **Role**: Fullstack Developer & UI/UX Designer
- **Degree**: B.Tech CSE (AI ML), Adamas University
- **Architecture**: Decoupled Client-Server (Frontend + Backend)

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript / Vite
- **Styling**: Tailwind CSS (Dark theme `#0A0A0C` with vibrant orange `#FF5722` accents)
- **Cinematic Engine**: HTML5 Canvas scroll-driven animation (240 high-definition frames)
- **Icons**: Lucide Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js REST API
- **Security**: Helmet, CORS, Express Rate Limit
- **Mail**: Nodemailer for direct message notifications

---

## 📁 Repository Structure

```
portfolio/
├── frontend/                     # Frontend client application
│   ├── public/
│   │   ├── frames/               # 240 optimized animation frames
│   │   └── images/               # Portrait and brand assets
│   ├── src/
│   │   ├── components/           # Modular React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/                      # Express REST API backend
│   ├── src/
│   │   ├── config/               # Database & server config
│   │   ├── controllers/          # Request handlers
│   │   ├── middleware/           # Rate limiters & error handlers
│   │   ├── routes/               # Express API endpoints
│   │   └── server.js             # Server entry point
│   ├── .env.example
│   └── package.json
│
├── dev.js                        # Zero-dependency concurrent dev runner
├── package.json                  # Root runner script configuration
└── README.md
```

---

## ⚡ Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 2. Installation
Install dependencies for both frontend and backend from the root directory:
```bash
npm run install:all
```

### 3. Environment Variables
- In `backend/`: Copy `.env.example` to `.env` and fill in your details:
  ```bash
  cp backend/.env.example backend/.env
  ```
- In `frontend/`: Ensure `.env` points to your backend URL (defaults to `http://localhost:5001`).

### 4. Running the Development Servers
Start both frontend and backend concurrently with a single command:
```bash
npm run dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5001](http://localhost:5001)
- **Health Check**: [http://localhost:5001/api/health](http://localhost:5001/api/health)

---

## 📬 Contact API Endpoint

- **POST** `/api/contact`
  - Body: `{ "name": "...", "email": "...", "subject": "...", "message": "..." }`
  - Validated and rate-limited to protect against spam.

---

## 👤 Author

**Gourab Ghosh**
- Email: [ggourab217@gmail.com](mailto:ggourab217@gmail.com)
- GitHub: [@Gourab-ghosh21](https://github.com/Gourab-ghosh21)
- LinkedIn: [Gourab Ghosh](https://www.linkedin.com/in/gourab-ghosh-6110a328a)
