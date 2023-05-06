import { Controller, Get, Query, Headers, Request } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { AerosummaryService } from './aerosummary.service';
import { dtoAerosummary } from './dto/get-aerosummary.dto';
import { AerosummaryEnt } from './entities/aerosummary.entity';

import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('aerosummary')
export class AerosummaryController {
  constructor(
    private readonly aerosummaryService: AerosummaryService,
    private tokenService: TokenService,
  ) {}

  @Get()
  @ApiOkResponse({ type: AerosummaryEnt, isArray: true })
  async findAll(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,

    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @CustomRequestObjHandler(dtoAerosummary) ValidatedParams?: dtoAerosummary,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.aerosummaryService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
