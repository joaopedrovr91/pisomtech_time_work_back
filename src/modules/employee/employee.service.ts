import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from './dto/employee.dto';
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(data: EmployeeDTO) {
    const employee = await this.prisma.employee.create({
      data: {
        user: {
          connect: {
            id: data.id,
          },
        },
        birthday: new Date(data.birthday),
      },
    });
    return employee;
  }

  async findAll() {
    return await this.prisma.employee.findMany();
  }

  async update(id: number, data: EmployeeDTO) {
    const employeeExists = await this.prisma.employee.findUnique({
      where: {
        id,
      },
    });

    if (!employeeExists) {
      throw new Error('prestador de serviço não existe');
    }
    return await this.prisma.employee.update({
      data: {
        birthday: new Date(data.birthday),
        id: data.id,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const employeeExists = await this.prisma.employee.findUnique({
      where: {
        id,
      },
    });

    if (!employeeExists) {
      throw new Error('prestador de serviço não existe');
    }

    return await this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
