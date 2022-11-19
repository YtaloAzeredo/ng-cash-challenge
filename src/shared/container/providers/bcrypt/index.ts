import { container } from 'tsyringe'
import { Compare } from './interfaces/compare-use-case.interface'
import { Encrypt } from './interfaces/encrypt-use-case.interface'
import { BcryptCompareUseCase } from './use-cases/compare.use-case'
import { BcryptEncryptUseCase } from './use-cases/encrypt.use-case'

container.registerSingleton<Encrypt>(
  'EncryptUseCase',
  BcryptEncryptUseCase
)

container.registerSingleton<Compare>(
  'CompareEncryptUseCase',
  BcryptCompareUseCase
)
