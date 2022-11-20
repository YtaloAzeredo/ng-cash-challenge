import { AccountsModel } from '../../accounts/models/accounts-model.interface'

export interface TransactionsModel {
  id?: number
  debitedAccount?: AccountsModel | number
  creditedAccount?: AccountsModel | number
  value: number
  code: string
}
