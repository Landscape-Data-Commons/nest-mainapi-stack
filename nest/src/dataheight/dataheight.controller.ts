import { Controller, Get, Query, Request, Headers } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheightService } from './dataheight.service';
import { dtoDataHeight } from './dto/get-dataheight.dto';
import { DataheightEnt } from './entities/dataheight.entity';
import { Request as ExpRequest } from 'express';
import { TokenService } from 'src/token/token.service';

@Controller('dataheight')
export class DataheightController {
  constructor(
    private readonly dataheightService: DataheightService,
    private tokenService: TokenService,
    ) {}

  @Get()
  @ApiOkResponse({ type: DataheightEnt, isArray: true })
  GetHeight(
    @Headers() headers: Headers,
    @Request() request: ExpRequest,
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @CustomRequestObjHandler(dtoDataHeight) ValidatedParams?: dtoDataHeight,
  ) {
    return this.tokenService.validateRequest(
      headers,
      request,
      this.dataheightService,
      take,
      cursor,
      ValidatedParams,
    );
  }
}
