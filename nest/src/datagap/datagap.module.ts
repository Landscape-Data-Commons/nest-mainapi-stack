import { Module } from '@nestjs/common';
import { DatagapService } from './datagap.service';
import { DatagapController } from './datagap.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DatagapController],
  providers: [DatagapService],
  imports: [PrismaModule],
})
export class DatagapModule {}
