import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataDustDeposition } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DatadustdepositionService {
  constructor(public prisma: PrismaService) {}

  FindManyDustDeposition(params?: any): Promise<dataDustDeposition[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);
      return this.prisma.dataDustDeposition.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataDustDeposition.findMany({
        where: { ...whereParams },
      });
    }
  }
}
