import { RequestHandler } from 'express';

export const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json({ status: 'error', message: 'Not Authenticated' });
  }
  next();
};
