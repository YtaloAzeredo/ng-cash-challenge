import { body } from 'express-validator'
import { defaultCheck } from './default.validator'

export const postUsersValidator = [
  body('username').isString().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  defaultCheck
]
