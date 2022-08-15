import { Module } from '@nestjs/common';
import { GeospeciesService } from './geospecies.service';
import { GeospeciesController } from './geospecies.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GeospeciesController],
  providers: [GeospeciesService],
  imports: [PrismaModule],
})
export class GeospeciesModule {}
