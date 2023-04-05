import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AuthenticationUseCase {
  constructor(
    private eventEmitter: EventEmitter2,
    private prismaService: PrismaService,
  ) {}

  login() {}
}
