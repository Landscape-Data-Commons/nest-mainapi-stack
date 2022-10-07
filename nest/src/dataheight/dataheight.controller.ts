import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataheightService } from './dataheight.service';
import { dtoDataHeight } from './dto/get-dataheight.dto';
import { DataheightEnt } from './entities/dataheight.entity';

@Controller('dataheight')
export class DataheightController {
  constructor(private readonly dataheightService: DataheightService) {}

  @Get()
  @ApiOkResponse({ type: DataheightEnt, isArray: true })
  GetHeight(
    @CustomRequestObjHandler(dtoDataHeight) ValidatedParams?: dtoDataHeight) {
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      if (Array.isArray(value)) {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.dataheightService.FindManyHeight(ValidatedParams);
  }
}
