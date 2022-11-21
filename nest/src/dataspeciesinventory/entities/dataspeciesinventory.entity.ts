import { dataSpeciesInventory } from '@prisma/client';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class DataspeciesinventoryEnt implements dataSpeciesInventory {
  @ApiHideProperty()
  take?: number;

  @ApiHideProperty()
  cursor?: number;

  @ApiProperty()
  rid: number;

  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  Species: string;

  @ApiProperty()
  DENSITY: number;

  @ApiProperty()
  LineKey: string;

  @ApiProperty()
  RecKey: string;

  @ApiProperty()
  FormType: string;

  @ApiProperty()
  FormDate: Date;

  @ApiProperty()
  SpecRichMethod: number;

  @ApiProperty()
  SpecRichMeasure: number;

  @ApiProperty()
  SpecRichNbrSubPlots: number;

  @ApiProperty()
  SpecRich1Container: string;

  @ApiProperty()
  SpecRich1Shape: number;

  @ApiProperty()
  SpecRich1Dim1: number;

  @ApiProperty()
  SpecRich1Dim2: number;

  @ApiProperty()
  SpecRich1Area: number;

  @ApiProperty()
  SpecRich2Container: string;

  @ApiProperty()
  SpecRich2Shape: number;

  @ApiProperty()
  SpecRich2Dim1: number;

  @ApiProperty()
  SpecRich2Dim2: number;

  @ApiProperty()
  SpecRich2Area: number;

  @ApiProperty()
  SpecRich3Container: string;

  @ApiProperty()
  SpecRich3Shape: number;

  @ApiProperty()
  SpecRich3Dim1: number;

  @ApiProperty()
  SpecRich3Dim2: number;

  @ApiProperty()
  SpecRich3Area: number;

  @ApiProperty()
  SpecRich4Container: string;

  @ApiProperty()
  SpecRich4Shape: number;

  @ApiProperty()
  SpecRich4Dim1: number;

  @ApiProperty()
  SpecRich4Dim2: number;

  @ApiProperty()
  SpecRich4Area: number;

  @ApiProperty()
  SpecRich5Container: string;

  @ApiProperty()
  SpecRich5Shape: number;

  @ApiProperty()
  SpecRich5Dim1: number;

  @ApiProperty()
  SpecRich5Dim2: number;

  @ApiProperty()
  SpecRich5Area: number;

  @ApiProperty()
  SpecRich6Container: string;

  @ApiProperty()
  SpecRich6Shape: number;

  @ApiProperty()
  SpecRich6Dim1: number;

  @ApiProperty()
  SpecRich6Dim2: number;

  @ApiProperty()
  SpecRich6Area: number;

  @ApiProperty()
  Notes: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  DateLoadedInDb: Date;

  @ApiProperty()
  DateVisited: Date;
}
