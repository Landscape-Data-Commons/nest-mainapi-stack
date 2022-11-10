import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';
import { dtoDataSpeciesInventory } from './dto/get-speciesinventory.dto';
import { DataspeciesinventoryEnt } from './entities/dataspeciesinventory.entity';

@Controller('dataspeciesinventory')
export class DataspeciesinventoryController {
  constructor(private readonly dataspeciesinventoryService: DataspeciesinventoryService) {}

  @Get()
  @ApiOkResponse({ type: DataspeciesinventoryEnt, isArray: true })
  GetSpeciesInventory(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataSpeciesInventory) ValidatedParams?: dtoDataSpeciesInventory){
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
    return this.dataspeciesinventoryService.FindManySpeciesInventory(ValidatedParams);
  }
}
