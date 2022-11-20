import { TransactionsModel } from '../models/transactions-model.interface'

export interface TransactionsRepository {
  getAll(data?: any): Promise<TransactionsModel[]>
  getOne(data: any): Promise<TransactionsModel>
  add(data: any): TransactionsModel
  store(data: TransactionsModel): Promise<TransactionsModel>
  save(data: any): Promise<TransactionsModel>
  remove(data: any): Promise<TransactionsModel>
}
