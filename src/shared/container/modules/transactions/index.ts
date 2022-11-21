import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import { TransactionRepository } from '@modules/transactions/repositories/type-orm/transactions.repository'
import { GetAllTransactionsUseCase } from '@modules/transactions/use-cases/get-all-transactions/get-all-transactions.use-case'
import { GetOneTransactionsUseCase } from '@modules/transactions/use-cases/get-one-transactions/get-one-transactions.use-case'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { container } from 'tsyringe'

container.registerSingleton<TransactionsRepository>(
  'TransactionsRepository',
  TransactionRepository
)

container.registerSingleton<UseCase>(
  'GetOneTransactionsUseCase',
  GetOneTransactionsUseCase
)

container.registerSingleton<UseCase>(
  'GetAllTransactionsUseCase',
  GetAllTransactionsUseCase
)
