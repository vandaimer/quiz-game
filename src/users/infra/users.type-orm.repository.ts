import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserRepository, UsersRepository } from '../users.repository';
import { Repository } from 'typeorm';
import { UserRepositoryEntity } from '../entities/user.orm.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
class UserTypeOrmRepository implements UsersRepository {
  @InjectRepository(UserRepositoryEntity)
  private repository: Repository<UserRepositoryEntity>;

  async create(user: CreateUserRepository): Promise<User> {
    return await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }

  async findOneByUsername(username: string): Promise<User | null> {
    return await this.repository.findOneBy({ username });
  }
}

export { UserTypeOrmRepository };
