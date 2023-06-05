import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AddressDTO } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
  async create(data: AddressDTO) {
    const address = await this.prisma.address.create({
      data: {
        number: data.number,
        city: data.city,
        complement: data.complement,
        country: data.country,
        road: data.road,
        state: data.state,
        employee: { connect: { userId: data.employeeId } },
      },
    });
    return address;
  }

  async findAll() {
    return await this.prisma.address.findMany();
  }

  async update(id: number, data: AddressDTO) {
    return await this.prisma.address.update({
      where: {
        id,
      },
      data: {
        number: data.number,
        city: data.city,
        complement: data.complement,
        country: data.country,
        road: data.road,
        state: data.state,
        employee: { connect: { userId: data.id } },
      },
    });
  }

  async remove(id: number) {
    console.log('oi');
    let addressExists = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });
    if (!addressExists) {
      throw new Error('endereço não existe');
    }
    addressExists = await this.prisma.address.delete({
      where: {
        id,
      },
    });

    return await this.prisma.employee.delete({
      where: {
        userId: id,
      },
    });
  }
}
