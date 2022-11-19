import { adaptRoute } from '@adapters/express-route.adapter'
import { CreateUsersController } from '@modules/users/use-cases/create-users/create-users.controller'
import { Router } from 'express'
import { postUsersValidator } from './validators/users-routes.validator'

const router = Router()

router.post(
  '/users',
  postUsersValidator,
  adaptRoute(CreateUsersController)
)

export default router
