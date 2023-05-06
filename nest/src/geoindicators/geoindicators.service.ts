import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoIndicators_view } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class GeoindicatorsService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params?: any, client?: any): Promise<geoIndicators_view[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.geoIndicators_view,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
