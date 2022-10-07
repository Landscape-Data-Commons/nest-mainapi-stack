import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataLPI } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DatalpiService {
  constructor(public prisma: PrismaService) {}

  FindManyLPI(params: {}): Promise<dataLPI[] | null>{
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataLPI.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataLPI.findMany({
        where: { ...whereParams },
      });
    }
  }
}
