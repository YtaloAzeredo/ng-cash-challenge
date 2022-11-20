import { adaptRoute } from '@adapters/express-route.adapter'
import { GetOneAccountsController } from '@modules/accounts/use-cases/get-one-accounts/get-one-accounts.controller'
import { Router } from 'express'

const router = Router()

router.get(
  '/accounts/users/:userId',
  adaptRoute(GetOneAccountsController)
)

export default router
