import { Controller, Get, Post, Body, Param, UsePipes } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto, schemaCreateQuizDto } from './dto/create-quiz.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(schemaCreateQuizDto))
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(+id);
  }
}
