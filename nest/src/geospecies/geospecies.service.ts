import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { geoSpecies } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Injectable()
export class GeospeciesService {
  chosenClient: any;

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  FindMany(params?: any, client?: any): Promise<geoSpecies[] | null> {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);

    return this.prismaHelper.paramHandler(
      this.chosenClient.geoSpecies,
      whereParams,
      take,
      cursor,
      params,
    );
  }
}
