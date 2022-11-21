import { AccountsModel } from '../../accounts/models/accounts-model.interface'

export interface TransactionsModel {
  id?: number
  debitedAccount?: AccountsModel | number
  debitedAccountId?: number
  creditedAccount?: AccountsModel | number
  creditedAccountId?: number
  value: number
  code: string
  createdAt?: Date
  updateddAt?: Date
}
