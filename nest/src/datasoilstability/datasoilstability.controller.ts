import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatasoilstabilityService } from './datasoilstability.service';
import { CreateDatasoilstabilityDto } from './dto/create-datasoilstability.dto';
import { UpdateDatasoilstabilityDto } from './dto/update-datasoilstability.dto';

@Controller('datasoilstability')
export class DatasoilstabilityController {
  constructor(private readonly datasoilstabilityService: DatasoilstabilityService) {}

  @Post()
  create(@Body() createDatasoilstabilityDto: CreateDatasoilstabilityDto) {
    return this.datasoilstabilityService.create(createDatasoilstabilityDto);
  }

  @Get()
  findAll() {
    return this.datasoilstabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datasoilstabilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatasoilstabilityDto: UpdateDatasoilstabilityDto) {
    return this.datasoilstabilityService.update(+id, updateDatasoilstabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datasoilstabilityService.remove(+id);
  }
}
