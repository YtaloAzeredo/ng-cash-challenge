import { UseCase } from '@presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http.interface'

@injectable()
export class WithdrawBalanceController implements Controller {
  constructor (
    @inject('WithdrawBalanceUseCase')
    private readonly withdrawBalanceUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.withdrawBalanceUseCase.execute({
      id: req.params.accountId,
      balance: req.body.balance
    })
    return {
      response
    }
  }
}
