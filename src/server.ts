import express from 'express'
import './bootstrap'
import './shared/infra/type-orm/database'
import 'reflect-metadata'
import { errorHandler } from './middlewares/error-handler.middleware'

const app = express()
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
  app.use(express.json())
  app.use('/', (req, res) => {
    return res.status(200).json('hello world')
  })
  // routes.map((route) => app.use(route))
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
  handleErrorException()
  app.use(errorHandler)
}

startApp()
