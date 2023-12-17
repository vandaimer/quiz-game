import { z } from 'zod';

const schemaUser = z
  .object({
    id: z.string().uuid(),
    username: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(1),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .required();

type User = z.infer<typeof schemaUser>;

export { User, schemaUser };
