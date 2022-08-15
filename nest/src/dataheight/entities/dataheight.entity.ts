import { dataHeight } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DataheightEnt implements dataHeight {
  @ApiProperty()
  rid: number;

  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  PointLoc: number;

  @ApiProperty()
  PointNbr: number;

  @ApiProperty()
  RecKey: string;

  @ApiProperty()
  Height: number;

  @ApiProperty()
  Species: string;

  @ApiProperty()
  Chkbox: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  GrowthHabit_measured: string;

  @ApiProperty()
  LineKey: string;

  @ApiProperty()
  DateModified: Date;

  @ApiProperty()
  FormType: string;

  @ApiProperty()
  FormDate: Date;

  @ApiProperty()
  source: string;

  @ApiProperty()
  Direction: string;

  @ApiProperty()
  Measure: number;

  @ApiProperty()
  LineLengthAmount: bigint;

  @ApiProperty()
  SpacingIntervalAmount: string;

  @ApiProperty()
  SpacingType: string;

  @ApiProperty()
  HeightOption: string;

  @ApiProperty()
  HeightUOM: string;

  @ApiProperty()
  ShowCheckbox: string;

  @ApiProperty()
  CheckboxLabel: string;

  @ApiProperty()
  DateLoadedInDb: Date;
}
