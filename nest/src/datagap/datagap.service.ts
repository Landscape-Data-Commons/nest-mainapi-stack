import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataGap } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DatagapService {
  constructor(public prisma: PrismaService) {}

  FindManyGap(params: any): Promise<dataGap[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataGap.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataGap.findMany({
        where: { ...whereParams },
      });
    }
  }
}
