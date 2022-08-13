import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataGap } from '@prisma/client';

@Injectable()
export class DatagapService {
  constructor(public prisma: PrismaService) {}

  FindManyGap(params?: {}): Promise<dataGap[] | null> {

    return this.prisma.dataGap.findMany({
      where: { ...params },
    });
  }
}
