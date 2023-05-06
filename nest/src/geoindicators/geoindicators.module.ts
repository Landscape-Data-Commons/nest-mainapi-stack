import { Module } from '@nestjs/common';
import { GeoindicatorsService } from './geoindicators.service';
import { GeoindicatorsController } from './geoindicators.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [GeoindicatorsController],
  providers: [GeoindicatorsService, TokenService, PrismahelperService],
  imports: [PrismaModule]
})
export class GeoindicatorsModule {}
