import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { GeospeciesService } from './geospecies.service';
import { dtoGeoSpecies } from './dto/get-geospecies.dto';
import { GeospeciesEnt } from './entities/geospecy.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('geospecies')
export class GeospeciesController {
  constructor(
    private readonly geospeciesService: GeospeciesService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: GeospeciesEnt, isArray: true })
  GetGeoSpecies(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoGeoSpecies) ValidatedParams?: dtoGeoSpecies,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.geospeciesService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
