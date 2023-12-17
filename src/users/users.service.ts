import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  @Inject('UsersRepository')
  private usersRepository: UsersRepository;

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const created = await this.usersRepository.create(createUserDto);

    return this.sanitazeUserToResponse(created);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersRepository.findAll();

    return users.map(this.sanitazeUserToResponse);
  }

  async findOne(id: string): Promise<UserResponseDto | undefined> {
    const user = await this.usersRepository.findOne(id);

    if (user) {
      return this.sanitazeUserToResponse(user);
    }

    throw Error(`User '${id}' not found`);
  }

  private sanitazeUserToResponse(user: User): UserResponseDto {
    // eslint-disable-next-line
    const { password: _, ...rest } = user;

    return rest;
  }
}
