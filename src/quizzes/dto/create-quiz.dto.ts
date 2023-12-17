import { z } from 'zod';

const title = z.string().trim().min(1);

const schemaQuizQuestionOptionDto = z.object({
  title,
  isCorrect: z.boolean(),
});

const schemaQuizQuestionDto = z.object({
  options: z.array(schemaQuizQuestionOptionDto).min(1),
  title,
});

const schemaCreateQuizDto = z.object({
  title,
  questions: z.array(schemaQuizQuestionDto).min(1),
});

type CreateQuizDto = z.infer<typeof schemaCreateQuizDto>;

export { CreateQuizDto, schemaCreateQuizDto };
