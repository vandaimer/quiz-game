import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';
import { Quiz } from './entities/quiz.entity';
import { UserLogin } from 'src/users/entities/user.entity';

@Injectable()
export class QuizzesService {
  @Inject('QuizzesRepository')
  private quizzesRepository: QuizzesRepository;

  async create(user: UserLogin, createQuizDto: CreateQuizDto) {
    const createQuizRepository = {
      ...createQuizDto,
      owner: user.id,
      questions: createQuizDto.questions.map((question) => ({
        ...question,
        options: question.options.map((option, index) => ({
          ...option,
          id: index + 1,
        })),
      })),
    };
    return this.quizzesRepository.create(createQuizRepository);
  }

  findAll(): Promise<Quiz[]> {
    return this.quizzesRepository.findAll();
  }

  findOne(id: string) {
    return this.quizzesRepository.findById(id);
  }
}
