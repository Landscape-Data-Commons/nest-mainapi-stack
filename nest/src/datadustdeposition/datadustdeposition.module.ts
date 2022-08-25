import { Module } from '@nestjs/common';
import { DatadustdepositionService } from './datadustdeposition.service';
import { DatadustdepositionController } from './datadustdeposition.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DatadustdepositionController],
  providers: [DatadustdepositionService],
  imports: [PrismaModule],
})
export class DatadustdepositionModule {}
