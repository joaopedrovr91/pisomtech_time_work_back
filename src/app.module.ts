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
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
