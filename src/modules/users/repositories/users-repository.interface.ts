import { UsersModel } from '../models/users-model.interface'

export interface UsersRepository {
  getAll(data?: any): Promise<UsersModel[]>
  getOne(data: any): Promise<UsersModel>
  add(data: any): UsersModel
  store(data: any): Promise<UsersModel>
  save(data: any): Promise<UsersModel>
  remove(data: any): Promise<UsersModel>
}
