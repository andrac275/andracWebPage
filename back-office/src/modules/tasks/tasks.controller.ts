import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';
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
    //@Query decorator is used to send extra params in the url.
    //Example: localhost:3000/tasks?limit=2
    return this.tasksService.getTasks();
  }

  @Get('/withQuery')
  getAllTasksWithQuery(@Query() query: any) {
    //@Query decorator is used to send extra params in the url.
    //Example: localhost:3000/tasks?limit=2
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  //This is a parameter @Param example (forExample: http://localhost:3000/tasks/2).
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  //@UsePipes(new ValidationPipe()) //UsePipes decorator is for validating data from create-task-dto. It is not
  //enough to write @IsString() or @IsBoolean() on the DTO
  //IMPORTANT: It is not necessary to use @UsePipes in every controller IF I add it on main.ts
  //Check for main.ts and I will see the line 'app.useGlobalPipes(new ValidationPipe());'
  //If this line doesnt exist on main.ts, I have to uncomment it here.
  createTask(@Body() task: CreateTaskDTO) {
    //@Body decorator is used when a json is sent. This way it can be received
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.tasksService.updateTask(task);
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
