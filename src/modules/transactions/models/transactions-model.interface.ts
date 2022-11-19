import { AccountsModel } from '../../accounts/models/accounts-model.interface'

export interface TransactionsModel {
  id: number
  debitedAccountId?: AccountsModel
  creditedAccountId?: AccountsModel
  value: number
}
