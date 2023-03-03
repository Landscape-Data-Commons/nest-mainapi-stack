import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientRestricted } from '.prisma/client1';
import { PrismaClient as PrismaClientNDOW } from '.prisma/client2';

const Client1 = new PrismaClientRestricted();
const client2 = new PrismaClientNDOW();

class ExtPrismaClient extends PrismaClient {
  // choose connection here
  extendedClient: any;
  NDOWClient: any;
  RestrictedClient: any;

  constructor() {
    super();
    this.extendedClient = new PrismaClient();

    this.NDOWClient = new PrismaClientNDOW();
    this.RestrictedClient = new PrismaClientRestricted();

    // this.extendedClient = this.extendedClient.$extends({
    //   client: {
    //     $NDOW: (s: string) => console.log(s),
    //   },
    // });
  }
  extClient() {
    return this.extendedClient;
  }

  getNDOWClient() {
    return this.NDOWClient;
  }

  getRestrictedClient() {
    return this.RestrictedClient;
  }
}

@Injectable()
export class PrismaService extends ExtPrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.extClient().$connect();
    await this.RestrictedClient.$connect();
    await this.NDOWClient.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.extClient().$on('beforeExit', async () => {
      await app.close();
    });
  }
}
