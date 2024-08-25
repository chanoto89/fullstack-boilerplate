import { Body, Controller, Get, NotFoundException, Param, Post, Query, ParseIntPipe, Patch, Delete, ParseBoolPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Todo } from '../todos/entities/todo.entity';
import { TodosService } from '../todos/todos.service';
import { CreateTodoDto } from '../todos/dto/create-todo.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService, private readonly todoService: TodosService) {}

  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'includeTodos', required: false})
  @ApiOkResponse({type: [User]})
  @Get()
  async getUsers(
    @Query('name') name: string, 
    @Query('includeTodos', ParseBoolPipe) includeTodos: boolean
  ): Promise<User[]> {
    return await this.userService.findAll(name, includeTodos);
  }

  @ApiOkResponse({type: User})
  @ApiNotFoundResponse()
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @ApiCreatedResponse({type: User})
  @ApiBadRequestResponse()
  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @ApiOkResponse({type: User})
  @ApiBadRequestResponse()
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() user: CreateUserDto): Promise<User> {
    return await this.userService.update(id, user);
  }

  @ApiOkResponse()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.remove(id);
  }

  @ApiOkResponse({type: [Todo]})
  @Get(':id/todos')
  async getUserTodos(@Param('id', ParseIntPipe) id: number): Promise<Todo[]> {
    return await this.todoService.getTodosByUserId(id);
  }

  @ApiCreatedResponse({type: Todo})
  @ApiNotFoundResponse()
  @Post(':id/todos')
  async createTodo(@Param('id', ParseIntPipe) id: number, @Body() todo: CreateTodoDto): Promise<Todo> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await this.todoService.createTodos(todo, user.id);
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Delete(':id/todos/:todoId')
  async removeTodo(
    @Param('id', ParseIntPipe) id: number, 
    @Param('todoId', ParseIntPipe) todoId: number
  ): Promise<void> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.todoService.removeTodoFromUser(user.id, todoId);
  }
}
