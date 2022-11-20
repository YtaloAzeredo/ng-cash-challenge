import { container } from 'tsyringe'
import { CreateToken } from './interfaces/create-token.interface'
import { DecodeToken } from './interfaces/decode-token.interface'
import { JwtCreateTokenUseCase } from './use-cases/create-token.use-case'
import { JwtDecodeTokenUseCase } from './use-cases/decode-token.use-case'

container.registerSingleton<CreateToken>(
  'CreateTokenUseCase',
  JwtCreateTokenUseCase
)

container.registerSingleton<DecodeToken>(
  'DecodeTokenUseCase',
  JwtDecodeTokenUseCase
)
