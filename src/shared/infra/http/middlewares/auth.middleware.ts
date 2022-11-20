import { UnauthorizedError } from '@errors/unauthorized.error'
import { DecodeToken } from '@shared/container/providers/jwt/interfaces/decode-token.interface'
import { JwtDecodeTokenUseCase } from '@shared/container/providers/jwt/use-cases/decode-token.use-case'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.url.startsWith('/public')) {
    const authToken = req.headers?.authorization
    if (!authToken) throw new UnauthorizedError()
    const checkToken = container.resolve(JwtDecodeTokenUseCase) as DecodeToken
    await checkToken.decodeToken(authToken)
  }
  next()
}
