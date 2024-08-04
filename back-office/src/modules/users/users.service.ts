import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'testName1',
    },
    { id: 2, name: 'testName2' },
  ];
  getUsers() {
    return this.users;
  }
}
