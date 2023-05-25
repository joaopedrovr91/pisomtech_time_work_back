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
        employee: { connect: { id: data.id } },
      },
    });
    return address;
  }

  async findAll() {
    return await this.prisma.address.findMany();
  }

  async update(id: number, data: AddressDTO) {
    const addressExists = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });

    if (!addressExists) {
      throw new Error('endereço não existe');
    }
    return await this.prisma.address.update({
      data: {
        number: data.number,
        city: data.city,
        complement: data.complement,
        country: data.country,
        road: data.road,
        state: data.state,
        employee: { connect: { id: data.id } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const addressExists = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });

    if (!addressExists) {
      throw new Error('endereço não existe');
    }

    return await this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
