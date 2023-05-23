import { Module } from '@nestjs/common';
import { UserCompanyService } from './user-company.service';
import { UserCompanyController } from './user-company.controller';
import { PrismaService } from '@modules/shared/services/prisma/prisma.service';

@Module({
  controllers: [UserCompanyController],
  providers: [UserCompanyService, PrismaService],
})
export class UserCompanyModule {}
