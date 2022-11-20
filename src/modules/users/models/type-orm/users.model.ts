import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Accounts } from '../../../accounts/models/type-orm/accounts.model'
import { UsersModel } from '../users-model.interface'

@Entity()
export class Users extends BaseEntity implements UsersModel {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ unique: true })
    username!: string

  @Column()
    password!: string

  @OneToOne(() => Accounts)
  @JoinColumn({ name: 'accountId' })
    account!: Accounts

  @Column({ nullable: false })
    accountId!: number

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
