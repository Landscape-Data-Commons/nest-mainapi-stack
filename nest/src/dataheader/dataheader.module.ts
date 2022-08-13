import { Module } from '@nestjs/common';
import { DataheaderService } from './dataheader.service';
import { DataheaderController } from './dataheader.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DataheaderController],
  providers: [DataheaderService],
  imports: [PrismaModule],
})
export class DataheaderModule {}
