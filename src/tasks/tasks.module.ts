import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './task.repository';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Allow us to dependency, inject or inject the dependency that is tasks repository
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
