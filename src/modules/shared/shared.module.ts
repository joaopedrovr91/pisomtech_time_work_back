import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
	imports: [EventEmitterModule.forRoot()],
	providers: [PrismaService],
	exports: [PrismaService],
})
export class SharedModule {}
