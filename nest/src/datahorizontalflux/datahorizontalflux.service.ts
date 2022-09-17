import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHorizontalFlux } from '@prisma/client';

@Injectable()
export class DatahorizontalfluxService {
  constructor(public prisma: PrismaService){}

  FindManyHorizontalFlux(params?): Promise<dataHorizontalFlux[] | null> {
    return this.prisma.dataHorizontalFlux.findMany({
      where: { ...params },
    });
  }
}
