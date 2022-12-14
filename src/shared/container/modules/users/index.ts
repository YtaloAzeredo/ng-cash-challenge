import { UserRepository } from '@modules/users/repositories/type-orm/users.repository'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { CreateUsersUseCase } from '@modules/users/use-cases/create-users/create-users.use-case'
import { GetOneUsersUseCase } from '@modules/users/use-cases/get-one-users/get-one-users.use-case'
import { SignInUseCase } from '@modules/users/use-cases/session/sign-in.use-case'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { container } from 'tsyringe'

container.registerSingleton<UseCase>(
  'CreateUsersUseCase',
  CreateUsersUseCase
)

container.registerSingleton<UsersRepository>(
  'UsersRepository',
  UserRepository
)

container.registerSingleton<UseCase>(
  'SignInUseCase',
  SignInUseCase
)

container.registerSingleton<UseCase>(
  'GetOneUsersUseCase',
  GetOneUsersUseCase
)
