import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/User';
@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'testName1',
      age: 42,
    },
    { id: 2, name: 'testName2', age: 24 },
  ];
  getUsers() {
    return this.users;
  }
}
