import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateUserCompanyDTO } from './dto/create-user-company.dto';
import { UserCompanyService } from './user-company.service';

@Controller('user-company')
export class UserCompanyController {
  constructor(private readonly userCompanyService: UserCompanyService) {}

  @Post()
  create(@Body() data: CreateUserCompanyDTO) {
    return this.userCompanyService.create(data);
  }

  @Get()
  async findAll() {
    return await this.userCompanyService.findAll();
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() data: CreateUserCompanyDTO) {
  //   return await this.userCompanyService.update(+id,data);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return await this.userCompanyService.remove(+id);
  // }
}
