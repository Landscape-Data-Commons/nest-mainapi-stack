import { Exclude, Transform, Type } from 'class-transformer';

export class dtoDataSpeciesInventory{
  @Exclude()
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public take?: number;

  @Exclude()
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public cursor?: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  rid: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;
  
  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Species: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  DENSITY: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  LineKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RecKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  FormType: string;

  @Type(() => Date)
  FormDate: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRichMethod: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRichMeasure: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRichNbrSubPlots: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich1Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich1Shape: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich1Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich1Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich1Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich2Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich2Shape: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich2Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich2Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich2Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich3Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich3Shape: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich3Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich3Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich3Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich4Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich4Shape: number;
  
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich4Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich4Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich4Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich5Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich5Shape: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich5Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich5Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich5Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpecRich6Container: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich6Shape: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich6Dim1: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich6Dim2: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpecRich6Area: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Notes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  source: string;

  @Type(() => Date)
  DateLoadedInDb: Date;
}