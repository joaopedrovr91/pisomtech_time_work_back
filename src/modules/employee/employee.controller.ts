import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() data: EmployeeDTO) {
    return await this.employeeService.create(data);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: EmployeeDTO) {
    return await this.employeeService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
