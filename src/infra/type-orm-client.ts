import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionRepositoryEntity } from 'src/quizzes/entities/question.orm.entity';
import { QuizRepositoryEntity } from 'src/quizzes/entities/quiz.orm.entity';
import { UserRepositoryEntity } from 'src/users/entities/user.orm.entity';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [
    UserRepositoryEntity,
    QuizRepositoryEntity,
    QuizQuestionRepositoryEntity,
  ],
  synchronize: true,
});

export default typeOrmModule;
