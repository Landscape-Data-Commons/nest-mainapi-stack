import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataLPI } from '@prisma/client';

@Injectable()
export class DatalpiService {
  constructor(public prisma: PrismaService) {}

  FindManyLPI(params: {}): Promise<dataLPI[] | null>{

    return this.prisma.dataLPI.findMany({
      where: { ...params },
    });
  }
}
