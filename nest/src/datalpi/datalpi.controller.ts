import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatalpiService } from './datalpi.service';
import { dtoDataLPI } from './dto/get-datalpi.dto';
import { DatalpiEnt } from './entities/datalpi.entity';

@Controller('datalpi')
export class DatalpiController {
  constructor(private readonly datalpiService: DatalpiService) {}

  @Get()
  @ApiOkResponse({ type: DatalpiEnt, isArray: true })
  GetLPI(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataLPI) ValidatedParams?: dtoDataLPI,
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
    return this.datalpiService.FindManyLPI(ValidatedParams);
  }
}
