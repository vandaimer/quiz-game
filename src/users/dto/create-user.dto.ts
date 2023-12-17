import { z } from 'zod';
import { userSchema } from '../entities/user.entity';

const createUserDtoSchema = userSchema.omit({ id: true });

type CreateUserDto = z.infer<typeof createUserDtoSchema>;

export { CreateUserDto, createUserDtoSchema };
