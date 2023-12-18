import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  const username = 'username';
  const email = 'email';
  const password = 'password';
  const mockUserRepository = {
    username,
    email,
  };
  const mockCreateUserDto = {
    email,
    password,
    username,
  };
  let repository: UsersRepository;
  let service: UsersService;

  beforeEach(async () => {
    repository = {
      create: jest.fn().mockReturnValueOnce(mockUserRepository),
    } as any;
    service = new UsersService(repository);
  });

  describe('Should succefully', () => {
    it('create a new User', async () => {
      const userDto: CreateUserDto = {
        email,
        password,
        username,
      };
      const result = await service.create(userDto);

      expect(result).toEqual({ username, email });
      expect(repository.create).toHaveBeenCalledWith(userDto);
    });
  });

  describe('Should raise an exception if', () => {
    it('is not possible to store the user into the db', async () => {
      const messageError = 'RepositoryError';
      repository = {
        create: jest.fn().mockRejectedValueOnce(() => {
          throw new Error(messageError);
        }),
      } as any;
      service = new UsersService(repository);
      expect(() => service.create(mockCreateUserDto)).rejects.toThrow(
        messageError,
      );
    });

    it('the payload is not correct', () => {
      expect(() => service.create({} as CreateUserDto)).rejects.toThrow();
    });
  });
});
