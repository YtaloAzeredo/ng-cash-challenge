import ConflictError from '@errors/conflict.error'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { Encrypt } from '@shared/container/providers/bcrypt/interfaces/encrypt-use-case.interface'
import { UsersModel } from '@modules/users/models/users-model.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUsersUseCase implements UseCase {
  constructor (
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
    @inject('EncryptUseCase')
    private readonly encryptService: Encrypt,
    @inject('CreateAccountsUseCase')
    private readonly createAccountsUseCase: UseCase
  ) {}

  async execute (userData: UsersModel): Promise<UsersModel> {
    const userExist = await this.usersRepository.getOne({ username: userData.username })
    if (userExist) throw new ConflictError('User already exist')
    userData.password = await this.encryptService.encrypt(userData.password)
    const userAccount = await this.createAccountsUseCase.execute({ balance: 100 })
    userData.accountId = userAccount.id
    return this.usersRepository.store(userData)
  }
}
