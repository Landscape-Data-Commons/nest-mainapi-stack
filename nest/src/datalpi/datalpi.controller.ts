import { Controller, Get } from '@nestjs/common';
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
    @CustomRequestObjHandler(dtoDataLPI) ValidatedParams?: dtoDataLPI) {
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.datalpiService.FindManyLPI(ValidatedParams);
  }
}
