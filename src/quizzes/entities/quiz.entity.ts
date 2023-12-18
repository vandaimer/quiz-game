import { z } from 'zod';

const title = z.string().trim().min(1);

const schemaQuizQuestionOption = z.object({
  id: z.number(),
  title,
  isCorrect: z.boolean(),
});

const schemaQuizQuestion = z.object({
  id: z.string().uuid(),
  options: z.array(schemaQuizQuestionOption),
  title,
  createdAt: z.date(),
  updatedAt: z.date(),
});

const schemaQuiz = z.object({
  id: z.string().uuid(),
  title,
  questions: z.array(schemaQuizQuestion),
  createdAt: z.date(),
  updatedAt: z.date(),
  owner: z.string().min(1),
});

type QuizQuestion = z.infer<typeof schemaQuizQuestion>;
type QuizQuestionOption = z.infer<typeof schemaQuizQuestionOption>;
type Quiz = z.infer<typeof schemaQuiz>;

export {
  Quiz,
  QuizQuestion,
  QuizQuestionOption,
  schemaQuiz,
  schemaQuizQuestion,
  schemaQuizQuestionOption,
};
