  import { Controller, Get, Post, Body } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDTO } from './dto/create-user.dto';
  import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
  import { User } from '@prisma/client';

  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() data: CreateUserDTO) {
      return this.userService.create(data);
    }

    @Get('me')
    getMe(@CurrentUser() user : User){
      return user;
    }
  }
