import { container } from 'tsyringe'
import { CreateToken } from './interfaces/create-token.interface'
import { JwtCreateTokenUseCase } from './use-cases/create-token.use-case'

container.registerSingleton<CreateToken>(
  'CreateTokenUseCase',
  JwtCreateTokenUseCase
)
