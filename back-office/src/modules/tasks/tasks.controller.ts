import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;
  //This can be shorten with a private, take a look on usersController
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  //@Get('/tasks')
  @Get() //If /tasks is at @Controller('/tasks') on line3,  it is not necessary to use it
  //on Get,post, put, patch, delete. If it is not on line3, I have to use it as in line 11.
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Patch()
  updateTaskTitle() {
    return this.tasksService.updateTaskTitle();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
