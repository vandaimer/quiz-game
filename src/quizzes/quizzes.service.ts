import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';
import { Quiz } from './entities/quiz.entity';
import { UserLogin } from 'src/users/entities/user.entity';
import { ClientProxy } from '@nestjs/microservices';

const EVENT_PATTERN_CREATED_QUIZ = 'QuizCreated';

@Injectable()
export class QuizzesService {
  @Inject('NATS_SERVICE')
  private natsClient: ClientProxy;

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
    const created = await this.quizzesRepository.create(createQuizRepository);

    this.natsClient.emit('QuizCreated', created);

    return created;
  }

  findAll(): Promise<Quiz[]> {
    return this.quizzesRepository.findAll();
  }

  findOne(id: string) {
    return this.quizzesRepository.findById(id);
  }
}

export { EVENT_PATTERN_CREATED_QUIZ };
