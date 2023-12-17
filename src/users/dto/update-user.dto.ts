import { z } from 'zod';
import { schemaUser } from '../entities/user.entity';

const schemaUpdateUserDto = schemaUser.omit({ id: true });

type UpdateUserDto = z.infer<typeof schemaUpdateUserDto>;

export { UpdateUserDto };
