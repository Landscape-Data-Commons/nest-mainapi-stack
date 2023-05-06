import { Module } from '@nestjs/common';
import { GeospeciesService } from './geospecies.service';
import { GeospeciesController } from './geospecies.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TokenService } from 'src/token/token.service';
import { PrismahelperService } from 'src/prismahelper/prismahelper.service';

@Module({
  controllers: [GeospeciesController],
  providers: [GeospeciesService, TokenService, PrismahelperService],
  imports: [PrismaModule],
})
export class GeospeciesModule {}
