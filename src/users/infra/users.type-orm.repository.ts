import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserRepository } from '../users.repository';
import { Repository } from 'typeorm';
import { UserRepositoryEntity } from '../entities/user.orm.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
class UserTypeOrmRepository {
  @InjectRepository(UserRepositoryEntity)
  private repository: Repository<UserRepositoryEntity>;

  async create(user: CreateUserRepository): Promise<User> {
    return await this.repository.save(user);
  }
}

export { UserTypeOrmRepository };
