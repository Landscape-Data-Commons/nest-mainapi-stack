import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHorizontalFlux } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DatahorizontalfluxService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params?: any, client?: any): Promise<dataHorizontalFlux[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataHorizontalFlux,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
