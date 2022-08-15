import { Module } from '@nestjs/common';
import { GeoindicatorsService } from './geoindicators.service';
import { GeoindicatorsController } from './geoindicators.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GeoindicatorsController],
  providers: [GeoindicatorsService],
  imports: [PrismaModule]
})
export class GeoindicatorsModule {}
