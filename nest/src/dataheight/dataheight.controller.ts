import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheightService } from './dataheight.service';
import { dtoDataHeight } from './dto/get-dataheight.dto';
import { DataheightEnt } from './entities/dataheight.entity';

@Controller('dataheight')
export class DataheightController {
  constructor(private readonly dataheightService: DataheightService) {}

  @Get()
  @ApiOkResponse({ type: DataheightEnt, isArray: true })
  GetHeight(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @CustomRequestObjHandler(dtoDataHeight) ValidatedParams?: dtoDataHeight,
  ) {
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
    return this.dataheightService.FindManyHeight(ValidatedParams);
  }
}
