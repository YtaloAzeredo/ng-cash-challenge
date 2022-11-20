import { adaptRoute } from '@adapters/express-route.adapter'
import { CreateUsersController } from '@modules/users/use-cases/create-users/create-users.controller'
import { SignInController } from '@modules/users/use-cases/session/sign-in.controller'
import { Router } from 'express'
import { postUsersValidator } from './validators/users-routes.validator'

const router = Router()

router.post(
  '/public/users',
  postUsersValidator,
  adaptRoute(CreateUsersController)
)

router.post(
  '/public/sign-in',
  adaptRoute(SignInController)
)

export default router
