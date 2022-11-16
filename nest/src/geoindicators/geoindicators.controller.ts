import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { GeoindicatorsService } from './geoindicators.service';
import { dtoGeoIndicators } from './dto/get-geoindicators.dto';
import { GeoindicatorEnt } from './entities/geoindicator.entity';

@Controller('geoindicators')
export class GeoindicatorsController {
  constructor(private readonly geoindicatorsService: GeoindicatorsService) {}

  @Get()
  @ApiOkResponse({ type: GeoindicatorEnt, isArray: true })
  GetGeoIndicators(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoGeoIndicators)
    ValidatedParams?: dtoGeoIndicators,
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
    return this.geoindicatorsService.FindManyGeoIndicators(ValidatedParams);
  }
}
