import { dataLPI } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DatalpiEnt implements dataLPI {
  rid: number;
  PrimaryKey: string;
  DBKey: string;
  ProjectKey: string;
  LineKey: string;
  RecKey: string;
  layer: string;
  code: string;
  chckbox: string;
  ShrubShape: string;
  FormType: string;
  FormDate: Date;
  Direction: string;
  Measure: number;
  LineLengthAmount: number;
  SpacingIntervalAmount: number;
  SpacingType: string;
  ShowCheckbox: string;
  CheckboxLabel: string;
  PointLoc: number;
  PointNbr: number;
  source: string;
  DateLoadedInDb: Date;
}
