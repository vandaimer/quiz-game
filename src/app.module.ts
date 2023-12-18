import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { NatsClientModule } from './nats-client/nats-client.module';
import TypeOrmModule from './infra/type-orm-client';

@Module({
  imports: [
    TypeOrmModule,
    UsersModule,
    AuthModule,
    QuizzesModule,
    NatsClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
