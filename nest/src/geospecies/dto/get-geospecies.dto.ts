import { Exclude, Transform, Type } from 'class-transformer';

export class dtoGeoSpecies {
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
  AH_SpeciesCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_SpeciesCover_n: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Species_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Species_Avg_n: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Duration: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  GrowthHabit: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  GrowthHabitSub: string;
  
  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SpeciesKey: string;
  
  @Type(() => Date)
  DateLoadedInDb: Date;
}