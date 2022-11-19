import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
const defaultFailCode = 422
const defaultMessage = 'All fields must be filled in correctly'

export const defaultCheck = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(defaultFailCode)
      .json({
        errors: errors.array(),
        defaultMessage
      })
  }
  next()
}
