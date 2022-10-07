import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHorizontalFlux } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DatahorizontalfluxService {
  constructor(public prisma: PrismaService){}

  FindManyHorizontalFlux(params?): Promise<dataHorizontalFlux[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataHorizontalFlux.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataHorizontalFlux.findMany({
        where: { ...whereParams },
      });
    }
  }
}
