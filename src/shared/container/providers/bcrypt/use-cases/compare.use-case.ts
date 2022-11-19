import * as bcrypt from 'bcrypt'
import { injectable } from 'tsyringe'
import { Compare } from '../interfaces/compare-use-case.interface'

@injectable()
export class BcryptCompareUseCase implements Compare {
  async compare (value: string, value2: string): Promise<boolean> {
    return bcrypt.compare(value, value2)
  }
}
