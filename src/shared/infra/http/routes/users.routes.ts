import { adaptRoute } from '@adapters/express-route.adapter'
import { CreateUsersController } from '@modules/users/use-cases/create-users/create-users.controller'
import { Router } from 'express'

const router = Router()

router.post(
  '/users',
  adaptRoute(CreateUsersController)
)

export default router
