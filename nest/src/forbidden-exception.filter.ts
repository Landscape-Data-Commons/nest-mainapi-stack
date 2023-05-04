import { ExceptionFilter, Catch, ArgumentsHost, ForbiddenException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter<ForbiddenException> {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    response.redirect('/');
  }
}