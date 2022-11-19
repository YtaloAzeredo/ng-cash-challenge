import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { AccountRepository } from '@modules/accounts/repositories/type-orm/accounts.repository'
import { CreateAccountsUseCase } from '@modules/accounts/use-cases/create-accounts/create-accounts.use-case'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { container } from 'tsyringe'

container.registerSingleton<UseCase>(
  'CreateAccountsUseCase',
  CreateAccountsUseCase
)

container.registerSingleton<AccountsRepository>(
  'AccountsRepository',
  AccountRepository
)
