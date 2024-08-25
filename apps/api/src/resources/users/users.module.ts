import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TodosModule } from '../todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    TodosModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
