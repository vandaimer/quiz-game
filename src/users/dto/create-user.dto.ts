import { z } from 'zod';
import { schemaUser } from '../entities/user.entity';

const schemaCreateUserDto = schemaUser
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .strict();

const schemaUserCreatedDto = schemaUser.omit({ password: true });

type CreateUserDto = z.infer<typeof schemaCreateUserDto>;
type UserCreatedDto = z.infer<typeof schemaUserCreatedDto>;

export { CreateUserDto, UserCreatedDto, schemaCreateUserDto };
