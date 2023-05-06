import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';
import { dtoDataSpeciesInventory } from './dto/get-speciesinventory.dto';
import { DataspeciesinventoryEnt } from './entities/dataspeciesinventory.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('dataspeciesinventory')
export class DataspeciesinventoryController {
  constructor(
    private readonly dataspeciesinventoryService: DataspeciesinventoryService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: DataspeciesinventoryEnt, isArray: true })
  GetSpeciesInventory(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataSpeciesInventory)
    ValidatedParams?: dtoDataSpeciesInventory,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.dataspeciesinventoryService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
