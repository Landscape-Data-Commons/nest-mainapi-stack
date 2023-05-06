import { Body, Controller, Get, Query, Headers, Request } from '@nestjs/common';
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatagapService } from './datagap.service';
import { dtoDataGap } from './dto/get-datagap.dto';
import { DatagapEnt } from './entities/datagap.entity';
import { TokenService } from 'src/token/token.service';
import { Request as ExpRequest } from 'express';

@Controller('datagap')
export class DatagapController {
  constructor(
    private readonly datagapService: DatagapService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: DatagapEnt, isArray: true })
  GetGap(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataGap) ValidatedParams?: DatagapEnt,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.datagapService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
