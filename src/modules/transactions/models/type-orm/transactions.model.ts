import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Accounts } from '../../../accounts/models/type-orm/accounts.model'
import { TransactionsModel } from '../transactions-model.interface'

@Entity()
export class Transactions extends BaseEntity implements TransactionsModel {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    value!: number

  @ManyToOne(() => Accounts, (account) => account.debitedAccountId)
    debitedAccountId!: Accounts

  @ManyToOne(() => Accounts, (account) => account.creditedAccountId)
    creditedAccountId!: Accounts

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
