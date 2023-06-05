import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserCompanyDTO } from './dto/create-user-company.dto';

@Injectable()
export class UserCompanyService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserCompanyDTO) {
    const employeecompany = await this.prisma.userCompany.create({
      data: {
        employee: {
          connect: {
            userId: data.employeeId,
          },
        },
        company: {
          connect: {
            id: data.companyId,
          },
        },
      },
    });
    return employeecompany;
  }

  async findAll() {
    return await this.prisma.userCompany.findMany();
  }
}
