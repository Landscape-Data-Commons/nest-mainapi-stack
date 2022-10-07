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
    @Query() LPIQueries?: DatalpiEnt,
    @CustomRequestObjHandler(dtoDataLPI) ValidatedParams?: dtoDataLPI) {
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value)) {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.datalpiService.FindManyLPI(ValidatedParams);
  }
}
