import { dataSoilStability } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DatasoilstabilityEnt implements dataSoilStability {
  @ApiProperty()
  rid: number;

  @ApiProperty()
  PrimaryKey: string;

  @ApiProperty()
  DBKey: string;

  @ApiProperty()
  ProjectKey: string;

  @ApiProperty()
  RecKey: string;

  @ApiProperty()
  FormType: string;

  @ApiProperty()
  FormDate: Date;

  @ApiProperty()
  LineKey: string;

  @ApiProperty()
  SoilStabSubSurface: number;

  @ApiProperty()
  Line: string;

  @ApiProperty()
  Position: number;

  @ApiProperty()
  Pos: string;

  @ApiProperty()
  Veg: string;

  @ApiProperty()
  Rating: number;

  @ApiProperty()
  Hydro: string;

  @ApiProperty()
  Notes: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  DateLoadedInDb: Date;
}
