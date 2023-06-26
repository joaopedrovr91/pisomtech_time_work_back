import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() data: CreateCompanyDTO): Promise<any> {
    return await this.companyService.create(data);
  }

  @Get()
  async findAll() {
    return await this.companyService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companyService.remove(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateCompanyDTO) {
    return await this.companyService.update(+id, data);
  }

  @Get('/:id')
  async findOneCompany(@Param('id') id: string) {
    return await this.companyService.findOneCompany(+id);
  }
}
