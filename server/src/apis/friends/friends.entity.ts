import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Friends extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @ManyToOne(() => Users, (user) => user._id)
  @JoinColumn({ name: 'from_user_id' })
  from_user_id: Users;

  @Column({ nullable: true })
  friend_user_id: number;

  @Column({ nullable: true })
  blocked_user_id: number;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updated_at: Date;
}
