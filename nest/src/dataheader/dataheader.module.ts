import { Module } from '@nestjs/common';
import { DataheaderService } from './dataheader.service';
import { DataheaderController } from './dataheader.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DataheaderController],
  providers: [DataheaderService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DataheaderModule {}
