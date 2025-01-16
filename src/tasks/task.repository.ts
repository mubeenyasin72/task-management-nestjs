import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CraeteTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }
  async createTask(createTaskDto: CraeteTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
