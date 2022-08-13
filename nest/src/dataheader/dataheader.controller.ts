import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheaderService } from './dataheader.service';
import { dtoDataHeader } from './dto/get-dataheader.dto';
import { DataheaderEnt } from './entities/dataheader.entity';

@Controller('dataheader')
export class DataheaderController {
  constructor(private readonly dataheaderService: DataheaderService) {}

  @Get()
  @ApiOkResponse({ type: DataheaderEnt, isArray: true })
  GetHeader(
    @CustomRequestObjHandler(dtoDataHeader) ValidatedParams?: dtoDataHeader) {
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.dataheaderService.FindManyHeader(ValidatedParams);
  }
}
