import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeader, Prisma } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { NDOW_CLIENT, LIMITED_CLIENT } from 'src/ClientSwitch.constants';

@Injectable()
export class DataheaderService {
  chosenClient: any;

  constructor(public prisma: PrismaService) {}

  FindManyHeader(params?: any, client?: any): Promise<dataHeader[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.ClientSwitch(client);

    if ('wildcards' in params) {
      const { ...wildcards } = params['wildcards'];
      const wc = LikeOperator(wildcards);
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('withlike: with take or cursor');
        return this.chosenClient.dataHeader.findMany({
          where: { ...whereParams, ...wc },
          skip: 1,
          take,
          cursor: {
            rid: cursor,
          },
          orderBy: {
            rid: 'asc',
          },
        });
      } else {
        console.log('withlike: no take or cursor');
        return this.chosenClient.dataHeader.findMany({
          where: { ...whereParams, ...wc },
          take,
          orderBy: {
            rid: 'asc',
          },
        });
      }
    } else {
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('nolike: with cursor');
        return this.chosenClient.dataHeader.findMany({
          where: { ...whereParams },
          skip: 1,
          take,
          cursor: {
            rid: cursor,
          },
          orderBy: {
            rid: 'asc',
          },
        });
      } else {
        console.log('nolike: no cursor');
        return this.chosenClient.dataHeader.findMany({
          where: { ...whereParams },
          take,
          orderBy: {
            rid: 'asc',
          },
        });
      }
    }
  }

  private ClientSwitch(client: any): any {
    switch (client) {
      case NDOW_CLIENT: {
        console.log('RETURNING NDOW');
        return this.prisma.NDOWClient
        break;
      }
      case LIMITED_CLIENT: {
        console.log('RETURNING LIMITED');
        return this.prisma.LIMITEDClient
        break;
      }
    }
  }
}
