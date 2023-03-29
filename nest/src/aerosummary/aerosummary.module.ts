import { Module } from '@nestjs/common';
import { AerosummaryService } from './aerosummary.service';
import { AerosummaryController } from './aerosummary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AerosummaryController],
  providers: [AerosummaryService],
  imports: [PrismaModule],
})
export class AerosummaryModule {}
