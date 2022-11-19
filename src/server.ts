import 'express-async-errors'
import express from 'express'
import './bootstrap'
import './shared/infra/type-orm/database'
import 'reflect-metadata'
import { errorHandler } from './shared/infra/http/middlewares/error-handler.middleware'
import { middlewares } from './shared/infra/http/middlewares'
import { routes } from './shared/infra/http/routes'
import '@shared/container'

const port = process.env.PORT

const handleErrorException = () => {
  process.on('uncaughtException', (error, origin) => {
    console.log(`${origin}: ${error}`)
  })

  process.on('unhandledRejection', (error) => {
    console.log(`unhandledRejection: ${error}`)
  })
}

const startApp = () => {
  const app = express()
  app.use(express.json())
  middlewares.map(middleware => app.use(middleware))
  routes.map((route) => app.use(route))
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
  handleErrorException()
  app.use(errorHandler)
}

startApp()
