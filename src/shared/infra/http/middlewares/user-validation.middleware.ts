import { UnauthorizedError } from '@errors/unauthorized.error'
import { UserRepository } from '@modules/users/repositories/type-orm/users.repository'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { DecodeToken } from '@shared/container/providers/jwt/interfaces/decode-token.interface'
import { JwtDecodeTokenUseCase } from '@shared/container/providers/jwt/use-cases/decode-token.use-case'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

export const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization as string
  const checkToken = container.resolve(JwtDecodeTokenUseCase) as DecodeToken
  const decodedData = await checkToken.decodeToken(authToken)
  const username = getUsername(decodedData)
  const userId = +req.params.userId
  const userRepo = container.resolve(UserRepository) as UsersRepository
  const user = await userRepo.getOne({ username })
  if (user.id !== userId) throw new UnauthorizedError()

  next()
}

const getUsername = (decodedData: userType) => {
  return decodedData.username
}

type userType = {
  username: string
}
