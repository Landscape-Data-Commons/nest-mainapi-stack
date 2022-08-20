import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Transform, Type } from 'class-transformer';

export class dtoGeoIndicators {
  
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  rid: number;
  

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Type(() => Date)
  DateVisited: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  EcologicalSiteId: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  PercentCoveredByEcoSite: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Latitude_NAD83: Prisma.Decimal;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Longitude_NAD8: Prisma.Decimal;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  LocationStatus: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  LocationType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Latitude_NAD83_Actual: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Longitude_NAD83_Actual: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  BareSoilCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  TotalFoliarCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_AnnGrassCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_ForbCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_GrassCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_PerenForbCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_PerenForbGrassCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_PerenGrassCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  AH_ShrubCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_CyanobacteriaCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_DepSoilCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_DuffCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_EmbLitterCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_HerbLitterCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_LichenCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_MossCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_RockCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_TotalLitterCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_VagrLichenCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_WaterCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  FH_WoodyLitterCover: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  GapCover_101_200: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  GapCover_200_plus: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  GapCover_25_50: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  GapCover_25_plus: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  GapCover_51_100: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Forb_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Grass_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Herbaceous_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_PerenForb_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_PerenForbGrass_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_PerenGrass_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Hgt_Woody_Avg: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_AnnualProd: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_BareGround: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_BioticIntegrity: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_CommentsBI: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_CommentsHF: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_CommentsSS: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_Compaction: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_DeadDyingPlantParts: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_FuncSructGroup: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_Gullies: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_HydrologicFunction: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_InvasivePlants: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_LitterAmount: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_LitterMovement: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_PedestalsTerracettes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_PlantCommunityComp: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_ReprodCapabilityPeren: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_Rills: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_SoilSiteStability: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_SoilSurfLossDeg: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_SoilSurfResisErosion: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_WaterFlowPatterns: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RH_WindScouredAreas: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SoilStability_All: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SoilStability_Protected: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SoilStability_Unprotected: number;

  @Type(() => Date)
  DateLoadedInDb: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  mlra_name: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  mlrarsym: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  na_l1name: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  na_l2name: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  us_l3name: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  us_l4name: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  State: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  wkb_geometry: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  modis_landcover: string;
}