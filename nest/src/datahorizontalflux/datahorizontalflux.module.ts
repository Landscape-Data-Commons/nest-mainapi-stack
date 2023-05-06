import { Module } from '@nestjs/common';
import { DatahorizontalfluxService } from './datahorizontalflux.service';
import { DatahorizontalfluxController } from './datahorizontalflux.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DatahorizontalfluxController],
  providers: [DatahorizontalfluxService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DatahorizontalfluxModule {}
