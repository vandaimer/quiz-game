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
  .strict();

const schemaUserLogin = schemaUser.omit({
  email: true,
  password: true,
  createdAt: true,
  updatedAt: true,
});

type User = z.infer<typeof schemaUser>;
type UserLogin = z.infer<typeof schemaUserLogin>;

export { User, UserLogin, schemaUser };
