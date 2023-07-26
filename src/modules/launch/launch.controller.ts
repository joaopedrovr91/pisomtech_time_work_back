import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateLaunchDTO } from './dto/create-launch.dto';
import { LaunchService } from './launch.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('launch')
export class LaunchController {
  constructor(private readonly launchService: LaunchService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() data: CreateLaunchDTO) {
    return await this.launchService.create(data);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async findAll() {
    return await this.launchService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Get('/historic/:date')
  async findWorkTimeAll(@Param('date') date: string) {
    return await this.launchService.findHistoricAll(date);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/daywork/:date')
  async findDayWorkHours(@Param('date') date: string) {
    return await this.launchService.findDayWorkHours(date);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/:id')
  async findOneLaunch(@Param('id') id: string) {
    return await this.launchService.findOneLaunch(+id);
  }
  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.launchService.remove(+id);
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateLaunchDTO) {
    return await this.launchService.update(+id, data);
  }
}
