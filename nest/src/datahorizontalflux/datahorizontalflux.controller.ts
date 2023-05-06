import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatahorizontalfluxService } from './datahorizontalflux.service';
import { dtoDataHorizontalFlux } from './dto/get-datahorizontalflux.dto';
import { DatahorizontalfluxEnt } from './entities/datahorizontalflux.entity';

import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('datahorizontalflux')
export class DatahorizontalfluxController {
  constructor(
    private readonly datahorizontalfluxService: DatahorizontalfluxService,
    private tokenService: TokenService,
    ) {}

  @Get()
  @ApiOkResponse({ type: DatahorizontalfluxEnt, isArray: true })

  GetHorizontalFlux(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataHorizontalFlux) ValidatedParams?: DatahorizontalfluxEnt,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.datahorizontalfluxService,
      take,
      cursor,
      ValidatedParams,
    );
  }

}
