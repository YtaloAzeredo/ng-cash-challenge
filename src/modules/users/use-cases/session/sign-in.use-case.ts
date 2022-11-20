
import { UsersModel } from '@modules/users/models/users-model.interface'
import { UsersRepository } from '@modules/users/repositories/users-repository.interface'
import { UseCase } from '@shared/presentation/protocols/use-case.interface'
import { inject, injectable } from 'tsyringe'
import { CreateToken } from '@container/providers/jwt/interfaces/create-token.interface'
import NotFoundError from '@errors/not-found.error'
import { Compare } from '@shared/container/providers/bcrypt/interfaces/compare-use-case.interface'

const defaultError = 'Incorrect email or password'
const dateFormat = 'pt-BR'
const expirationTime = process.env.APP_SECRET_EXPIRATION_TIME as string

@injectable()
export class SignInUseCase implements UseCase {
  constructor (
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
    @inject('CreateTokenUseCase')
    private readonly authService: CreateToken,
    @inject('CompareEncryptUseCase')
    private readonly encryptService: Compare
  ) {}

  async execute (userData: UsersModel): Promise<{token: string, expires: string}> {
    const foundUser = await this.usersRepository.getOne({ email: userData.username })
    if (!foundUser) throw new NotFoundError(defaultError)
    const passwordMatch = await this.encryptService.compare(userData.password, foundUser.password)
    if (!passwordMatch) throw new NotFoundError(defaultError)
    const token = await this.authService.createToken({ username: userData.username, password: userData.password })
    let now = new Date().getTime()
    now += this.addDateHours()
    const expires = new Date(now).toLocaleString(dateFormat)
    return {
      token,
      expires
    }
  }

  private addDateHours () {
    return Number(expirationTime) * 60 * 60 * 1000
  }
}
