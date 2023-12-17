import { z } from 'zod';
import { schemaUser } from '../entities/user.entity';

const schemaCreateUserDto = schemaUser
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .strict();

const schemaUserResponseDto = schemaUser.omit({ password: true });

type CreateUserDto = z.infer<typeof schemaCreateUserDto>;
type UserResponseDto = z.infer<typeof schemaUserResponseDto>;

export { CreateUserDto, UserResponseDto, schemaCreateUserDto };
