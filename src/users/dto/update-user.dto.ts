import { z } from 'zod';
import { userSchema } from '../entities/user.entity';

const updateUserDtoSchema = userSchema.omit({ id: true });

type UpdateUserDto = z.infer<typeof updateUserDtoSchema>;

export { UpdateUserDto };
