import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataSpeciesInventory } from '@prisma/client';
import { LikeOperator } from 'src/CustomRequest.decorator';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class DataspeciesinventoryService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params?: any, client?: any): Promise<dataSpeciesInventory[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.dataspeciesinventory,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
