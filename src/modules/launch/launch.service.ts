import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { CreateLaunchDTO } from './dto/create-launch.dto';

@Injectable()
export class LaunchService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLaunchDTO) {
    const launch = await this.prisma.launch.create({
      data: {
        date: new Date(data.date),
        description: data.description,
        endTime: new Date(data.endTime),
        launchedAt: new Date(data.launchedAt),
        projectName: data.projectName,
        projectType: data.projectType,
        startTime: new Date(data.startTime),
        working: data.working,
        internal: data.internal,
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
    return launch;
  }

  async findAll() {
    return await this.prisma.launch.findMany();
  }

  async remove(id: number) {
    const launchExists = await this.prisma.launch.findUnique({
      where: {
        id,
      },
    });

    if (!launchExists) {
      throw new Error('horario não existe');
    }

    return await this.prisma.launch.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: CreateLaunchDTO) {
    const launchExists = await this.prisma.launch.findUnique({
      where: {
        id,
      },
    });

    if (!launchExists) {
      throw new Error('horario não existe');
    }

    return await this.prisma.launch.update({
      data: {
        date: new Date(data.date),
        description: data.description,
        endTime: new Date(data.endTime),
        launchedAt: new Date(data.launchedAt),
        projectName: data.projectName,
        projectType: data.projectType,
        startTime: new Date(data.startTime),
        working: data.working,
        internal: data.internal,
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
      where: {
        id,
      },
    });
  }
}
