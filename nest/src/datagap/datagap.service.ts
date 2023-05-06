import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataGap } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DatagapService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params: any, client?: any): Promise<dataGap[] | null> {
    const { ...whereParams } = params['params'];
    // console.log(params)
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataGap,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
