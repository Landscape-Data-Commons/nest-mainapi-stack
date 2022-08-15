import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeoindicatorsService } from './geoindicators.service';
import { CreateGeoindicatorDto } from './dto/create-geoindicator.dto';
import { UpdateGeoindicatorDto } from './dto/update-geoindicator.dto';

@Controller('geoindicators')
export class GeoindicatorsController {
  constructor(private readonly geoindicatorsService: GeoindicatorsService) {}

  @Post()
  create(@Body() createGeoindicatorDto: CreateGeoindicatorDto) {
    return this.geoindicatorsService.create(createGeoindicatorDto);
  }

  @Get()
  findAll() {
    return this.geoindicatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geoindicatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeoindicatorDto: UpdateGeoindicatorDto) {
    return this.geoindicatorsService.update(+id, updateGeoindicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geoindicatorsService.remove(+id);
  }
}
