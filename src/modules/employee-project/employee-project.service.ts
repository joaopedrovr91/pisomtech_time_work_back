import { Injectable } from '@nestjs/common';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';
import { PrismaService } from '@modules/shared/services/prisma/prisma.service';

@Injectable()
export class EmployeeProjectService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateEmployeeProjectDto) {
    const employeeproject = await this.prisma.employeeProject.create({
      data: {
        employee: {
          connect: {
            userId: data.employeeId,
          },
        },
        project: {
          connect: {
            id: data.projectId,
          },
        },
      },
    });
    return employeeproject;
  }

  async findAll() {
    return await this.prisma.employeeProject.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} employeeProject`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employeeProject`;
  // }
}
