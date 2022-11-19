import jwt from 'jsonwebtoken'
import { injectable } from 'tsyringe'
import { CreateToken } from '../interfaces/create-token.interface'

const appSecret = process.env.APP_SECRET as string
const expirationTime = process.env.APP_SECRET_EXPIRATION_TIME as string
const inHours: string = 'h'

@injectable()
export class JwtCreateTokenUseCase implements CreateToken {
  async createToken (data: any): Promise<string> {
    return jwt.sign(
      data,
      appSecret,
      { expiresIn: expirationTime + inHours }
    )
  }
}
