import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCompanyDTO) {
  const company = await this.prisma.company.create({
    data: {
      name: data.name,
      email: data.email,
      imgPath: data.imgPath,
      phoneNumber: data.phoneNumber,
      companyUsers: {
        create: data.companyUsers,
      },
    },
  });
  return company;
}

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findOneCompany(id: number) {
    const oneCompany = await this.prisma.company.findUnique({
      where: {
        id,
      },
    });
    return oneCompany;
  }

  async update(id: number, data: CreateCompanyDTO) {
    const companyExists = await this.prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!companyExists) {
      throw new Error('empresa não existe');
    }

    return await this.prisma.company.update({
      data: {
        imgPath: data.imgPath,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const companyExists = await this.prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!companyExists) {
      throw new Error('empresa não existe');
    }

    return await this.prisma.company.delete({
      where: {
        id,
      },
    });
  }

  async saveImage(file: any): Promise<string> {
    const imgPath = '/path/to/save/image/' + file.originalname;
    // Use o Prisma para salvar o caminho da imagem no banco de dados, se necessário
    // await this.prisma.imagem.create({ data: { imgPath } });

    return imgPath;
  }
}
