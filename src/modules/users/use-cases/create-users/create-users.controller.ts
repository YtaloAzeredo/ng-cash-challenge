import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject } from 'tsyringe'
import { Controller } from '@presentation/protocols/controller.interface'
import { HttpRequest, HttpResponse } from '@shared/presentation/protocols/http.interface'

export class CreateUsersController implements Controller {
  constructor (
    @inject('CreateUsersUseCase')
    private readonly createUsersUseCase: UseCase
  ) { }

  async handle (req: HttpRequest): Promise<HttpResponse> {
    const response = await this.createUsersUseCase.execute(req.body)
    return {
      response
    }
  }
}
