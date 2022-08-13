import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatagapModule } from './datagap/datagap.module';
import { PrismaModule } from './prisma/prisma.module';
import { DataheaderModule } from './dataheader/dataheader.module';

@Module({
  imports: [DatagapModule, PrismaModule, DataheaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
