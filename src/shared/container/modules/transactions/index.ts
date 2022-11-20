import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import { TransactionRepository } from '@modules/transactions/repositories/type-orm/transactions.repository'
import { container } from 'tsyringe'

container.registerSingleton<TransactionsRepository>(
  'TransactionsRepository',
  TransactionRepository
)
