import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/User';
import { CreateUserDTO } from './dto/create-user-dto';
@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      email: 'test@test.com',
      password: 'pass123',
      name: 'testName1',
      age: 42,
    },
    {
      id: 2,
      email: 'test2@test2.com',
      password: 'pass456',
      name: 'testName2',
      age: 24,
    },
  ];
  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDTO) {
    const userAux = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(userAux);
    return userAux;
  }
}
