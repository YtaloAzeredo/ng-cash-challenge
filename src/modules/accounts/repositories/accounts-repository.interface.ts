import { AccountsModel } from '../models/accounts-model.interface'

export interface AccountsRepository {
  getAll(data?: any): Promise<AccountsModel[]>
  getOne(data: any): Promise<AccountsModel>
  add(data: any): AccountsModel
  store(data: any): Promise<AccountsModel>
  save(data: any): Promise<AccountsModel>
  remove(data: any): Promise<AccountsModel>
}
