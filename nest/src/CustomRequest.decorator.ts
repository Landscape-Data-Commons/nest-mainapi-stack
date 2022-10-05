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

    const dto:any = plainToInstance(data, request.query);
    // parsing url params to find the custom likeoperator 
    let likeFields = {}
    if(
      Object.keys(dto).some(element=>element.includes("Like")) ||
      Object.keys(dto).some(element=>element.includes("like"))
      ){
      likeFields["wildcards"] = {}
      likeFields["params"] = {}
      // separating custom param from regular params
      for(let key of Object.keys(dto)){
        if(key.includes("like") || key.includes("Like")){

          likeFields['wildcards'][key.split(/(like)/i)[0]] = dto[key]
          delete dto[key] //removing from params
        }
      }
    }
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
    
    likeFields["params"] = dto
    return likeFields;
  },
);
