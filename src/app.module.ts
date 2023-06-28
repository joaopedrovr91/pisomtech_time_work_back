import { AuthenticationModule } from '@modules/authentication/authentication.module';
import { EmployeeModule } from '@modules/employee/employee.module';
import { ManagementModule } from '@modules/management/management.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserCompanyModule } from './modules/user-company/user-company.module';
import { CompanyModule } from './modules/company/company.module';
import { LaunchModule } from './modules/launch/launch.module';
import { AddressModule } from './modules/address/address.module';
import { EmployeeProjectModule } from './modules/employee-project/employee-project.module';
import { ProjectModule } from './modules/project/project.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ManagementModule,
    AuthenticationModule,
    EmployeeModule,
    UserModule,
    UserCompanyModule,
    CompanyModule,
    LaunchModule,
    AddressModule,
    EmployeeProjectModule,
    ProjectModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppModule, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
