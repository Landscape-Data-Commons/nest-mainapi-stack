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

import { ConfigModule } from '@nestjs/config';

import { AerosummaryModule } from './aerosummary/aerosummary.module';

// import { CognitoAuthModule } from "@nestjs-cognito/auth";
import { TokenService } from './token/token.service';
import { PrismahelperService } from './prismahelper/prismahelper.service';

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
    ConfigModule.forRoot(),
    AerosummaryModule,
    // CognitoAuthModule.register({
    //   jwtVerifier: {
    //     userPoolId: "us-west-1_FgaW15JOh",
    //     clientId: "3ocfhcl3smtnnu6m0qkne8v8tg",
    //     tokenUse: "id",
    //   }
    // })
  ],
  controllers: [AppController],
  providers: [AppService, TokenService, PrismahelperService],
})
export class AppModule {}
