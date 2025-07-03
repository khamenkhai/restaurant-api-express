import { AppError } from "../utils/app-error";
// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    status: 'error',
    statusCode: status,
    message,
  });
};
