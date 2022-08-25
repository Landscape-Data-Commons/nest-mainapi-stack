import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiExtraModels, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatadustdepositionService } from './datadustdeposition.service';
import { dtoDataDustDeposition } from './dto/get-datadustdeposition.dto';
import { DatadustdepositionEnt } from './entities/datadustdeposition.entity';


@Controller('datadustdeposition')
export class DatadustdepositionController {
  constructor(private readonly datadustdepositionService: DatadustdepositionService) {}

  @Get()
  @ApiOkResponse({ type: DatadustdepositionEnt, isArray: true })

  GetDustDeposition(
    @Query() DustDepositionQueries: DatadustdepositionEnt,
    @CustomRequestObjHandler(dtoDataDustDeposition) ValidatedParams?: DatadustdepositionEnt,
  ) {
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.datadustdepositionService.FindManyDustDeposition(ValidatedParams);
  }

}
