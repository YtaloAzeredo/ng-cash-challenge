import ConflictError from '@errors/conflict.error'
import NotFoundError from '@errors/not-found.error'
import { AccountsModel } from '@modules/accounts/models/accounts-model.interface'
import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class WithdrawBalanceUseCase implements UseCase {
  constructor (
    @inject('AccountsRepository')
    private readonly accountsRepository: AccountsRepository
  ) {}

  async execute (accountData: AccountsModel): Promise<AccountsModel> {
    const foundAccount = await this.accountsRepository.getOne({ id: accountData.id })
    if (!foundAccount) throw new NotFoundError('Account not found')
    const canWithdrawBalance = foundAccount.balance >= accountData.balance
    if (!canWithdrawBalance) throw new ConflictError('Insufficient balance for withdrawal')
    foundAccount.balance -= accountData.balance
    return this.accountsRepository.save(foundAccount)
  }
}
