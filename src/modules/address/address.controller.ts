import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
	UseGuards
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDTO } from './dto/create-address.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('address')
export class AddressController {
	constructor(private readonly addressService: AddressService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() data: AddressDTO) {
  	return await this.addressService.create(data);
  }
  
  @UseGuards(LocalAuthGuard)
  @Get()
  async findAll() {
  	return await this.addressService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AddressDTO) {
  	return await this.addressService.update(+id, data);
  }

  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
  	return await this.addressService.remove(+id);
  }
}

