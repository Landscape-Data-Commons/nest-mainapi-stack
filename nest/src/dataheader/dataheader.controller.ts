import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheaderService } from './dataheader.service';
import { dtoDataHeader } from './dto/get-dataheader.dto';
import { DataheaderEnt } from './entities/dataheader.entity';

@Controller('dataheader')
export class DataheaderController {
  constructor(private readonly dataheaderService: DataheaderService) {}

  @Get()
  @ApiOkResponse({ type: DataheaderEnt, isArray: true })
  GetHeader(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataHeader) ValidatedParams?: dtoDataHeader) {
    if (take) {
      ValidatedParams['take'] = Number(take);
    }
    if (cursor) {
      ValidatedParams['cursor'] = Number(cursor);
    }
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value) && key != 'take' && key != 'cursor') {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.dataheaderService.FindManyHeader(ValidatedParams);
  }
}
