import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

  @Post()
	async create(@Body() data: CreateUserDTO) {
		return await this.userService.create(data);
	}

  @Get()
  async findAll() {
  	return await this.userService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  	return this.userService.remove(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateUserDTO) {
  	return await this.userService.update(+id, data);
  }
}
