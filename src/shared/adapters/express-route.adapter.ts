import { NextFunction, Request, Response } from 'express'
import { container, InjectionToken } from 'tsyringe'

import { Controller } from '../presentation/protocols/controller.interface'
import { HttpRequest } from '../presentation/protocols/http.interface'

export const adaptRoute = (controllerClass: InjectionToken<Controller>): any => {
  return async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query
    }

    try {
      const controller = container.resolve(controllerClass)
      const response = await controller.handle(httpRequest)
      return res.json(response)
    } catch (err) {
      next(err)
    }
  }
}
