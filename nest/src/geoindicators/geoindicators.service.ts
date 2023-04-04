import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoIndicators_view } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class GeoindicatorsService {
  constructor(public prisma: PrismaService) {}

  FindManyGeoIndicators(params: any): Promise<geoIndicators_view[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('withlike: with take or cursor');
        return this.prisma.geoIndicators_view.findMany({
          where: { ...whereParams, ...wc },
          skip: 1,
          take,
          cursor: {
            rid: cursor,
          },
          orderBy: {
            rid: 'asc',
          },
        });
      } else {
        console.log('withlike: no take or cursor');
        return this.prisma.geoIndicators_view.findMany({
          where: { ...whereParams, ...wc },
          take,
          orderBy: {
            rid: 'asc',
          },
        });
      }
    } else {
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('nolike: with cursor');
        return this.prisma.geoIndicators_view.findMany({
          where: { ...whereParams },
          skip: 1,
          take,
          cursor: {
            rid: cursor,
          },
          orderBy: {
            rid: 'asc',
          },
        });
      } else {
        console.log('nolike: no cursor');
        return this.prisma.geoIndicators_view.findMany({
          where: { ...whereParams },
          take,
          orderBy: {
            rid: 'asc',
          },
        });
      }
    }
  }
}
