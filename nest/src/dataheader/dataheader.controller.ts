import {
  Controller,
  Get,
  Query,
  Headers,
  Request,
  UnauthorizedException,
  ConsoleLogger,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheaderService } from './dataheader.service';
import { dtoDataHeader } from './dto/get-dataheader.dto';
import { DataheaderEnt } from './entities/dataheader.entity';

import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('dataheader')
export class DataheaderController {
  constructor(
    private readonly dataheaderService: DataheaderService,
    private tokenService: TokenService,
  ) {}

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

    //  async iterator 
    const stream = this.tokenService.validateRequest(
      headers,
      request,
      this.dataheaderService,
      take,
      cursor,
      ValidatedParams,
    );
    for await (const entity of [stream]){ 
      // return entity;
    }
    // for await (const item of this.tokenService.validateRequest(
    //   headers,
    //   request,
    //   this.dataheaderService,
    //   take,
    //   cursor,
    //   ValidatedParams,
    // )){
    //   return item;
    // }
    //  default single json
    return this.tokenService.validateRequest(
      headers,
      request,
      this.dataheaderService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
