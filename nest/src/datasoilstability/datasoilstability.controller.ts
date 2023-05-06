import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatasoilstabilityService } from './datasoilstability.service';
import { dtoDataSoilStability } from './dto/get-datasoilstability.dto';
import { DatasoilstabilityEnt } from './entities/datasoilstability.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('datasoilstability')
export class DatasoilstabilityController {
  constructor(
    private readonly datasoilstabilityService: DatasoilstabilityService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: DatasoilstabilityEnt, isArray: true })
  GetSoilStability(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataSoilStability)
    ValidatedParams?: dtoDataSoilStability,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.datasoilstabilityService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
