import { Controller, Get } from '@nestjs/common';
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
    @CustomRequestObjHandler(dtoDataSoilStability) ValidatedParams?: dtoDataSoilStability){
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value)) {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.datasoilstabilityService.FindManySoilStability(ValidatedParams);
  }
}
