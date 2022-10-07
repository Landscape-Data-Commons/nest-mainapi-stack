import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeight } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DataheightService {
  constructor(public prisma: PrismaService) {}

  FindManyHeight(params: {}): Promise<dataHeight[] | null>{
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataHeight.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataHeight.findMany({
        where: { ...whereParams },
      });
    }
  }
}
