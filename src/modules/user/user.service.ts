import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        admin: data.admin,
        // employee: {
        //   connect: {
        //     id: data.employee.id,
        //   },
        // },
      },
    });
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: CreateUserDTO) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        admin: data.admin,
      },
    });
  }
}
