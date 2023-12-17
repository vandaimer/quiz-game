import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from 'src/users/dto/create-user.dto';
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
  ): Promise<UserResponseDto | undefined> {
    try {
      const user = await this.usersService.findOneByUsername(username);
      if (user && user.password === password) {
        // eslint-disable-next-line
        const { password, ...result } = user;
        return result;
      }
    } catch (error) {
      return undefined;
    }
    return undefined;
  }

  async login(user: UserResponseDto) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
