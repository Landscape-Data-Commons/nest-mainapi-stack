import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeader } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DataheaderService {
  constructor(public prisma: PrismaService) {}

  FindManyHeader(params?: {}): Promise<dataHeader[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataHeader.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataHeader.findMany({
        where: { ...whereParams },
      });
    }
  }
}
