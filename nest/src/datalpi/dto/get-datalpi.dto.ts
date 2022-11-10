import { Exclude, Transform, Type } from 'class-transformer';

export class dtoDataLPI {
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
  LineKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RecKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  layer: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  code: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  chckbox: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ShrubShape: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  FormType: string;

  @Type(() => Date)
  FormDate: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Direction: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Measure: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  LineLengthAmount: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SpacingIntervalAmount: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpacingType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ShowCheckbox: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  CheckboxLabel: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PointLoc: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PointNbr: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  source: string;

  @Type(() => Date)
  DateLoadedInDb: Date;
}