import { Module } from '@nestjs/common';
import { DatalpiService } from './datalpi.service';
import { DatalpiController } from './datalpi.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DatalpiController],
  providers: [DatalpiService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DatalpiModule {}
