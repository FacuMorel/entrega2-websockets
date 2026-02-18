import app from '../src/expressApp.js';

// Handler para Vercel (serverless function)
export default function handler(req, res) {
  return app(req, res);
}

