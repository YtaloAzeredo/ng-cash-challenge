import { Accounts } from '@modules/accounts/models/type-orm/accounts.model'
import { AccountsRepository } from '../accounts-repository.interface'

export class AccountRepository implements AccountsRepository {
  async getAll (): Promise<Accounts[]> {
    return Accounts.find()
  }

  async getOne ({ id }: { id?: number }): Promise<Accounts> {
    const response = await Accounts.findOneBy({ id }) as Accounts
    return response
  }

  add (dataValues: Accounts): Accounts {
    return Accounts.create(dataValues)
  }

  async store (dataValues: Accounts): Promise<Accounts> {
    const response = Accounts.create(dataValues)
    return response.save()
  }

  async save (request: Accounts): Promise<Accounts> {
    return request.save()
  }

  async remove (request: Accounts): Promise<Accounts> {
    return request.remove()
  }
}
