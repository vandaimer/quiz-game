import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { QuizTypeOrmRepository } from './infra/quizzes.type-orm.repository';
import { QuizRepositoryEntity } from './entities/quiz.orm.entity';
import { QuizQuestionRepositoryEntity } from './entities/question.orm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuizRepositoryEntity,
      QuizQuestionRepositoryEntity,
    ]),
  ],
  controllers: [QuizzesController],
  providers: [
    QuizzesService,
    QuizTypeOrmRepository,
    {
      provide: 'QuizzesRepository',
      useExisting: QuizTypeOrmRepository,
    },
  ],
})
export class QuizzesModule {}
