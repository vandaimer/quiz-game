import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuizQuestionRepositoryEntity } from './question.orm.entity';

@Entity('quizzes')
class QuizRepositoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => QuizQuestionRepositoryEntity, (question) => question.quiz, {
    cascade: true,
  })
  questions: QuizQuestionRepositoryEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'NOW()',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

export { QuizRepositoryEntity };
