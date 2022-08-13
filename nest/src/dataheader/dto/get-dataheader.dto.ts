import { Transform, Type } from 'class-transformer';

export class dtoDataHeader {
  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Type(() => Date)
  DateVisited: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Latitude_NAD83: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Longitude_NAD83: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  LocationType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  EcologicalSiteID: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PercentCoveredByEcoSite: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpeciesKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PlotID: string;

  @Type(() => Date)
  DateLoadedInDb: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  wkb_geometry: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  source: string;
}
