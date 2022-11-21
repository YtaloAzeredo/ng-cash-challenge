import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import NotFoundError from '@errors/not-found.error'
import { TransactionsModel } from '@modules/transactions/models/transactions-model.interface'

@injectable()
export class GetOneTransactionsUseCase implements UseCase {
  constructor (
    @inject('TransactionsRepository')
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute (id: number): Promise<TransactionsModel> {
    const foundTransaction = await this.transactionsRepository.getOne({ id })
    if (!foundTransaction) throw new NotFoundError('Transaction not found')
    return foundTransaction
  }
}
