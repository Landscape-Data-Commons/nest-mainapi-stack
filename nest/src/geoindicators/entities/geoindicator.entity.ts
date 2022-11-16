import { geoIndicators, Prisma } from '@prisma/client';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class GeoindicatorEnt implements geoIndicators {

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
  DateVisited: Date;

  @ApiProperty()
  EcologicalSiteId: string;

  @ApiProperty()
  PercentCoveredByEcoSite: number;

  @ApiProperty({ type: Number })
  Latitude_NAD83: Prisma.Decimal;

  @ApiProperty({ type: Number })
  Longitude_NAD83: Prisma.Decimal;

  @ApiProperty()
  LocationStatus: string;

  @ApiProperty()
  LocationType: string;

  @ApiProperty()
  Latitude_NAD83_Actual: number;

  @ApiProperty()
  Longitude_NAD83_Actual: number;

  @ApiProperty()
  BareSoilCover: number;

  @ApiProperty()
  TotalFoliarCover: number;

  @ApiProperty()
  AH_AnnGrassCover: number;

  @ApiProperty()
  AH_ForbCover: number;

  @ApiProperty()
  AH_GrassCover: number;

  @ApiProperty()
  AH_PerenForbCover: number;

  @ApiProperty()
  AH_PerenForbGrassCover: number;

  @ApiProperty()
  AH_PerenGrassCover: number;

  @ApiProperty()
  AH_ShrubCover: number;

  @ApiProperty()
  FH_CyanobacteriaCover: number;

  @ApiProperty()
  FH_DepSoilCover: number;

  @ApiProperty()
  FH_DuffCover: number;

  @ApiProperty()
  FH_EmbLitterCover: number;

  @ApiProperty()
  FH_HerbLitterCover: number;

  @ApiProperty()
  FH_LichenCover: number;

  @ApiProperty()
  FH_MossCover: number;

  @ApiProperty()
  FH_RockCover: number;

  @ApiProperty()
  FH_TotalLitterCover: number;

  @ApiProperty()
  FH_VagrLichenCover: number;

  @ApiProperty()
  FH_WaterCover: number;

  @ApiProperty()
  FH_WoodyLitterCover: number;

  @ApiProperty()
  GapCover_101_200: number;

  @ApiProperty()
  GapCover_200_plus: number;

  @ApiProperty()
  GapCover_25_50: number;

  @ApiProperty()
  GapCover_25_plus: number;

  @ApiProperty()
  GapCover_51_100: number;

  @ApiProperty()
  Hgt_Forb_Avg: number;

  @ApiProperty()
  Hgt_Grass_Avg: number;

  @ApiProperty()
  Hgt_Herbaceous_Avg: number;

  @ApiProperty()
  Hgt_PerenForb_Avg: number;

  @ApiProperty()
  Hgt_PerenForbGrass_Avg: number;

  @ApiProperty()
  Hgt_PerenGrass_Avg: number;

  @ApiProperty()
  Hgt_Woody_Avg: number;

  @ApiProperty()
  RH_AnnualProd: string;

  @ApiProperty()
  RH_BareGround: string;

  @ApiProperty()
  RH_BioticIntegrity: string;

  @ApiProperty()
  RH_CommentsBI: string;

  @ApiProperty()
  RH_CommentsHF: string;

  @ApiProperty()
  RH_CommentsSS: string;

  @ApiProperty()
  RH_Compaction: string;

  @ApiProperty()
  RH_DeadDyingPlantParts: string;

  @ApiProperty()
  RH_FuncSructGroup: string;

  @ApiProperty()
  RH_Gullies: string;

  @ApiProperty()
  RH_HydrologicFunction: string;

  @ApiProperty()
  RH_InvasivePlants: string;

  @ApiProperty()
  RH_LitterAmount: string;

  @ApiProperty()
  RH_LitterMovement: string;

  @ApiProperty()
  RH_PedestalsTerracettes: string;

  @ApiProperty()
  RH_PlantCommunityComp: string;

  @ApiProperty()
  RH_ReprodCapabilityPeren: string;

  @ApiProperty()
  RH_Rills: string;

  @ApiProperty()
  RH_SoilSiteStability: string;

  @ApiProperty()
  RH_SoilSurfLossDeg: string;

  @ApiProperty()
  RH_SoilSurfResisErosion: string;

  @ApiProperty()
  RH_WaterFlowPatterns: string;

  @ApiProperty()
  RH_WindScouredAreas: string;

  @ApiProperty()
  SoilStability_All: number;

  @ApiProperty()
  SoilStability_Protected: number;

  @ApiProperty()
  SoilStability_Unprotected: number;

  @ApiProperty()
  DateLoadedInDb: Date;

  @ApiProperty()
  mlra_name: string;

  @ApiProperty()
  mlrarsym: string;

  @ApiProperty()
  na_l1name: string;

  @ApiProperty()
  na_l2name: string;

  @ApiProperty()
  us_l3name: string;

  @ApiProperty()
  us_l4name: string;

  @ApiProperty()
  State: string;

  @ApiProperty()
  wkb_geometry: string;

  @ApiProperty()
  modis_landcover: string;
}
