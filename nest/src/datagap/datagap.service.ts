import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataGap, Prisma } from '@prisma/client';

@Injectable()
export class DatagapService {
  constructor(public prisma: PrismaService) {}

  FindManyGap(params?: {
    take?: number | undefined;
    cursor?: Prisma.dataGapWhereUniqueInput;
  }): Promise<dataGap[] | null> {
    const { take, cursor, ...whereParams } = params;
    let t
    if (Array.isArray(take)){
      t = take[0]
    } else {
      t = undefined
    }
    return this.prisma.dataGap.findMany({
      take: t,
      where: { ...whereParams },
      cursor,
    });
  }
}
