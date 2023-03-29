import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { AerosummaryService } from './aerosummary.service';
import { dtoAerosummary } from './dto/get-aerosummary.dto';
import { AerosummaryEnt } from './entities/aerosummary.entity';

@Controller('aerosummary')
export class AerosummaryController {
  constructor(private readonly aerosummaryService: AerosummaryService) {}

  @Get()
  @ApiOkResponse({ type: AerosummaryEnt, isArray: true })
  GetAeroSummary(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoAerosummary)
    ValidatedParams?: dtoAerosummary,
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
    return this.aerosummaryService.FindManyAeroSummary(ValidatedParams);
  }
}
