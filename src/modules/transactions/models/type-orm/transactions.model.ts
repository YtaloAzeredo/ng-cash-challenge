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

  @Column()
    code!: string

  @ManyToOne(() => Accounts, (account) => account.debitedAccount)
    debitedAccount!: Accounts

  @Column({ nullable: true })
    debitedAccountId!: number

  @ManyToOne(() => Accounts, (account) => account.creditedAccount)
    creditedAccount!: Accounts

  @Column({ nullable: true })
    creditedAccountId!: number

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
