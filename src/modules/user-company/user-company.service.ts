import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserCompanyDTO } from './dto/create-user-company.dto';

@Injectable()
export class UserCompanyService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserCompanyDTO) {
    const usercompany = await this.prisma.userCompany.create({
      data: {
        user: {
          connect: {
            id: data.userId,
          },
        },
        company: {
          connect: {
            id: data.companyId,
          },
        },
      },
    });
    return usercompany;
  }

  async findAll() {
    return await this.prisma.userCompany.findMany();
  }

}
