import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UserCreatedDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  @Inject('UsersRepository')
  private usersRepository: UsersRepository;

  async create(createUserDto: CreateUserDto): Promise<UserCreatedDto> {
    const created = await this.usersRepository.create(createUserDto);
    delete created.password;

    return created;
  }
}
