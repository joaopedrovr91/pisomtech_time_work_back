import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() data: CreateCompanyDTO): Promise<any> {
    return await this.companyService.create(data);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async findAll() {
    return await this.companyService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companyService.remove(+id);
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateCompanyDTO) {
    return await this.companyService.update(+id, data);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/:id')
  async findOneCompany(@Param('id') id: string) {
    return await this.companyService.findOneCompany(+id);
  }
}
