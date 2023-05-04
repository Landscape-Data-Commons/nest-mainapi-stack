import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
// import { User } from 'src/app.service';
import { PATH_METADATA } from '@nestjs/common/constants';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector){}

 intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
  console.log(context.getHandler())
  const reflectedData = this.reflector.get<boolean>(
    'isPublic', 
    context.getHandler()
    );

   console.log(reflectedData);
   if(reflectedData){
    // return true;
    console.log("public 2 check")
    // return true;
  } 
   return handler.handle()
 }
}