import { Injectable } from '@nestjs/common';
import { CreateDatalpiDto } from './dto/create-datalpi.dto';
import { UpdateDatalpiDto } from './dto/update-datalpi.dto';

@Injectable()
export class DatalpiService {
  create(createDatalpiDto: CreateDatalpiDto) {
    return 'This action adds a new datalpi';
  }

  findAll() {
    return `This action returns all datalpi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datalpi`;
  }

  update(id: number, updateDatalpiDto: UpdateDatalpiDto) {
    return `This action updates a #${id} datalpi`;
  }

  remove(id: number) {
    return `This action removes a #${id} datalpi`;
  }
}
