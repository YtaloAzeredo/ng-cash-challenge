import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Transactions } from '../../../transactions/models/type-orm/transactions.model'
import { AccountsModel } from '../accounts-model.interface'

@Entity()
export class Accounts extends BaseEntity implements AccountsModel {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    balance!: number

  @OneToMany(() => Transactions, (transaction) => transaction.debitedAccount)
    debitedAccount!: Transactions[]

  @OneToMany(() => Transactions, (transaction) => transaction.creditedAccount)
    creditedAccount!: Transactions[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
