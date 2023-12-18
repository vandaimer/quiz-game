import { z } from 'zod';
import { Quiz, schemaQuizQuestionOption } from './entities/quiz.entity';

const title = z.string().trim().min(1);

const schemaQuizQuestionDto = z.object({
  options: z.array(schemaQuizQuestionOption),
  title,
});

const schemaCreateQuizRepository = z.object({
  title,
  questions: z.array(schemaQuizQuestionDto),
  owner: z.string().min(1),
});

type CreateQuizRepository = z.infer<typeof schemaCreateQuizRepository>;

interface QuizzesRepository {
  create(user: CreateQuizRepository): Promise<Quiz | null>;
  findAll(): Promise<Quiz[]>;
  findById(id: string): Promise<Quiz | null>;
}

export { QuizzesRepository, CreateQuizRepository };
