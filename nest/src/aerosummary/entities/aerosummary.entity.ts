import { Prisma } from '@prisma/client';
import { aero_summary as AeroSummary } from '.prisma/client_aero';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class AerosummaryEnt implements AeroSummary {

  @ApiProperty()
  rid: number;
  
  @ApiHideProperty()
  take?: number;

  @ApiHideProperty()
  cursor?: number;

  @ApiProperty()
  PrimaryKey: string;
  @ApiProperty()
  horizontal_flux_total_LPI: number;

  @ApiProperty()
  horizontal_flux_total_UPI: number;
  
  @ApiProperty()
  horizontal_flux_total_MD: number;
  
  @ApiProperty()
  horizontal_flux_total_MN: number;
  
  @ApiProperty()
  horizontal_flux_total_STD: number;
  
  @ApiProperty()
  vertical_flux_LPI: number;
  
  @ApiProperty()
  vertical_flux_UPI: number;
  
  @ApiProperty()
  vertical_flux_MD: number;
  
  @ApiProperty()
  vertical_flux_MN: number;
  
  @ApiProperty()
  vertical_flux_STD: number;
  
  @ApiProperty()
  PM1_LPI: number;
  
  @ApiProperty()
  PM1_UPI: number;
  
  @ApiProperty()
  PM1_MD: number;
  
  @ApiProperty()
  PM1_MN: number;
  
  @ApiProperty()
  PM1_STD: number;
  
  @ApiProperty()
  PM2_5_LPI: number;
  
  @ApiProperty()
  PM2_5_UPI: number;
  
  @ApiProperty()
  PM2_5_MD: number;
  
  @ApiProperty()
  PM2_5_MN: number;
  
  @ApiProperty()
  PM2_5_STD: number;
  
  @ApiProperty()
  PM10_LPI: number;
  
  @ApiProperty()
  PM10_UPI: number;
  
  @ApiProperty()
  PM10_MD: number;
  
  @ApiProperty()
  PM10_MN: number;
  
  @ApiProperty()
  PM10_STD: number;
}