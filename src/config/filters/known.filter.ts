import { KnownException } from '@config/exceptions/known.exception';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(KnownException)
export class KnownFilter implements ExceptionFilter {
  catch(exception: KnownException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.status;

    response
      .status(status)
      .json({
        show: exception.show,
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}