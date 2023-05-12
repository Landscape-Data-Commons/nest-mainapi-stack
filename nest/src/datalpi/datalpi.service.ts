import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataLPI } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DatalpiService {
  chosenClient: any;

  constructor(private prismaHelper: PrismahelperService) {}

  FindMany(params?: any, client?: any): Promise<dataLPI[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataLPI,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
