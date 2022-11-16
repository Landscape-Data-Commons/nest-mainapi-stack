import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { GeospeciesService } from './geospecies.service';
import { dtoGeoSpecies } from './dto/get-geospecies.dto';
import { GeospeciesEnt } from './entities/geospecy.entity';


@Controller('geospecies')
export class GeospeciesController {
  constructor(private readonly geospeciesService: GeospeciesService) {}

  @Get()
  @ApiOkResponse({ type: GeospeciesEnt, isArray: true })
  GetGeoSpecies(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoGeoSpecies) ValidatedParams?: dtoGeoSpecies)
    {
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
    return this.geospeciesService.FindManyGeoSpecies(ValidatedParams);
  }
}
