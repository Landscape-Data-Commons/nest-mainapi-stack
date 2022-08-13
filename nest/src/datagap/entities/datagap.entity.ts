import { dataGap } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DatagapEnt implements dataGap {

  @ApiProperty()
  rid: number;

  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  RecType: string;

  @ApiProperty()
  SeqNo: bigint;

  @ApiProperty()
  GapStart: number;

  @ApiProperty()
  GapEnd: number;

  @ApiProperty()
  Gap: number;

  @ApiProperty()
  LineKey: string;

  @ApiProperty()
  RecKey: string;

  @ApiProperty()
  FormDate: Date;

  @ApiProperty()
  DateModified: Date;

  @ApiProperty()
  FormType: string;

  @ApiProperty()
  Direction: string;

  @ApiProperty()
  Measure: number;

  @ApiProperty()
  LineLengthAmount: number;

  @ApiProperty()
  GapMin: number;

  @ApiProperty()
  GapData: number;

  @ApiProperty()
  PerennialsCanopy: string;

  @ApiProperty()
  AnnualGrassesCanopy: string;

  @ApiProperty()
  AnnualForbsCanopy: string;

  @ApiProperty()
  OtherCanopy: string;

  @ApiProperty()
  Notes: string;

  @ApiProperty()
  NoCanopyGaps: number;

  @ApiProperty()
  NoBasalGaps: number;

  @ApiProperty()
  DateLoadedInDb: Date;

  @ApiProperty()
  PerennialsBasal: string;

  @ApiProperty()
  AnnualGrassesBasal: string;

  @ApiProperty()
  AnnualForbsBasal: string;

  @ApiProperty()
  OtherBasal: string;

  @ApiProperty()
  source: string;
}
