import { UseCase } from '@presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http.interface'

@injectable()
export class CreateAccountsController implements Controller {
  constructor (
    @inject('CreateAccountsUseCase')
    private readonly createAccountsUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.createAccountsUseCase.execute(req.body)
    return {
      response
    }
  }
}
