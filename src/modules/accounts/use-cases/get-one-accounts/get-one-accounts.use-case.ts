import NotFoundError from '@errors/not-found.error'
import { AccountsModel } from '@modules/accounts/models/accounts-model.interface'
import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetOneAccountsUseCase implements UseCase {
  constructor (
    @inject('AccountsRepository')
    private readonly accountsRepository: AccountsRepository,
    @inject('GetOneUsersUseCase')
    private readonly getOneUsersUseCase: UseCase
  ) {}

  async execute (userId: number): Promise<AccountsModel> {
    const foundUser = await this.getOneUsersUseCase.execute({ id: userId })
    const foundAccount = await this.accountsRepository.getOne({ id: foundUser.accountId })
    if (!foundAccount) throw new NotFoundError('Account not found')
    return foundAccount
  }
}
