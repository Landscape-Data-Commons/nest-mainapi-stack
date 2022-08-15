import { Injectable } from '@nestjs/common';
import { CreateDataspeciesinventoryDto } from './dto/create-dataspeciesinventory.dto';
import { UpdateDataspeciesinventoryDto } from './dto/update-dataspeciesinventory.dto';

@Injectable()
export class DataspeciesinventoryService {
  create(createDataspeciesinventoryDto: CreateDataspeciesinventoryDto) {
    return 'This action adds a new dataspeciesinventory';
  }

  findAll() {
    return `This action returns all dataspeciesinventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataspeciesinventory`;
  }

  update(id: number, updateDataspeciesinventoryDto: UpdateDataspeciesinventoryDto) {
    return `This action updates a #${id} dataspeciesinventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataspeciesinventory`;
  }
}
