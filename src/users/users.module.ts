import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserTypeOrmRepository } from './infra/users.type-orm.repository';
import { UserRepositoryEntity } from './entities/user.orm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepositoryEntity])],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserTypeOrmRepository,
    {
      provide: 'UsersRepository',
      useExisting: UserTypeOrmRepository,
    },
  ],
})
export class UsersModule {}
