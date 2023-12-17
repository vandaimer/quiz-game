import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import TypeOrmModule from './infra/type-orm-client';

@Module({
  imports: [TypeOrmModule, UsersModule, AuthModule, QuizzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
