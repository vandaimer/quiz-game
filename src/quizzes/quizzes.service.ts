import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';

@Injectable()
export class QuizzesService {
  @Inject('QuizzesRepository')
  private quizzesRepository: QuizzesRepository;

  async create(createQuizDto: CreateQuizDto) {
    const createQuizRepository = {
      ...createQuizDto,
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

  findAll() {
    return `This action returns all quizzes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }
}
