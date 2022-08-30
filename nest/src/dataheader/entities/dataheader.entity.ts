import { dataHeader } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DataheaderEnt implements dataHeader {
  // each property should have description, range of values etc. 
  @ApiProperty({
    type: String,
    required: false,
    description: 'Unique identifier for each plot-visit.',
  })
  PrimaryKey: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Code denoting original database information about the project.',
  })
  DBKey: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Unique identifier of the broader project under which data were collected.',
  })
  ProjectKey: string;

  @ApiProperty({
    type: Date,
    required: false,
    // example: '2021-08-04',
    description: 'The date that data were collected at the plot.',
  })
  DateVisited: Date;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'The latitude of the plot location in NAD83 datum.',
  })
  Latitude_NAD83: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'The longitude of the plot location in NAD83 datum.',
  })
  Longitude_NAD83: number;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Coordinate type, Field (actual) or Target (GPS) location for plot.',
  })
  LocationType: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Unique ID referring to the ecological site, defined by NRCS as \"a distinctive kind of land with specific characteristics that differs from other kinds of land in its ability to produce a distinctive kind and amount of vegetation.\" ID\'s are from the or the Ecological Dynamics Interpretive Tool (EDIT) (https://edit.jornada.nmsu.edu/).',
  })
  EcologicalSiteID: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'Percent of plot covered by Ecological Site.',
  })
  PercentCoveredByEcoSite: number;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Identifier to project species list.',
  })
  SpeciesKey: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Name for each location or \"plot\" where data are collected, as assigned by the data collector. Formats vary. Duplicate Plot ID\'s may exist among different Sites, Projects, or Years but not within the same Site, Project, and Year. ',
  })
  PlotID: string;

  @ApiProperty({
    type: Date,
    required: false,
    // example: '2021-08-04',
    description: 'Date that the data were uploaded into Landscape Data Commons (YYYY-MM-DD).',
  })
  DateLoadedInDb: Date;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Geometry of object.',
  })
  wkb_geometry: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Source data format. Required for use of terradactyl',
  })
  source: string;
}
