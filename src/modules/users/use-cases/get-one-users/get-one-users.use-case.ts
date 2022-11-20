import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { UsersModel } from '@modules/users/models/users-model.interface'
import { inject, injectable } from 'tsyringe'
import NotFoundError from '@errors/not-found.error'

@injectable()
export class GetOneUsersUseCase implements UseCase {
  constructor (
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository
  ) {}

  async execute (userData: UsersModel): Promise<UsersModel> {
    const foundUser = await this.usersRepository.getOne({ id: userData.id })
    if (!foundUser) throw new NotFoundError('User not found')
    return foundUser
  }
}
