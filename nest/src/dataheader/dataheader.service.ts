import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeader, Prisma } from '@prisma/client';
import { NDOW_CLIENT, LIMITED_CLIENT } from 'src/ClientSwitch.constants';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DataheaderService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService) {}

  FindMany(params?: any, client?: any): Promise<dataHeader[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataHeader,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
