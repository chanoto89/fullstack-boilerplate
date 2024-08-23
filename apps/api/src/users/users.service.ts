import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{id: 1, name: 'John Doe'}, {id: 2, name: 'Jane Doe'}];

  getUsers(name?: string): User[] {
    if (name) {
      return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }

    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(user => user.id === id);
  }

  createUser(user: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...user
    }
    this.users.push(newUser)

    return newUser;
  }
}
