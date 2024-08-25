import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private todosRepository: Repository<Todo>) { }

  createTodos(todo: CreateTodoDto, userId: number): Promise<Todo> {
    const newTodo = this.todosRepository.create({ userId, ...todo });
    return this.todosRepository.save(newTodo);
  }

  getTodosByUserId(userId: number): Promise<Todo[]> {
    return this.todosRepository.find({ where: { userId } });
  }

  async removeTodoFromUser(userId: number, id: number): Promise<void> {
    await this.todosRepository.delete({ userId, id });
  }
}
