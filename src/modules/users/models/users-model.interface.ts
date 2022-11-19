import { AccountsModel } from '../../accounts/models/accounts-model.interface'

export interface UsersModel {
  id: number
  username: string
  password: string
  accountId: AccountsModel
}
