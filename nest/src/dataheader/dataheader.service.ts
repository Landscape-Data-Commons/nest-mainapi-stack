import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeader } from '@prisma/client';

@Injectable()
export class DataheaderService {
  constructor(public prisma: PrismaService) {}

  FindManyHeader(params?: {}): Promise<dataHeader[] | null>{

    return this.prisma.dataHeader.findMany({
      where: { ...params },
    });
  }
}
