import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
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
        startTime: new Date(data.startTime),
        internal: data.internal,
        project: {
          connect: {
            id: data.projectId,
          },
        },
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
    return launch;
  }

  async findAll() {
    return await this.prisma.launch.findMany();
  }

  async findHistoricAll(data: string) {
    const launchAll = await this.prisma.launch.findMany({
      where: {
        date: {
          lte: new Date(moment(data).endOf('month').toDate()),
          gte: new Date(moment(data).startOf('month').date(1).toDate()),
        },
      },
    });
    const historicAll = launchAll.map((data) => {
      return {
        workedHours:
          (data.endTime.getHours() - data.startTime.getHours()) * 3600 +
          (data.endTime.getMinutes() - data.startTime.getMinutes()) * 60 +
          (data.endTime.getSeconds() - data.startTime.getSeconds()),
        description: data.description,
        date: data.date,
      };
    });
    return historicAll;
  }

  async findDayWorkHours(data?: string) {
    const launches = await this.prisma.launch.findMany({
      where: {
        date: moment(data).format(),
      },
      include: {
        company: {
          select: {
            name: true,
            imgPath: true,
          },
        },
      },
    });

    return launches.map((launch) => ({
      ...launch,
      workedHours:
        (launch.endTime.getHours() - launch.startTime.getHours()) * 3600 +
        (launch.endTime.getMinutes() - launch.startTime.getMinutes()) * 60 +
        (launch.endTime.getSeconds() - launch.startTime.getSeconds()),
    }));
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
        startTime: new Date(data.startTime),
        internal: data.internal,
        project: {
          connect: {
            id: data.projectId,
          },
        },
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
      where: {
        id,
      },
    });
  }
}
