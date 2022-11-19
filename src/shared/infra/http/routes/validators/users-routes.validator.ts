import { body } from 'express-validator'
import { defaultCheck } from './default.validator'

export const postUsersValidator = [
  body('username')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  body('password')
    .isString()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/(?=.*[0-9])+(?=.*[A-Z])+(?=.[a-z])*/)
    .withMessage('Password must contain at least one number and one capital letter'),
  defaultCheck
]
