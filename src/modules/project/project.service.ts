import { Injectable } from '@nestjs/common';
import { CreateProjectDTO } from './dto/create-project.dto';
import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { connect } from 'http2';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateProjectDTO) {
    const project = await this.prisma.project.create({
      data: {
        projectName: data.projectName,
        projectType: data.projectType,
        companyId: data.companyId,
      },
    });
    return project;
  }

  async findAll() {
    return await this.prisma.project.findMany();
  }

  async remove(id: number) {
    let projectExists = await this.prisma.project.findUnique({
      where: {
        id,
      },
    });
    if (!projectExists) {
      throw new Error('projeto não existe');
    }
    projectExists = await this.prisma.project.delete({
      where: {
        id,
      },
    });
  }
}
