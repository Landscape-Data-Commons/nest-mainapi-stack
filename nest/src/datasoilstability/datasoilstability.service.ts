import { Injectable } from '@nestjs/common';
import { CreateDatasoilstabilityDto } from './dto/create-datasoilstability.dto';
import { UpdateDatasoilstabilityDto } from './dto/update-datasoilstability.dto';

@Injectable()
export class DatasoilstabilityService {
  create(createDatasoilstabilityDto: CreateDatasoilstabilityDto) {
    return 'This action adds a new datasoilstability';
  }

  findAll() {
    return `This action returns all datasoilstability`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datasoilstability`;
  }

  update(id: number, updateDatasoilstabilityDto: UpdateDatasoilstabilityDto) {
    return `This action updates a #${id} datasoilstability`;
  }

  remove(id: number) {
    return `This action removes a #${id} datasoilstability`;
  }
}
