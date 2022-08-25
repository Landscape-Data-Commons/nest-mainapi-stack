import { Module } from '@nestjs/common';
import { DatahorizontalfluxService } from './datahorizontalflux.service';
import { DatahorizontalfluxController } from './datahorizontalflux.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DatahorizontalfluxController],
  providers: [DatahorizontalfluxService],
  imports: [PrismaModule],
})
export class DatahorizontalfluxModule {}
