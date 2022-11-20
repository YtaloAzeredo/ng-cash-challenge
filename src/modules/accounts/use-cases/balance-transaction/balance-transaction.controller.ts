import { UseCase } from '@presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http.interface'

@injectable()
export class BalanceTransactionController implements Controller {
  constructor (
    @inject('BalanceTransactionUseCase')
    private readonly balanceTransactionUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.balanceTransactionUseCase.execute({
      id: req.params.accountId,
      balance: req.body.balance,
      destinationAccountId: req.body.destination_account_id
    })
    return {
      response
    }
  }
}
