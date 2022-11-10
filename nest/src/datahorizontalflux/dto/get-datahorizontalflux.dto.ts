import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';

export class dtoDataHorizontalFlux {
  @Exclude()
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public take?: number;

  @Exclude()
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public cursor?: number;
  
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  rid: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  BoxID: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  StackID: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Height: number;

  @Type(() => Date)
  DateEstablished: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Description: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  openingSize: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  processMethod: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  ovenTemp: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  BoxType: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  azimuth: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SamplerType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  InletArea: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Location: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ItemType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  trapOpeningArea: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  GPSCoordSys: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Datum: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Zone: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Easting: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Northing: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Longitude: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Latitude: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RecKey: string;

  @Type(() => Date)
  collectDate: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  beakerNbr: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  emptyWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  recordedWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  daysExposed: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentGperDay: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  sedimentArchived: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Notes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentGperDayByInlet: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SeqNo: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SampleCompromised: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Type(() => Date)
  DateLoadedInDb: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;
}