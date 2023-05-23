import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchController } from './launch.controller';
import { PrismaService } from '@modules/shared/services/prisma/prisma.service';

@Module({
  controllers: [LaunchController],
  providers: [LaunchService, PrismaService],
})
export class LaunchModule {}
