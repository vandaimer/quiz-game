import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  UseGuards,
  Request,
} from '@nestjs/common';
import { EVENT_PATTERN_CREATED_QUIZ, QuizzesService } from './quizzes.service';
import { CreateQuizDto, schemaCreateQuizDto } from './dto/create-quiz.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserLogin } from 'src/users/entities/user.entity';
import { Request as RequestType } from 'express';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ZodValidationPipe(schemaCreateQuizDto))
  create(@Request() req: RequestType, @Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(req.user as UserLogin, createQuizDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }

  @EventPattern(EVENT_PATTERN_CREATED_QUIZ)
  processQuizCreatedBackground(@Payload() data: any) {
    console.log(`Payload comming from ${EVENT_PATTERN_CREATED_QUIZ}`, data);
  }
}
