import { Controller, Get, Query } from '@nestjs/common';
import { ApiBody, ApiExtraModels, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DatahorizontalfluxService } from './datahorizontalflux.service';
import { dtoDataHorizontalFlux } from './dto/get-datahorizontalflux.dto';
import { DatahorizontalfluxEnt } from './entities/datahorizontalflux.entity';

@Controller('datahorizontalflux')
export class DatahorizontalfluxController {
  constructor(private readonly datahorizontalfluxService: DatahorizontalfluxService) {}

  @Get()
  @ApiOkResponse({ type: DatahorizontalfluxEnt, isArray: true })

  GetHorizontalFlux(
    @Query() HorzontalFluxQueries: DatahorizontalfluxEnt,
    @CustomRequestObjHandler(dtoDataHorizontalFlux) ValidatedParams?: DatahorizontalfluxEnt,

  ){
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value)) {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.datahorizontalfluxService.FindManyHorizontalFlux(ValidatedParams);
  }

}
