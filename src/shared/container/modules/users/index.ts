import { UserRepository } from '@modules/users/repositories/type-orm/users.repository'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { CreateUsersUseCase } from '@modules/users/use-cases/create-users/create-users.use-case'
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
