import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSoilStability } from '@prisma/client';

@Injectable()
export class DatasoilstabilityService {
  constructor(public prisma: PrismaService) {}

  FindManySoilStability(params: {}): Promise<dataSoilStability[] | null>{

    return this.prisma.dataSoilStability.findMany({
      where: { ...params },
    });
  }
}
