import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../todos/dto/create-todo.dto';
import { Todo } from '../todos/entities/todo.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  create(user: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(user);

    return this.usersRepository.save(newUser);
  }

  async findAll(name?: string, includeTodos?: boolean): Promise<User[]> {
    if (name) {
      return this.usersRepository.find({ where: { name } });
    }

    if (includeTodos) {
      return this.usersRepository.find({ relations: ['todos'] });
    }

    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, user: CreateUserDto): Promise<User> {
    await this.usersRepository.update(id, user);

    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
