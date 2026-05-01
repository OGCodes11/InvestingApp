import { Router } from 'express';
import { healthResponseSchema } from '@investiq/shared/health';

const router = Router();

router.get('/', (_req, res) => {
  const response = healthResponseSchema.parse({
    ok: true,
    service: 'api',
    timestamp: new Date().toISOString(),
  });

  res.json(response);
});

export { router as healthRouter };
