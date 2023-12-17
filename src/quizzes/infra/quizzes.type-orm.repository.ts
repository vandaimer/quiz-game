import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { QuizzesRepository } from '../quizzes.repository';
import { QuizRepositoryEntity } from '../entities/quiz.orm.entity';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Injectable()
class QuizTypeOrmRepository implements QuizzesRepository {
  @InjectRepository(QuizRepositoryEntity)
  private repository: Repository<QuizRepositoryEntity>;

  async create(quiz: CreateQuizDto): Promise<Quiz | null> {
    return this.repository.save(quiz);
  }
}

export { QuizTypeOrmRepository };
