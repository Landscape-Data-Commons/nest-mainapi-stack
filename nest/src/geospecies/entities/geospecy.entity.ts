import { geoSpecies } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class GeospeciesEnt implements geoSpecies {
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
  AH_SpeciesCover: number;

  @ApiProperty()
  AH_SpeciesCover_n: number;

  @ApiProperty()
  Hgt_Species_Avg: number;

  @ApiProperty()
  Hgt_Species_Avg_n: number;

  @ApiProperty()
  Duration: string;

  @ApiProperty()
  GrowthHabit: string;

  @ApiProperty()
  GrowthHabitSub: string;

  @ApiProperty()
  SpeciesKey: string;

  @ApiProperty()
  DateLoadedInDb: Date;
}
