import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeospeciesService } from './geospecies.service';
import { CreateGeospecyDto } from './dto/create-geospecy.dto';
import { UpdateGeospecyDto } from './dto/update-geospecy.dto';

@Controller('geospecies')
export class GeospeciesController {
  constructor(private readonly geospeciesService: GeospeciesService) {}

  @Post()
  create(@Body() createGeospecyDto: CreateGeospecyDto) {
    return this.geospeciesService.create(createGeospecyDto);
  }

  @Get()
  findAll() {
    return this.geospeciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geospeciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeospecyDto: UpdateGeospecyDto) {
    return this.geospeciesService.update(+id, updateGeospecyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geospeciesService.remove(+id);
  }
}
