import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryEntity } from 'src/users/entities/user.orm.entity';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [UserRepositoryEntity],
  synchronize: true,
});

export default typeOrmModule;
