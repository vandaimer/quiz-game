import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuizQuestionOption } from './quiz.entity';
import { QuizRepositoryEntity } from './quiz.orm.entity';

@Entity('questions')
class QuizQuestionRepositoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  options: QuizQuestionOption[];

  @ManyToOne(() => QuizRepositoryEntity, (quiz) => quiz.questions)
  quiz: QuizRepositoryEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'NOW()',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

export { QuizQuestionRepositoryEntity };
