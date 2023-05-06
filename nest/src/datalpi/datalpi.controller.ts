import { Controller, Get, Headers, Request } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatalpiService } from './datalpi.service';
import { dtoDataLPI } from './dto/get-datalpi.dto';
import { DatalpiEnt } from './entities/datalpi.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('datalpi')
export class DatalpiController {
  constructor(
    private readonly datalpiService: DatalpiService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: DatalpiEnt, isArray: true })
  GetLPI(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataLPI) ValidatedParams?: dtoDataLPI,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.datalpiService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
