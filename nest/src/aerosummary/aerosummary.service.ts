import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoIndicators_view } from '@prisma/client';
import { aero_summary as AeroSummary } from '.prisma/client_aero';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';
import { AERO_CLIENT } from 'src/ClientSwitch.constants';

@Injectable()
export class AerosummaryService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params: any, client?: any): Promise<AeroSummary[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;
    
    this.chosenClient = this.prismaHelper.ClientSwitch(AERO_CLIENT);

    return this.prismaHelper.paramHandler(
      this.chosenClient.aero_summary,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
