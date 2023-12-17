import { z } from 'zod';
import { schemaUser } from '../entities/user.entity';

const schemaCreateUserDto = schemaUser.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

type CreateUserDto = z.infer<typeof schemaCreateUserDto>;

export { CreateUserDto, schemaCreateUserDto };
