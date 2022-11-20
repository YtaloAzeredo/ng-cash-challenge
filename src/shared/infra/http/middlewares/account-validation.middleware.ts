import { UnauthorizedError } from '@errors/unauthorized.error'
import { UserRepository } from '@modules/users/repositories/type-orm/users.repository'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { container } from 'tsyringe'
const appSecret = process.env.APP_SECRET as string

export const accountValidation = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization as string
  let decodedData: userType = { username: '' }
  jwt.verify(authToken, appSecret, (e: any, decoded: any) => {
    decodedData = decoded
  })
  const username = getUsername(decodedData)
  const accountId = +req.params.accountId
  const userRepo = container.resolve(UserRepository) as UsersRepository
  const user = await userRepo.getOne({ username })
  if (user.accountId !== accountId) throw new UnauthorizedError()

  next()
}

const getUsername = (decodedData: userType) => {
  return decodedData.username
}

type userType = {
  username: string
}
