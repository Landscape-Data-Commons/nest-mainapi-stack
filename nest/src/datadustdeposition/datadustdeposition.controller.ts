import { Controller, Get, Query, Request, Headers } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatadustdepositionService } from './datadustdeposition.service';
import { dtoDataDustDeposition } from './dto/get-datadustdeposition.dto';
import { DatadustdepositionEnt } from './entities/datadustdeposition.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('datadustdeposition')
export class DatadustdepositionController {
  constructor(
    private readonly datadustdepositionService: DatadustdepositionService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: DatadustdepositionEnt, isArray: true })
  GetDustDeposition(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,

    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @CustomRequestObjHandler(dtoDataDustDeposition)
    ValidatedParams?: DatadustdepositionEnt,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.datadustdepositionService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
