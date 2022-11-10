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
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataHorizontalFlux) ValidatedParams?: DatahorizontalfluxEnt,
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
    return this.datahorizontalfluxService.FindManyHorizontalFlux(ValidatedParams);
  }

}
