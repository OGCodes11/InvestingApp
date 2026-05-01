import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { healthRouter } from './routes/health.js';
import { meRouter } from './routes/me.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    name: 'InvestIQ API',
    version: '0.1.0',
  });
});

app.use('/api/v1/health', healthRouter);
app.use('/api/v1/me', meRouter);

app.listen(env.PORT, () => {
  // Keeps startup output short and easy to scan in local dev.
  console.log(`@investiq/api listening on http://localhost:${env.PORT}`);
});
