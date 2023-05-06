import {
  Controller,
  Get,
  Query,
  Headers,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheaderService } from './dataheader.service';
import { dtoDataHeader } from './dto/get-dataheader.dto';
import { DataheaderEnt } from './entities/dataheader.entity';

import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { Request as ExpRequest } from 'express';
import { NDOW_CLIENT, LIMITED_CLIENT } from 'src/ClientSwitch.constants';

@Controller('dataheader')
export class DataheaderController {
  private jwtVerifier = CognitoJwtVerifier.create({
    userPoolId: 'us-west-1_FgaW15JOh',
    tokenUse: 'id',
    clientId: '3ocfhcl3smtnnu6m0qkne8v8tg',
  });

  constructor(private readonly dataheaderService: DataheaderService) {}

  @Get()
  @ApiOkResponse({ type: DataheaderEnt, isArray: true })
  async GetHeader(
    // token parse
    @Headers() headers: Headers,
    @Request() request: ExpRequest,

    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataHeader) ValidatedParams?: dtoDataHeader,
  ) {
    if (headers.hasOwnProperty('authorization')) {
      const token = this.extractTokenFromHeader(request);
      let result: any;
      try {
        result = await this.jwtVerifier.verify(token)
      } catch (error) {
        result = {}
      }
      if (typeof result === 'object' && result.hasOwnProperty('identities')) {
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
        console.log;
        return this.dataheaderService.FindManyHeader(
          ValidatedParams,
          NDOW_CLIENT,
        );
        // return JSON.stringify('VALID TOKEN: FULL RESULTS');
      } else {
        // return JSON.stringify('INVALID TOKEN: UNAUTHORIZED OR LIMITED SET');
        return new UnauthorizedException();
      }
      // if (take) {
      //   ValidatedParams['take'] = Number(take);
      // }
      // if (cursor) {
      //   ValidatedParams['cursor'] = Number(cursor);
      // }
      // for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      //   if (Array.isArray(value) && key != 'take' && key != 'cursor') {
      //     ValidatedParams['params'][key] = { in: value };
      //   }
      // }
      // return this.dataheaderService.FindManyHeader(ValidatedParams);
    } else {
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
      return this.dataheaderService.FindManyHeader(
        ValidatedParams,
        LIMITED_CLIENT,
      );
    }
  }
  private extractTokenFromHeader(request: ExpRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
