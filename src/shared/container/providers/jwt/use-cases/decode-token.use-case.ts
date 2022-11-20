import { AcessDeniedError } from '@errors/access-denied.error'
import jwt from 'jsonwebtoken'
import { injectable } from 'tsyringe'
import { DecodedData, DecodeToken } from '../interfaces/decode-token.interface'

const appSecret = process.env.APP_SECRET as string

@injectable()
export class JwtDecodeTokenUseCase implements DecodeToken {
  async decodeToken (token: string): Promise<DecodedData> {
    let decodedData: DecodedData = { username: '' }
    jwt.verify(token, appSecret, (error: any, decoded: any) => {
      if (error) throw new AcessDeniedError()
      decodedData = decoded
    })
    return decodedData
  }
}
