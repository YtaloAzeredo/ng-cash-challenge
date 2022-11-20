import { UseCase } from '@presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http.interface'

@injectable()
export class GetOneAccountsController implements Controller {
  constructor (
    @inject('GetOneAccountsUseCase')
    private readonly getOneAccountsUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.getOneAccountsUseCase.execute(req.params.userId)
    return {
      response
    }
  }
}
