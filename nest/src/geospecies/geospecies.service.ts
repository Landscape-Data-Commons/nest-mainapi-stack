import { Injectable } from '@nestjs/common';
import { CreateGeospecyDto } from './dto/create-geospecy.dto';
import { UpdateGeospecyDto } from './dto/update-geospecy.dto';

@Injectable()
export class GeospeciesService {
  create(createGeospecyDto: CreateGeospecyDto) {
    return 'This action adds a new geospecy';
  }

  findAll() {
    return `This action returns all geospecies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} geospecy`;
  }

  update(id: number, updateGeospecyDto: UpdateGeospecyDto) {
    return `This action updates a #${id} geospecy`;
  }

  remove(id: number) {
    return `This action removes a #${id} geospecy`;
  }
}
