import { Module } from '@nestjs/common';
import { DatalpiService } from './datalpi.service';
import { DatalpiController } from './datalpi.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DatalpiController],
  providers: [DatalpiService],
  imports: [PrismaModule],
})
export class DatalpiModule {}
