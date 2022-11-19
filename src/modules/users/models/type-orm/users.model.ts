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
  @JoinColumn()
    accountId!: Accounts

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
