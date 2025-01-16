import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRespository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRespository])], // Allow us to dependency, inject or inject the dependency that is tasks repository
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
