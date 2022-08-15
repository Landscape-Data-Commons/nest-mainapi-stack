import { Module } from '@nestjs/common';
import { DatasoilstabilityService } from './datasoilstability.service';
import { DatasoilstabilityController } from './datasoilstability.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DatasoilstabilityController],
  providers: [DatasoilstabilityService],
  imports: [PrismaModule]
})
export class DatasoilstabilityModule {}
