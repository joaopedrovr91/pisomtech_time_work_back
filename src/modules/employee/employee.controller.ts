import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards
} from '@nestjs/common';
import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() data: EmployeeDTO) {
  	return await this.employeeService.create(data);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async findAll() {
  	return await this.employeeService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: EmployeeDTO) {
  	return await this.employeeService.update(+id, data);
  }

  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
  	return this.employeeService.remove(+id);
  }
}
