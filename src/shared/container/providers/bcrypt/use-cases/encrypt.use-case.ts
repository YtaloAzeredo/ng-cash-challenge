import * as bcrypt from 'bcrypt'
import { injectable } from 'tsyringe'
import { Encrypt } from '../interfaces/encrypt-use-case.interface'

@injectable()
export class BcryptEncryptUseCase implements Encrypt {
  async encrypt (value: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const encryptedValue = await bcrypt.hash(value, salt)
    return encryptedValue
  }
}
