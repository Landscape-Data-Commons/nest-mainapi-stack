import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';
import { CreateDataspeciesinventoryDto } from './dto/create-dataspeciesinventory.dto';
import { UpdateDataspeciesinventoryDto } from './dto/update-dataspeciesinventory.dto';

@Controller('dataspeciesinventory')
export class DataspeciesinventoryController {
  constructor(private readonly dataspeciesinventoryService: DataspeciesinventoryService) {}

  @Post()
  create(@Body() createDataspeciesinventoryDto: CreateDataspeciesinventoryDto) {
    return this.dataspeciesinventoryService.create(createDataspeciesinventoryDto);
  }

  @Get()
  findAll() {
    return this.dataspeciesinventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataspeciesinventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataspeciesinventoryDto: UpdateDataspeciesinventoryDto) {
    return this.dataspeciesinventoryService.update(+id, updateDataspeciesinventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataspeciesinventoryService.remove(+id);
  }
}
