import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';

@Controller('employee-project')
export class EmployeeProjectController {
  constructor(private readonly employeeProjectService: EmployeeProjectService) {}

  @Post()
  async create(@Body() createEmployeeProjectDto: CreateEmployeeProjectDto) {
    return await this.employeeProjectService.create(createEmployeeProjectDto);
  }

  @Get()
  async findAll() {
    return await this.employeeProjectService.findAll();
  }
  
}
