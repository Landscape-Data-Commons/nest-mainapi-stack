import { Module } from '@nestjs/common';
import { DatadustdepositionService } from './datadustdeposition.service';
import { DatadustdepositionController } from './datadustdeposition.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';

@Module({
  controllers: [DatadustdepositionController],
  providers: [DatadustdepositionService, TokenService],
  imports: [PrismaModule],
})
export class DatadustdepositionModule {}
