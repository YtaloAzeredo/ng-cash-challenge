import { Request, Response, NextFunction } from 'express'

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}
