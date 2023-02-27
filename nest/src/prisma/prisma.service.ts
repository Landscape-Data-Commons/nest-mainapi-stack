import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientRestricted } from '.prisma/client1';
import { PrismaClient as PrismaClientNDOW } from '.prisma/client2';

// const Client1 = new PrismaClientRestricted();
// const client2 = new PrismaClientNDOW();

// const ExtendedPrismaClient = () => {
//   const extendedClient = new PrismaClient();
//   return extendedClient.$extends()
// }

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  
  async onModuleInit() {
    // console.log("TEST2")
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
