import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoSpecies } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class GeospeciesService {
  constructor(public prisma: PrismaService) {}

  FindManyGeoSpecies(params: {}): Promise<geoSpecies[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.geoSpecies.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.geoSpecies.findMany({
        where: { ...whereParams },
      });
    }
  }
}
