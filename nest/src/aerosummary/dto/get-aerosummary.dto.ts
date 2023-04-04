import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Exclude, Transform, Type } from 'class-transformer';

export class dtoAerosummary {
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

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  horizontal_flux_total_LPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  horizontal_flux_total_UPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  horizontal_flux_total_MD : number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  horizontal_flux_total_MN : number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  horizontal_flux_total_STD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  vertical_flux_LPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  vertical_flux_UPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  vertical_flux_MD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  vertical_flux_MN: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  vertical_flux_STD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM1_LPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM1_UPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM1_MD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM1_MN: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM1_STD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM2_5_LPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM2_5_UPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM2_5_MD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM2_5_MN: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM2_5_STD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM10_LPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM10_UPI: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM10_MD: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM10_MN: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PM10_STD: number;
}
