import type { NextFunction, Request, Response } from 'express';

export type AuthenticatedRequest = Request & {
  user?: {
    id: string;
  };
};

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing bearer token' });
    return;
  }

  const token = authHeader.slice('Bearer '.length).trim();
  if (!token) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }

  // Placeholder auth for scaffolding; replace with Firebase verification next.
  req.user = { id: 'dev-user' };
  next();
}
