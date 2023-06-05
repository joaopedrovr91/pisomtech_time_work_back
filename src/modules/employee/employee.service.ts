import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from './dto/employee.dto';
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(data: EmployeeDTO) {
    console.log(data);
    const employee = await this.prisma.employee.create({
      data: {
        userId: data.id,
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
        userId: id,
      },
    });

    if (!employeeExists) {
      throw new Error('prestador de serviço não existe');
    }
    return await this.prisma.employee.update({
      data: {
        birthday: new Date(data.birthday),
        userId: data.id,
      },
      where: {
        userId: id,
      },
    });
  }

  async remove(id: number) {
    const employeeExists = await this.prisma.employee.findUnique({
      where: {
        userId: id,
      },
    });

    if (!employeeExists) {
      throw new Error('prestador de serviço não existe');
    }

    return await this.prisma.employee.delete({
      where: {
        userId: id,
      },
    });
  }
}
