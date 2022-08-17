import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSpeciesInventory } from '@prisma/client';

@Injectable()
export class DataspeciesinventoryService {
  constructor(public prisma: PrismaService) {}

  FindManySpeciesInventory(params: {}): Promise<dataSpeciesInventory[] | null>{
    return this.prisma.dataSpeciesInventory.findMany({
      where: { ...params },
    });
  }
}
