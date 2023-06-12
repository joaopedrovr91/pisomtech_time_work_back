import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDTO } from './dto/create-address.dto';

@Controller('address')
export class AddressController {
	constructor(private readonly addressService: AddressService) {}

  @Post()
	async create(@Body() data: AddressDTO) {
		return await this.addressService.create(data);
	}

  @Get()
  async findAll() {
  	return await this.addressService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AddressDTO) {
  	return await this.addressService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
  	return await this.addressService.remove(+id);
  }
}
