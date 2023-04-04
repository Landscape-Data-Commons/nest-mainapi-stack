import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';
import { PrismaClient as PrismaClientAero } from '.prisma/client_aero';

class ExtPrismaClient extends PrismaClient{
  extendedClient: any;
  AEROClient: any;

  constructor(){
    super();
    this.extendedClient = new PrismaClient();
    this.AEROClient = new PrismaClientAero();
  }

  extClient(){
    return this.extendedClient;
  }

  getAEROClient(){
    return this.AEROClient;
  }
}

@Injectable()
export class PrismaService extends ExtPrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
    await this.extendedClient.$connect();
    await this.AEROClient.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
