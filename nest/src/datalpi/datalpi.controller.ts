import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatalpiService } from './datalpi.service';
import { CreateDatalpiDto } from './dto/create-datalpi.dto';
import { UpdateDatalpiDto } from './dto/update-datalpi.dto';

@Controller('datalpi')
export class DatalpiController {
  constructor(private readonly datalpiService: DatalpiService) {}

  @Post()
  create(@Body() createDatalpiDto: CreateDatalpiDto) {
    return this.datalpiService.create(createDatalpiDto);
  }

  @Get()
  findAll() {
    return this.datalpiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datalpiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatalpiDto: UpdateDatalpiDto) {
    return this.datalpiService.update(+id, updateDatalpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datalpiService.remove(+id);
  }
}
