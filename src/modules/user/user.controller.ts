  import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDTO } from './dto/create-user.dto';
  import { IsPublic } from 'src/auth/decorators/isPublic.decorator';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(LocalAuthGuard)
    @Post()
    create(@Body() data: CreateUserDTO) {
      return this.userService.create(data);
    }
  }
