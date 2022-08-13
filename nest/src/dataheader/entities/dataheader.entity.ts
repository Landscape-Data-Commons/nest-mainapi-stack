import { dataHeader } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DataheaderEnt implements dataHeader {
  // each property should have description, range of values etc. 
  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  DateVisited: Date;

  @ApiProperty()
  Latitude_NAD83: number;

  @ApiProperty()
  Longitude_NAD83: number;

  @ApiProperty()
  LocationType: string;

  @ApiProperty()
  EcologicalSiteID: string;

  @ApiProperty()
  PercentCoveredByEcoSite: number;

  @ApiProperty()
  SpeciesKey: string;

  @ApiProperty()
  PlotID: string;

  @ApiProperty()
  DateLoadedInDb: Date;

  @ApiProperty()
  wkb_geometry: string;

  @ApiProperty()
  source: string;
}

