import { dataLPI } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DatalpiEnt implements dataLPI {
  @ApiProperty()
  rid: number;

  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  LineKey: string;

  @ApiProperty()
  RecKey: string;

  @ApiProperty()
  layer: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  chckbox: string;

  @ApiProperty()
  ShrubShape: string;

  @ApiProperty()
  FormType: string;

  @ApiProperty()
  FormDate: Date;

  @ApiProperty()
  Direction: string;

  @ApiProperty()
  Measure: number;

  @ApiProperty()
  LineLengthAmount: number;

  @ApiProperty()
  SpacingIntervalAmount: number;

  @ApiProperty()
  SpacingType: string;

  @ApiProperty()
  ShowCheckbox: string;

  @ApiProperty()
  CheckboxLabel: string;

  @ApiProperty()
  PointLoc: number;

  @ApiProperty()
  PointNbr: number;

  @ApiProperty()
  source: string;

  @ApiProperty()
  DateLoadedInDb: Date;
}
