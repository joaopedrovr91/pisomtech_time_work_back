import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateLaunchDTO } from './dto/create-launch.dto';
import { LaunchService } from './launch.service';

@Controller('launch')
export class LaunchController {
  constructor(private readonly launchService: LaunchService) {}

  @Post()
  async create(@Body() data: CreateLaunchDTO) {
    return await this.launchService.create(data);
  }

  @Get()
  async findAll() {
    return await this.launchService.findAll();
  }

  @Get('/historic/:date')
  async findWorkTimeAll(@Param('date') date: string) {
    return await this.launchService.findHistoricAll(date);
  }

  @Get('/daywork/:date')
  async findDayWorkHours(@Param('date') date: string) {
    return await this.launchService.findDayWorkHours(date);
  }

  @Get('/:id')
  async findOneLaunch(@Param('id') id: string) {
    return await this.launchService.findOneLaunch(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.launchService.remove(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateLaunchDTO) {
    return await this.launchService.update(+id, data);
  }
}
