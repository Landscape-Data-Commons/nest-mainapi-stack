import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatagapModule } from './datagap/datagap.module';
import { PrismaModule } from './prisma/prisma.module';
import { DataheaderModule } from './dataheader/dataheader.module';
import { DataheightModule } from './dataheight/dataheight.module';
import { DatalpiModule } from './datalpi/datalpi.module';
import { DataspeciesinventoryModule } from './dataspeciesinventory/dataspeciesinventory.module';
import { DatasoilstabilityModule } from './datasoilstability/datasoilstability.module';
import { GeospeciesModule } from './geospecies/geospecies.module';
import { GeoindicatorsModule } from './geoindicators/geoindicators.module';
import { DatadustdepositionModule } from './datadustdeposition/datadustdeposition.module';
import { DatahorizontalfluxModule } from './datahorizontalflux/datahorizontalflux.module';
import { TblSchemaModule } from './tbl-schema/tbl-schema.module';

@Module({
  imports: [
    DatagapModule,
    PrismaModule,
    DataheaderModule,
    DataheightModule,
    DatalpiModule,
    DatasoilstabilityModule,
    DataspeciesinventoryModule,
    GeoindicatorsModule,
    GeospeciesModule,
    DatadustdepositionModule,
    DatahorizontalfluxModule,
    TblSchemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
