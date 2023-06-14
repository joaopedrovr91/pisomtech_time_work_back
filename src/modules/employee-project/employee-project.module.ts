import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { EmployeeProjectController } from './employee-project.controller';
import { PrismaService } from '@modules/shared/services/prisma/prisma.service';

@Module({
  controllers: [EmployeeProjectController],
  providers: [EmployeeProjectService, PrismaService],
})
export class EmployeeProjectModule {}
