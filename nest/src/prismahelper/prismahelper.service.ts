import { Injectable } from '@nestjs/common';
import {
  AERO_CLIENT,
  LIMITED_CLIENT,
  NDOW_CLIENT,
} from 'src/ClientSwitch.constants';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { PrismaService } from 'src/prisma/prisma.service';

import { Readable } from 'stream';

@Injectable()
export class PrismahelperService {
  constructor(public prisma: PrismaService) {}
  public paramHandler(
    chosenClient?,
    whereParams?,
    take?,
    cursor?,
    completeParams?,
  ) {
    if ('wildcards' in completeParams) {
      const { ...wildcards } = completeParams['wildcards'];
      const wc = LikeOperator(wildcards);
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('withlike: with take or cursor');
        return chosenClient.findMany({
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
        return chosenClient.findMany({
          where: { ...whereParams, ...wc },
          take,
          orderBy: {
            rid: 'asc',
          },
        });
      }
    } else {
      if (!isNaN(take) && !isNaN(cursor)) {
        console.log('nolike: with cursor ');
        return chosenClient.findMany({
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

        // KBF 05/18/2023: returning readable stream instead of single client instance
        // return new Readable({
        //   objectMode: true,
        //   highWaterMark: take,
        //   async read() {
        //     try {
        //       const items = await chosenClient.findMany({
        //         where: { ...whereParams },
        //         take,
        //         orderBy: {
        //           rid: 'asc',
        //         },
        //       });
        //       if (items.length === 0) {
        //         this.push(null);
        //       } else {
        //         for (const item of items) {
        //           this.push(item);
        //         }
        //       }
        //       cursor = items[items.length - 1].id;
        //     } catch (err) {
        //       this.destroy(err);
        //     }
        //   },
        // });

        // KBF 05/18/2023: default single client response 

        return chosenClient.findMany({
          where: { ...whereParams },
          take,
          // cursor: {
          //   rid: cursor,
          // },
          orderBy: {
            rid: 'asc',
          },
        });
      }
    }
  }

  public ClientSwitch(client: any): any {
    switch (client) {
      case NDOW_CLIENT: {
        return this.prisma.NDOWClient;
        break;
      }
      case LIMITED_CLIENT: {
        return this.prisma.LIMITEDClient;
        break;
      }
      case AERO_CLIENT: {
        return this.prisma.AEROClient;
        break;
      }
    }
  }
}
