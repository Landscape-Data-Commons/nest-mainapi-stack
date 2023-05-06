import { Module } from '@nestjs/common';
import { DatasoilstabilityService } from './datasoilstability.service';
import { DatasoilstabilityController } from './datasoilstability.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DatasoilstabilityController],
  providers: [DatasoilstabilityService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DatasoilstabilityModule {}
