import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataDustDeposition } from '@prisma/client';

@Injectable()
export class DatadustdepositionService {
  constructor(public prisma: PrismaService) {}

  FindManyDustDeposition(params?: {}): Promise<dataDustDeposition[] | null> {
    return this.prisma.dataDustDeposition.findMany({
      where: { ...params },
    });
  }
}
