import { Module } from '@nestjs/common';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';
import { DataspeciesinventoryController } from './dataspeciesinventory.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DataspeciesinventoryController],
  providers: [DataspeciesinventoryService],
  imports: [PrismaModule]
})
export class DataspeciesinventoryModule {}
