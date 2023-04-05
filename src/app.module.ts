import { AuthenticationModule } from '@modules/authentication/authentication.module';
import { ManagementModule } from '@modules/management/management.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ManagementModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
