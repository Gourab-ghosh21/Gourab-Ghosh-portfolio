const { spawn } = require('child_process');
const path = require('path');

const rootDir = __dirname;
const frontendDir = path.join(rootDir, 'frontend');
const backendDir = path.join(rootDir, 'backend');

console.log('[36m%s[0m', '==================================================');
console.log('[33m%s[0m', '🚀 Gourab Ghosh Portfolio Development Servers');
console.log('[36m%s[0m', '==================================================');
console.log('[32m%s[0m', '📡 Backend:  http://localhost:5001 (REST API)');
console.log('[34m%s[0m', '🌐 Frontend: http://localhost:3000 (Vite UI)');
console.log('[90m%s[0m', 'Press Ctrl+C at any time to stop both servers.\n');

const backend = spawn('npm run dev', {
  cwd: backendDir,
  stdio: 'inherit',
  shell: true,
});

const frontend = spawn('npm run dev', {
  cwd: frontendDir,
  stdio: 'inherit',
  shell: true,
});

const cleanup = (code) => {
  if (backend && !backend.killed) backend.kill('SIGINT');
  if (frontend && !frontend.killed) frontend.kill('SIGINT');
  process.exit(code || 0);
};

process.on('SIGINT', () => cleanup(0));
process.on('SIGTERM', () => cleanup(0));
process.on('exit', () => cleanup(0));

backend.on('error', (err) => console.error('Backend process error:', err));
frontend.on('error', (err) => console.error('Frontend process error:', err));
