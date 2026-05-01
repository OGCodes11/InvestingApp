import { Router } from 'express';
import { requireAuth, type AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();

router.get('/', requireAuth, (req: AuthenticatedRequest, res) => {
  res.json({
    id: req.user?.id ?? null,
    verified: false,
  });
});

export { router as meRouter };
