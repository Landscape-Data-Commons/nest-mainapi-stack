import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class dtoDataDustDeposition {
  rid: number;
  StackID: string;
  ProjectKey: string;
  DateEstablished: Date;
  Location: string;
  Notes: string;
  ItemType: string;
  trapOpeningArea: number;
  GPSCoordSys: string;
  Datum: string;
  Zone: string;
  Easting: number;
  Northing: number;
  Longitude: number;
  Latitude: number;
  RecKey: string;
  collectDate: Date;
  Collector: string;
  labTech: string;
  breakerNbr: string;
  emptyWeight: number;
  recordedWeight: number;
  sedimentWeight: number;
  daysExposed: number;
  sedimentGprDay: number;
  sedimentArchived: string;
  sedimentGperDayByInlet: number;
  SeqNo: number;
  SampleCompromised: string;
  PrimaryKey: string;
  DateLoadedInDB: Date;
  DBKey: string;
}
