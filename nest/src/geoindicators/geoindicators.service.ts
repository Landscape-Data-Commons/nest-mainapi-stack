import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoIndicators } from '@prisma/client';

@Injectable()
export class GeoindicatorsService {
  constructor(public prisma: PrismaService) {}

  FindManyGeoIndicators(params: {}): Promise<geoIndicators[] | null>{
    return this.prisma.geoIndicators.findMany({
      where: { ...params },
    });
  }
}
