import NotFoundError from '@errors/not-found.error'
import { AccountsModel } from '@modules/accounts/models/accounts-model.interface'
import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { TransactionCodes } from '@modules/transactions/constants/transaction-codes.enum'
import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class EnterBalanceUseCase implements UseCase {
  constructor (
    @inject('AccountsRepository')
    private readonly accountsRepository: AccountsRepository,
    @inject('TransactionsRepository')
    private readonly transactionRepository: TransactionsRepository
  ) {}

  async execute (accountData: AccountsModel): Promise<AccountsModel> {
    const foundAccount = await this.accountsRepository.getOne({ id: accountData.id })
    if (!foundAccount) throw new NotFoundError('Account not found')
    foundAccount.balance += accountData.balance
    await this.transactionRepository.store({
      creditedAccountId: foundAccount.id,
      value: accountData.balance,
      code: TransactionCodes['cash-in']
    })
    return this.accountsRepository.save(foundAccount)
  }
}
