import { Transactions } from '@modules/transactions/models/type-orm/transactions.model'
import { TransactionsRepository } from '../transactions-repository.interface'

export class TransactionRepository implements TransactionsRepository {
  async getAll (filters: { accountId: number, transactionCode: string}): Promise<Transactions[]> {
    return Transactions.find({
      where: [
        { creditedAccountId: filters.accountId, code: filters.transactionCode },
        { debitedAccountId: filters.accountId, code: filters.transactionCode }
      ]
    })
  }

  async getOne ({ id }: { id?: number }): Promise<Transactions> {
    const response = await Transactions.findOneBy({ id }) as Transactions
    return response
  }

  add (dataValues: Transactions): Transactions {
    return Transactions.create(dataValues)
  }

  async store (dataValues: Transactions): Promise<Transactions> {
    const response = Transactions.create(dataValues)
    return response.save()
  }

  async save (request: Transactions): Promise<Transactions> {
    return request.save()
  }

  async remove (request: Transactions): Promise<Transactions> {
    return request.remove()
  }
}
