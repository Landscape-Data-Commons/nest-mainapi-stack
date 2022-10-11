import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSpeciesInventory } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DataspeciesinventoryService {
  constructor(public prisma: PrismaService) {}

  FindManySpeciesInventory(params: {}): Promise<dataSpeciesInventory[] | null> {
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataSpeciesInventory.findMany({
        where: { ...whereParams, ...wc },
      });
    } else {
      return this.prisma.dataSpeciesInventory.findMany({
        where: { ...whereParams },
      });
    }
  }
}
