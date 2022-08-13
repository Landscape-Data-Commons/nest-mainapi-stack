import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
  ValidationError,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export const CustomRequestObjHandler = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const dto = plainToInstance(data, request.query);

    const errors: ValidationError[] = await validate(dto);
    if (errors.length > 0) {
      //Get the errors and push to custom array
      const validationErrors = errors.map((obj) =>
        Object.values(obj.constraints),
      );
      throw new HttpException(
        `Validation failed with following Errors: ${validationErrors}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return dto;
  },
);
