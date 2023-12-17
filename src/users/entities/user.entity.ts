import { z } from 'zod';

const userSchema = z
  .object({
    id: z.string().uuid(),
    username: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(1),
  })
  .required();

type User = z.infer<typeof userSchema>;

export { User, userSchema };
