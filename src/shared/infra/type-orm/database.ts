import { DataSourceOptions, createConnection, Connection } from 'typeorm'

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: ['src/**/*.model.ts'],
  migrations: ['src/database/migrations/*'],

  logging: false,
  synchronize: true
}

class DataBase {
  constructor () {
    this.connection()
  }

  async connection (): Promise<Connection> {
    return createConnection(config)
  }
}

export default new DataBase()
