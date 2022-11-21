import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@shared/presentation/protocols/http.interface'

@injectable()
export class GetOneTransactionsController implements Controller {
  constructor (
    @inject('GetOneTransactionsUseCase')
    private readonly createUsersUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.createUsersUseCase.execute(req.params.transactionId)
    return {
      response
    }
  }
}
