import { Controller, Post, Body, UsePipes, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, schemaCreateUserDto } from './dto/create-user.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(schemaCreateUserDto))
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
