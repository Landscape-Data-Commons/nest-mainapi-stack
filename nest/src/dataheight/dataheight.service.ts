import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeight } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DataheightService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params: any, client?: any): Promise<dataHeight[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataHeight,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
