import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoSpecies } from '@prisma/client';

@Injectable()
export class GeospeciesService {
  constructor(public prisma: PrismaService) {}

  FindManyGeoSpecies(params: {}): Promise<geoSpecies[] | null>{

    return this.prisma.geoSpecies.findMany({
      where: { ...params },
    });
  }
}
