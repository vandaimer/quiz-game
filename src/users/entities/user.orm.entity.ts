import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class UserRepositoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'NOW()',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

export { UserRepositoryEntity };
