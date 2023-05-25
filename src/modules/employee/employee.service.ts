import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from './dto/employee.dto';
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(data: EmployeeDTO) {
    const employee = await this.prisma.employee.create({
      data: {
        launches: {
          create: data.launches.map((launch) => ({
            date: new Date(launch.date),
            startTime: new Date(launch.startTime),
            endTime: new Date(launch.endTime),
            projectName: launch.projectName,
            projectType: launch.projectType,
            internal: launch.internal,
            working: launch.working,
            description: launch.description,
            launchedAt: new Date(launch.launchedAt),
            companyId: launch.companyId,
          })),
        },
        birthday: new Date(data.birthday),
        userCompanies: {
          create: data.userCompanies.map((userCompanie) => ({
            companyId: userCompanie.id,
          })),
        },
        address: {
          create: data.address.map((adresses) => ({
            number: adresses.number,
            city: adresses.city,
            road: adresses.road,
            state: adresses.state,
            country: adresses.country,
            complement: adresses.complement,
          })),
        },
        user: {
          connect: {
            id: data.id,
          },
        },
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
