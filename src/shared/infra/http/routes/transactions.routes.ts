import { adaptRoute } from '@adapters/express-route.adapter'
import { GetAllTransactionsController } from '@modules/transactions/use-cases/get-all-transactions/get-all-transactions.controller'
import { GetOneTransactionsController } from '@modules/transactions/use-cases/get-one-transactions/get-one-transactions.controller'
import { Router } from 'express'
import { transactionValidation } from '../middlewares/transaction-validation.middleware'
import { userValidation } from '../middlewares/user-validation.middleware'
import { getTransactionsValidator } from './validators/transactions-routes.validator'

const router = Router()

router.get(
  '/transactions/:transactionId',
  transactionValidation,
  adaptRoute(GetOneTransactionsController)
)

router.get(
  '/transactions/users/:userId',
  userValidation,
  getTransactionsValidator,
  adaptRoute(GetAllTransactionsController)
)

export default router
