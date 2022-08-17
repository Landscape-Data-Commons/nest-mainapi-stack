import { Transform, Type } from 'class-transformer';

export class dtoDataSoilStability {
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  rid: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RecKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  FormType: string;

  @Type(() => Date)
  FormDate: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  LineKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SoilStabSubSurface: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Line: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Position: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Pos: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Veg: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Rating: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Hydro: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Notes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  source: string;

  @Type(() => Date)
  DateLoadedInDb: Date;
}
