import { AccountsModel } from '@modules/accounts/models/accounts-model.interface'
import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateAccountsUseCase implements UseCase {
  constructor (
    @inject('AccountsRepository')
    private readonly accountsRepository: AccountsRepository
  ) {}

  async execute (accountData: AccountsModel): Promise<AccountsModel> {
    return this.accountsRepository.store(accountData)
  }
}
