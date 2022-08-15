import { Injectable } from '@nestjs/common';
import { CreateGeoindicatorDto } from './dto/create-geoindicator.dto';
import { UpdateGeoindicatorDto } from './dto/update-geoindicator.dto';

@Injectable()
export class GeoindicatorsService {
  create(createGeoindicatorDto: CreateGeoindicatorDto) {
    return 'This action adds a new geoindicator';
  }

  findAll() {
    return `This action returns all geoindicators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} geoindicator`;
  }

  update(id: number, updateGeoindicatorDto: UpdateGeoindicatorDto) {
    return `This action updates a #${id} geoindicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} geoindicator`;
  }
}
