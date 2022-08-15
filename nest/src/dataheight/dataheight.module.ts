import { Module } from '@nestjs/common';
import { DataheightService } from './dataheight.service';
import { DataheightController } from './dataheight.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DataheightController],
  providers: [DataheightService],
  imports: [PrismaModule]
})
export class DataheightModule {}
