import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  //@UsePipes(new ValidationPipe()) //UsePipes decorator is for validating data from create-task-dto. It is not
  //enough to write @IsString() or @IsBoolean() on the DTO
  //IMPORTANT: It is not necessary to use @UsePipes in every controller IF I add it on main.ts
  //Check for main.ts and I will see the line 'app.useGlobalPipes(new ValidationPipe());'
  //If this line doesnt exist on main.ts, I have to uncomment it here.
  createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }
}
