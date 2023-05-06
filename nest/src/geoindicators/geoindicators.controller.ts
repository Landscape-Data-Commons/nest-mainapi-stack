import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { GeoindicatorsService } from './geoindicators.service';
import { dtoGeoIndicators } from './dto/get-geoindicators.dto';
import { GeoindicatorEnt } from './entities/geoindicator.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('geoindicators')
export class GeoindicatorsController {
  constructor(
    private readonly geoindicatorsService: GeoindicatorsService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: GeoindicatorEnt, isArray: true })
  GetGeoIndicators(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoGeoIndicators)
    ValidatedParams?: dtoGeoIndicators,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.geoindicatorsService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
