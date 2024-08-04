import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    //DB call
    const tasks = ['task1', 'task2', 'task3'];
    return tasks;
  }

  createTask() {
    return 'Creating task...';
  }

  updateTask() {
    return 'Updating the whole object Task. Updating task...';
  }

  updateTaskTitle() {
    return 'Updating partially a task. Updating title';
  }

  deleteTask() {
    return 'Deleting task...';
  }
}
