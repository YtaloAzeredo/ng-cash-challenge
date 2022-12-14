import ConflictError from '@errors/conflict.error'
import NotFoundError from '@errors/not-found.error'
import { AccountsModel } from '@modules/accounts/models/accounts-model.interface'
import { AccountsRepository } from '@modules/accounts/repositories/accounts-repository.interface'
import { TransactionCodes } from '@modules/transactions/constants/transaction-codes.enum'
import { TransactionsModel } from '@modules/transactions/models/transactions-model.interface'
import { TransactionsRepository } from '@modules/transactions/repositories/transactions-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class BalanceTransactionUseCase implements UseCase {
  constructor (
    @inject('AccountsRepository')
    private readonly accountsRepository: AccountsRepository,
    @inject('WithdrawBalanceUseCase')
    private readonly withdrawBalanceUseCase: UseCase,
    @inject('EnterBalanceUseCase')
    private readonly enterBalanceUseCase: UseCase,
    @inject('TransactionsRepository')
    private readonly transactionRepository: TransactionsRepository
  ) {}

  async execute (accountData: AccountData): Promise<TransactionsModel> {
    const { id: originAccountId, balance, destinationAccountId } = accountData
    const canTransferBalance = originAccountId !== destinationAccountId
    if (!canTransferBalance) throw new ConflictError('It is not possible to transfer the balance to yourself')
    const foundOriginAccount = await this.accountsRepository.getOne({ id: originAccountId })
    if (!foundOriginAccount) throw new NotFoundError('Origin account not found')
    const foundDestinationAccount = await this.accountsRepository.getOne({ id: destinationAccountId })
    if (!foundDestinationAccount) throw new NotFoundError('Destination account not found')
    await this.withdrawBalanceUseCase.execute({ id: foundOriginAccount.id, balance })
    await this.enterBalanceUseCase.execute({ id: foundDestinationAccount.id, balance })
    return this.transactionRepository.store({
      debitedAccountId: foundOriginAccount.id,
      creditedAccountId: foundDestinationAccount.id,
      value: balance,
      code: TransactionCodes.transfer
    })
  }
}

interface AccountData extends AccountsModel {
  destinationAccountId: number
}
