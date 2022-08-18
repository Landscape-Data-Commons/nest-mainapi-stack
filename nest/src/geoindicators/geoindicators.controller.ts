import { Controller, Get } from '@nestjs/common';
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
    @CustomRequestObjHandler(dtoGeoIndicators) ValidatedParams?: dtoGeoIndicators){
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.geoindicatorsService.FindManyGeoIndicators(ValidatedParams);
  }
}
