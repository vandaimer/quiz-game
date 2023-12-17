import { z } from 'zod';
import { User, schemaUser } from './entities/user.entity';

const schemaCreateUserRepository = schemaUser.omit({ id: true }).required();

type CreateUserRepository = z.infer<typeof schemaCreateUserRepository>;

interface UsersRepository {
  create(user: CreateUserRepository): Promise<User>;
}

export { UsersRepository, CreateUserRepository };
