import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    //DB call
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDTO) {
    this.tasks.push({
      id: this.tasks.length + 1,
      ...task,
    });
    return task;
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'Updating the whole object Task. Updating task...';
  }

  updateTaskTitle() {
    return 'Updating partially a task. Updating title';
  }

  deleteTask() {
    return 'Deleting task...';
  }
}
