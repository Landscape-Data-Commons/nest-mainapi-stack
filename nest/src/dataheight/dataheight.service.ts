import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeight } from '@prisma/client';

@Injectable()
export class DataheightService {
  constructor(public prisma: PrismaService) {}

  FindManyHeight(params: {}): Promise<dataHeight[] | null>{

    return this.prisma.dataHeight.findMany({
      where: { ...params },
    });
  }
}
