import { Module } from '@nestjs/common';
import { DatagapService } from './datagap.service';
import { DatagapController } from './datagap.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DatagapController],
  providers: [DatagapService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DatagapModule {}
