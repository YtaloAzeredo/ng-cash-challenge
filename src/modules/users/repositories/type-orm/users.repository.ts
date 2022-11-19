import { Users } from '@modules/users/models/type-orm/users.model'
import { UsersRepository } from '../users-repository.interface'

export class UserRepository implements UsersRepository {
  async getAll (): Promise<Users[]> {
    return Users.find()
  }

  async getOne ({ id, username }: { id?: number, username?: string }): Promise<Users> {
    const response = await Users.findOneBy({ id, username }) as Users
    return response
  }

  add (dataValues: Users): Users {
    return Users.create(dataValues)
  }

  async store (dataValues: Users): Promise<Users> {
    const response = Users.create(dataValues)
    return response.save()
  }

  async save (request: Users): Promise<Users> {
    return request.save()
  }

  async remove (request: Users): Promise<Users> {
    return request.remove()
  }
}
