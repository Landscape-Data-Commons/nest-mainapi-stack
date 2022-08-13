import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator'
import { DatagapService } from './datagap.service';
import { dtoDataGap } from './dto/get-datagap.dto';
import { DatagapEnt } from './entities/datagap.entity';


@Controller('datagap')
export class DatagapController {
  constructor(private readonly datagapService: DatagapService) {}

  @Get()
  @ApiOkResponse({ type: DatagapEnt, isArray: true })
  GetGap(@CustomRequestObjHandler(dtoDataGap) ValidatedParams?: dtoDataGap) {
    // prisma requires an additional "in" when filtering
    // an array of values in the request.query param
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.datagapService.FindManyGap(ValidatedParams);
  }
}
