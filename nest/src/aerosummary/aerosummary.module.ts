import { Module } from '@nestjs/common';
import { AerosummaryService } from './aerosummary.service';
import { AerosummaryController } from './aerosummary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [AerosummaryController],
  providers: [AerosummaryService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class AerosummaryModule {}
