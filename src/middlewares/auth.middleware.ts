import { AcessDeniedError } from '@errors/access-denied.error'
import { UnauthorizedError } from '@errors/unauthorized.error'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
const appSecret = process.env.APP_SECRET as string

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.url.startsWith('/public')) {
    const authToken = req.headers?.authorization
    if (!authToken) throw new UnauthorizedError()
    jwt.verify(authToken, appSecret, (error: any) => {
      if (error) throw new AcessDeniedError()
    })
  }
  next()
}
