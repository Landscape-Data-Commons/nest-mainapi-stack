import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientAero } from '.prisma/client_aero';
import { PrismaClient as PrismaClientNdow } from '.prisma/client_ndow';
import { PrismaClient as PrismaClientLimited } from '.prisma/client_limited';

class ExtPrismaClient extends PrismaClient{
  extendedClient: any;
  AEROClient: any;
  NDOWClient: any;
  LIMITEDClient: any;

  constructor(){
    super();
    this.extendedClient = new PrismaClient();
    this.AEROClient = new PrismaClientAero();
    this.NDOWClient = new PrismaClientNdow();
    this.LIMITEDClient = new PrismaClientLimited();
  }

  extClient(){
    return this.extendedClient;
  }

  getAEROClient(){
    return this.AEROClient;
  }

  getNDOWClient(){
    return this.NDOWClient;
  }

  getLimitedClient(){
    return this.LIMITEDClient;
  }
}

@Injectable()
export class PrismaService extends ExtPrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
    await this.extendedClient.$connect();
    await this.AEROClient.$connect();
    await this.NDOWClient.$connect();
    await this.LIMITEDClient.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
