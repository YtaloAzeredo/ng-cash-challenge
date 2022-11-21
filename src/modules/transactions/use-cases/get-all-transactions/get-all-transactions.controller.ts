import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@shared/presentation/protocols/http.interface'

@injectable()
export class GetAllTransactionsController implements Controller {
  constructor (
    @inject('GetAllTransactionsUseCase')
    private readonly getAllTransactionsUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.getAllTransactionsUseCase.execute({
      userId: req.params.userId,
      transactionCode: req.query.transaction_code,
      transactionDate: req.query.transaction_date
    })
    return {
      response
    }
  }
}
