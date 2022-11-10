import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatasoilstabilityService } from './datasoilstability.service';
import { dtoDataSoilStability } from './dto/get-datasoilstability.dto';
import { DatasoilstabilityEnt } from './entities/datasoilstability.entity';

@Controller('datasoilstability')
export class DatasoilstabilityController {
  constructor(private readonly datasoilstabilityService: DatasoilstabilityService) {}

  @Get()
  @ApiOkResponse({ type: DatasoilstabilityEnt, isArray: true })
  GetSoilStability(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataSoilStability) ValidatedParams?: dtoDataSoilStability){
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
    return this.datasoilstabilityService.FindManySoilStability(ValidatedParams);
  }
}
