import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import NotFoundError from '@errors/not-found.error'
import { TransactionsModel } from '@modules/transactions/models/transactions-model.interface'

@injectable()
export class GetAllTransactionsUseCase implements UseCase {
  constructor (
    @inject('GetOneAccountsUseCase')
    private readonly getOneAccountsUseCase: UseCase,
    @inject('TransactionsRepository')
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute ({
    userId,
    transactionCode,
    transactionDate
  }: transactionData): Promise<TransactionsModel[]> {
    const account = await this.getOneAccountsUseCase.execute(userId)
    let transactions = await this.transactionsRepository.getAll({
      accountId: account.id,
      transactionCode
    })
    if (transactionDate) {
      transactions = transactions.filter(transaction => {
        const transacDate = transaction.createdAt?.toLocaleDateString('pt-BR')
        if (transacDate === transactionDate) return transaction
      })
    }
    if (!transactions.length) throw new NotFoundError('Transactions not found')
    return transactions
  }
}

type transactionData = {
  userId: number,
  transactionCode: string,
  transactionDate: string
}
