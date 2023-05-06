import { Module } from '@nestjs/common';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';
import { DataspeciesinventoryController } from './dataspeciesinventory.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DataspeciesinventoryController],
  providers: [DataspeciesinventoryService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DataspeciesinventoryModule {}
