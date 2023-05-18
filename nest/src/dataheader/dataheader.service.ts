import { Injectable, StreamableFile } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataHeader } from '@prisma/client';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';
// stream test
import { Stream } from 'stream';
import { StreamObject } from 'stream-json/streamers/StreamObject';
import fs from 'fs';

@Injectable()
export class DataheaderService {
  chosenClient: any;
  

  constructor(
    public prisma: PrismaService,
    private prismaHelper: PrismahelperService,
  ) {}

  async FindMany(params?: any, client?: any)
  // Promise<dataHeader[] | null> 

  {
    const { ...whereParams } = params['params'];
    const { take, cursor } = params;

    this.chosenClient = this.prismaHelper.ClientSwitch(client);
    
    // KBF 05/18/2023: async iterator for Readable stream
    for await (const result of this.prismaHelper.paramHandler(
      this.chosenClient.dataHeader,
      whereParams,
      take,
      cursor,
      params,
    )){
      return result
    }
    // KBF 05/18/2023: default single json response 
    // return this.prismaHelper.paramHandler(
    //   this.chosenClient.dataLPI,
    //   whereParams,
    //   take,
    //   cursor,
    //   params,
    // );
  }
}
