import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { QuizTypeOrmRepository } from './infra/quizzes.type-orm.repository';
import { QuizRepositoryEntity } from './entities/quiz.orm.entity';
import { QuizQuestionRepositoryEntity } from './entities/question.orm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [
    NatsClientModule,
    TypeOrmModule.forFeature([
      QuizRepositoryEntity,
      QuizQuestionRepositoryEntity,
    ]),
    AuthModule,
  ],
  controllers: [QuizzesController],
  providers: [
    QuizzesService,
    QuizTypeOrmRepository,
    {
      provide: 'QuizzesRepository',
      useExisting: QuizTypeOrmRepository,
    },
    JwtStrategy,
  ],
})
export class QuizzesModule {}
