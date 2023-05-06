import { Module } from '@nestjs/common';
import { DataheightService } from './dataheight.service';
import { DataheightController } from './dataheight.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [DataheightController],
  providers: [DataheightService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class DataheightModule {}
