import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSoilStability } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';

@Injectable()
export class DatasoilstabilityService {
  constructor(public prisma: PrismaService) {}

  FindManySoilStability(params: {}): Promise<dataSoilStability[] | null>{
    const { ...whereParams } = params['params'];

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);

      return this.prisma.dataSoilStability.findMany({
        where: { ...whereParams, wc },
      });
    } else {
      return this.prisma.dataSoilStability.findMany({
        where: { ...whereParams },
      });
    }
  }
}
