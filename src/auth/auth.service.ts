import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLogin } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserLogin | undefined> {
    try {
      const user = await this.usersService.findOneByUsername(username);
      if (user && user.password === password) {
        const { id, username } = user;
        return {
          id,
          username,
        };
      }
    } catch (error) {
      return undefined;
    }
    return undefined;
  }

  async login({ username, id }: UserLogin) {
    const payload = { username: username, sub: id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
