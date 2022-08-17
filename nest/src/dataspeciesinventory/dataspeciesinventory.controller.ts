import { Controller, Get } from '@nestjs/common';
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
    @CustomRequestObjHandler(dtoDataSpeciesInventory) ValidatedParams?: dtoDataSpeciesInventory){
    for (const [key, value] of Object.entries(ValidatedParams)) {
      if (Array.isArray(value)) {
        ValidatedParams[key] = { in: value };
      }
    }
    return this.dataspeciesinventoryService.FindManySpeciesInventory(ValidatedParams);
  }
}
