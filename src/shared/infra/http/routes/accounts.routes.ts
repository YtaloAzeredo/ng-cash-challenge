import { adaptRoute } from '@adapters/express-route.adapter'
import { BalanceTransactionController } from '@modules/accounts/use-cases/balance-transaction/balance-transaction.controller'
import { EnterBalanceController } from '@modules/accounts/use-cases/enter-balance/enter-balance.controller'
import { GetOneAccountsController } from '@modules/accounts/use-cases/get-one-accounts/get-one-accounts.controller'
import { WithdrawBalanceController } from '@modules/accounts/use-cases/withdraw-balance/withdraw-balance.controller'
import { Router } from 'express'

const router = Router()

router.get(
  '/accounts/users/:userId',
  adaptRoute(GetOneAccountsController)
)

router.post(
  '/accounts/:accountId/enter-balance',
  adaptRoute(EnterBalanceController)
)

router.post(
  '/accounts/:accountId/withdraw-balance',
  adaptRoute(WithdrawBalanceController)
)

router.post(
  '/accounts/:accountId/balance-transaction',
  adaptRoute(BalanceTransactionController)
)

export default router
