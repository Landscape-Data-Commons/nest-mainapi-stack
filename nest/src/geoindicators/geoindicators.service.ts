import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoIndicators } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class GeoindicatorsService {
  constructor(public prisma: PrismaService) {}

  FindManyGeoIndicators(params: any): Promise<geoIndicators[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.geoIndicators.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.geoIndicators.findMany({
        where: { ...whereParams },
      });
    }
  }
}
