import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request as ExpRequest } from 'express';
import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { AerosummaryService } from './aerosummary.service';
import { dtoAerosummary } from './dto/get-aerosummary.dto';
import { AerosummaryEnt } from './entities/aerosummary.entity';
import { NextFunction as next } from 'express';
import { CustomInterceptor } from 'src/CustomMetadata.interceptor';
import { CustomAuthGuard } from 'src/NoAuthGuard.decorator';
import { AuthGuard } from 'src/auth.guard';

import {
  Authentication,
  Authorization,
  AuthorizationGuard,
  AuthenticationGuard,
  CognitoUser,
} from "@nestjs-cognito/auth";
import { HttpCode, Res, UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { CognitoJwtPayload } from "aws-jwt-verify/jwt-model";
import { Public } from 'src/roles.guard';
import { Reflector } from '@nestjs/core';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

@Controller('aerosummary')
export class AerosummaryController {
  // to do: implement backend selector:
  // -- manually creating the prisma schemas for each DB user 
  // -- creating clients for each userr
  // -- pulling in and serving the clients on the main prisma client
  // -- how to select different clients on the prisma service? arguments? case switch?
  // -- 
  private jwtVerifier = CognitoJwtVerifier.create({
    userPoolId: 'us-west-1_FgaW15JOh',
    tokenUse: 'id',
    clientId: '3ocfhcl3smtnnu6m0qkne8v8tg',
  });

  constructor(private readonly aerosummaryService: AerosummaryService) {}
  // cannot use guards to determine if route is protected or not as they 
  // only allow or deny the request. we need to allow the request, but alter
  // the handling depending on the request header properties. 
  // header-based routing

  @Get()
  @ApiOkResponse({ type: AerosummaryEnt, isArray: true })
  async findAll(
    @Headers() headers: Headers,
    //  added request from nest WITH the express request type in order
    // to parse the request within this handler
    @Request() request: ExpRequest,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @CustomRequestObjHandler(dtoAerosummary) ValidatedParams?: dtoAerosummary,
    ): Promise<any> {
    // logic: 
    // if request has authorization headers, vealidate token/check permission (groups?)
    // -- if valid, use appropriate handler 
    // -- if invalid, return unauthorized
    // 
    // if no jwt, use default handler (limited result set)
    if(headers.hasOwnProperty('authorization')){
      // token from request
      // result from token validation(boolean)
      const token = this.extractTokenFromHeader(request)
      const result = await this.jwtVerifier.verify(token)
      if(result){
        if (take) {
          ValidatedParams['take'] = Number(take);
        }
        if (cursor) {
          ValidatedParams['cursor'] = Number(cursor);
        }
        for (const [key, value] of Object.entries(ValidatedParams['params'])) {
          if (Array.isArray(value) && key != 'take' && key != 'cursor') {
            ValidatedParams['params'][key] = { in: value };
          }
        }
        // return this.aerosummaryService.FindManyAeroSummary(ValidatedParams);
        return JSON.stringify("VALID TOKEN: FULL RESULTS")
      }
      return JSON.stringify("INVALID TOKEN: UNAUTHORIZED OR LIMITED SET")
    }
    if (take) {
      ValidatedParams['take'] = Number(take);
    }
    if (cursor) {
      ValidatedParams['cursor'] = Number(cursor);
    }
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value) && key != 'take' && key != 'cursor') {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.aerosummaryService.FindManyAeroSummary(ValidatedParams);
  }
  private extractTokenFromHeader(request: ExpRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  
}


  
  
  // @ApiOkResponse({ type: AerosummaryEnt, isArray: true })
  // GetAeroSummary(
  //   // pagination
  //   @Query('take') take?: string,
  //   @Query('cursor') cursor?: string,

  //   @CustomRequestObjHandler(dtoAerosummary)
  //   ValidatedParams?: dtoAerosummary,
  // ) {
  //   if (take) {
  //     ValidatedParams['take'] = Number(take);
  //   }
  //   if (cursor) {
  //     ValidatedParams['cursor'] = Number(cursor);
  //   }
  //   for (const [key, value] of Object.entries(ValidatedParams['params'])) {
  //     if (Array.isArray(value) && key != 'take' && key != 'cursor') {
  //       ValidatedParams['params'][key] = { in: value };
  //     }
  //   }
  //   return this.aerosummaryService.FindManyAeroSummary(ValidatedParams);
  // }
