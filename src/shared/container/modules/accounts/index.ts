import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { AccountRepository } from '@modules/accounts/repositories/type-orm/accounts.repository'
import { BalanceTransactionUseCase } from '@modules/accounts/use-cases/balance-transaction/balance-transaction.use-case'
import { CreateAccountsUseCase } from '@modules/accounts/use-cases/create-accounts/create-accounts.use-case'
import { EnterBalanceUseCase } from '@modules/accounts/use-cases/enter-balance/enter-balance.use-case'
import { GetOneAccountsUseCase } from '@modules/accounts/use-cases/get-one-accounts/get-one-accounts.use-case'
import { WithdrawBalanceUseCase } from '@modules/accounts/use-cases/withdraw-balance/withdraw-balance.use-case'
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

container.registerSingleton<UseCase>(
  'GetOneAccountsUseCase',
  GetOneAccountsUseCase
)

container.registerSingleton<UseCase>(
  'EnterBalanceUseCase',
  EnterBalanceUseCase
)

container.registerSingleton<UseCase>(
  'WithdrawBalanceUseCase',
  WithdrawBalanceUseCase
)

container.registerSingleton<UseCase>(
  'BalanceTransactionUseCase',
  BalanceTransactionUseCase
)
