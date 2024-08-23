import { Body, Controller, Get, NotFoundException, Param, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiQuery({name: 'name', required: false})
  @ApiOkResponse({type: [User]})
  @Get()
  getUsers(@Query('name') name): User[] {
    return this.userService.getUsers(name);
  }

  @ApiOkResponse({type: User})
  @ApiNotFoundResponse()
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.getUser(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @ApiCreatedResponse({type: User})
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() user: CreateUserDto): User {
    return this.userService.createUser(user);
  }
}
