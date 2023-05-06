import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSoilStability } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DatasoilstabilityService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params?: any, client?: any): Promise<dataSoilStability[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataSoilStability,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
