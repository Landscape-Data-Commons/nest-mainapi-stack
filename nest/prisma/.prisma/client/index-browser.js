
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DataDustDepositionScalarFieldEnum = makeEnum({
  rid: 'rid',
  StackID: 'StackID',
  ProjectKey: 'ProjectKey',
  DateEstablished: 'DateEstablished',
  Location: 'Location',
  Notes: 'Notes',
  ItemType: 'ItemType',
  trapOpeningArea: 'trapOpeningArea',
  GPSCoordSys: 'GPSCoordSys',
  Datum: 'Datum',
  Zone: 'Zone',
  Easting: 'Easting',
  Northing: 'Northing',
  Longitude: 'Longitude',
  Latitude: 'Latitude',
  RecKey: 'RecKey',
  collectDate: 'collectDate',
  breakerNbr: 'breakerNbr',
  emptyWeight: 'emptyWeight',
  recordedWeight: 'recordedWeight',
  sedimentWeight: 'sedimentWeight',
  daysExposed: 'daysExposed',
  sedimentGprDay: 'sedimentGprDay',
  sedimentArchived: 'sedimentArchived',
  sedimentGperDayByInlet: 'sedimentGperDayByInlet',
  SeqNo: 'SeqNo',
  SampleCompromised: 'SampleCompromised',
  PrimaryKey: 'PrimaryKey',
  DateLoadedInDb: 'DateLoadedInDb',
  DBKey: 'DBKey'
});

exports.Prisma.DataGapScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  RecType: 'RecType',
  SeqNo: 'SeqNo',
  GapStart: 'GapStart',
  GapEnd: 'GapEnd',
  Gap: 'Gap',
  LineKey: 'LineKey',
  RecKey: 'RecKey',
  FormDate: 'FormDate',
  DateModified: 'DateModified',
  FormType: 'FormType',
  Direction: 'Direction',
  Measure: 'Measure',
  LineLengthAmount: 'LineLengthAmount',
  GapMin: 'GapMin',
  GapData: 'GapData',
  PerennialsCanopy: 'PerennialsCanopy',
  AnnualGrassesCanopy: 'AnnualGrassesCanopy',
  AnnualForbsCanopy: 'AnnualForbsCanopy',
  OtherCanopy: 'OtherCanopy',
  Notes: 'Notes',
  NoCanopyGaps: 'NoCanopyGaps',
  NoBasalGaps: 'NoBasalGaps',
  DateLoadedInDb: 'DateLoadedInDb',
  PerennialsBasal: 'PerennialsBasal',
  AnnualGrassesBasal: 'AnnualGrassesBasal',
  AnnualForbsBasal: 'AnnualForbsBasal',
  OtherBasal: 'OtherBasal',
  source: 'source',
  DateVisited: 'DateVisited'
});

exports.Prisma.DataHeaderScalarFieldEnum = makeEnum({
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  DateVisited: 'DateVisited',
  Latitude_NAD83: 'Latitude_NAD83',
  Longitude_NAD83: 'Longitude_NAD83',
  LocationType: 'LocationType',
  EcologicalSiteID: 'EcologicalSiteID',
  PercentCoveredByEcoSite: 'PercentCoveredByEcoSite',
  SpeciesKey: 'SpeciesKey',
  PlotID: 'PlotID',
  DateLoadedInDb: 'DateLoadedInDb',
  source: 'source',
  rid: 'rid'
});

exports.Prisma.DataHeightScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  PointLoc: 'PointLoc',
  PointNbr: 'PointNbr',
  RecKey: 'RecKey',
  Height: 'Height',
  Species: 'Species',
  Chkbox: 'Chkbox',
  type: 'type',
  GrowthHabit_measured: 'GrowthHabit_measured',
  LineKey: 'LineKey',
  DateModified: 'DateModified',
  FormType: 'FormType',
  FormDate: 'FormDate',
  source: 'source',
  Direction: 'Direction',
  Measure: 'Measure',
  LineLengthAmount: 'LineLengthAmount',
  SpacingIntervalAmount: 'SpacingIntervalAmount',
  SpacingType: 'SpacingType',
  HeightOption: 'HeightOption',
  HeightUOM: 'HeightUOM',
  ShowCheckbox: 'ShowCheckbox',
  CheckboxLabel: 'CheckboxLabel',
  DateLoadedInDb: 'DateLoadedInDb',
  DateVisited: 'DateVisited'
});

exports.Prisma.DataHorizontalFluxScalarFieldEnum = makeEnum({
  rid: 'rid',
  ProjectKey: 'ProjectKey',
  PrimaryKey: 'PrimaryKey',
  BoxID: 'BoxID',
  StackID: 'StackID',
  Height: 'Height',
  DateEstablished: 'DateEstablished',
  DateVisited: 'DateVisited',
  Description: 'Description',
  openingSize: 'openingSize',
  processMethod: 'processMethod',
  ovenTemp: 'ovenTemp',
  BoxType: 'BoxType',
  azimuth: 'azimuth',
  SamplerType: 'SamplerType',
  InletArea: 'InletArea',
  Location: 'Location',
  ItemType: 'ItemType',
  trapOpeningArea: 'trapOpeningArea',
  GPSCoordSys: 'GPSCoordSys',
  Datum: 'Datum',
  Zone: 'Zone',
  Easting: 'Easting',
  Northing: 'Northing',
  Longitude: 'Longitude',
  Latitude: 'Latitude',
  RecKey: 'RecKey',
  collectDate: 'collectDate',
  beakerNbr: 'beakerNbr',
  emptyWeight: 'emptyWeight',
  recordedWeight: 'recordedWeight',
  sedimentWeight: 'sedimentWeight',
  daysExposed: 'daysExposed',
  sedimentGperDay: 'sedimentGperDay',
  sedimentArchived: 'sedimentArchived',
  Notes: 'Notes',
  sedimentGperDayByInlet: 'sedimentGperDayByInlet',
  SeqNo: 'SeqNo',
  SampleCompromised: 'SampleCompromised',
  DBKey: 'DBKey',
  DateLoadedInDb: 'DateLoadedInDb'
});

exports.Prisma.DataLPIScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  LineKey: 'LineKey',
  RecKey: 'RecKey',
  layer: 'layer',
  code: 'code',
  chckbox: 'chckbox',
  ShrubShape: 'ShrubShape',
  FormType: 'FormType',
  FormDate: 'FormDate',
  Direction: 'Direction',
  Measure: 'Measure',
  LineLengthAmount: 'LineLengthAmount',
  SpacingIntervalAmount: 'SpacingIntervalAmount',
  SpacingType: 'SpacingType',
  ShowCheckbox: 'ShowCheckbox',
  CheckboxLabel: 'CheckboxLabel',
  PointLoc: 'PointLoc',
  PointNbr: 'PointNbr',
  source: 'source',
  DateLoadedInDb: 'DateLoadedInDb',
  DateVisited: 'DateVisited'
});

exports.Prisma.DataSoilStabilityScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  RecKey: 'RecKey',
  FormType: 'FormType',
  FormDate: 'FormDate',
  LineKey: 'LineKey',
  SoilStabSubSurface: 'SoilStabSubSurface',
  Line: 'Line',
  Position: 'Position',
  Pos: 'Pos',
  Veg: 'Veg',
  Rating: 'Rating',
  Hydro: 'Hydro',
  Notes: 'Notes',
  source: 'source',
  DateLoadedInDb: 'DateLoadedInDb',
  DateVisited: 'DateVisited'
});

exports.Prisma.DataSpeciesInventoryScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  Species: 'Species',
  DENSITY: 'DENSITY',
  LineKey: 'LineKey',
  RecKey: 'RecKey',
  FormType: 'FormType',
  FormDate: 'FormDate',
  SpecRichMethod: 'SpecRichMethod',
  SpecRichMeasure: 'SpecRichMeasure',
  SpecRichNbrSubPlots: 'SpecRichNbrSubPlots',
  SpecRich1Container: 'SpecRich1Container',
  SpecRich1Shape: 'SpecRich1Shape',
  SpecRich1Dim1: 'SpecRich1Dim1',
  SpecRich1Dim2: 'SpecRich1Dim2',
  SpecRich1Area: 'SpecRich1Area',
  SpecRich2Container: 'SpecRich2Container',
  SpecRich2Shape: 'SpecRich2Shape',
  SpecRich2Dim1: 'SpecRich2Dim1',
  SpecRich2Dim2: 'SpecRich2Dim2',
  SpecRich2Area: 'SpecRich2Area',
  SpecRich3Container: 'SpecRich3Container',
  SpecRich3Shape: 'SpecRich3Shape',
  SpecRich3Dim1: 'SpecRich3Dim1',
  SpecRich3Dim2: 'SpecRich3Dim2',
  SpecRich3Area: 'SpecRich3Area',
  SpecRich4Container: 'SpecRich4Container',
  SpecRich4Shape: 'SpecRich4Shape',
  SpecRich4Dim1: 'SpecRich4Dim1',
  SpecRich4Dim2: 'SpecRich4Dim2',
  SpecRich4Area: 'SpecRich4Area',
  SpecRich5Container: 'SpecRich5Container',
  SpecRich5Shape: 'SpecRich5Shape',
  SpecRich5Dim1: 'SpecRich5Dim1',
  SpecRich5Dim2: 'SpecRich5Dim2',
  SpecRich5Area: 'SpecRich5Area',
  SpecRich6Container: 'SpecRich6Container',
  SpecRich6Shape: 'SpecRich6Shape',
  SpecRich6Dim1: 'SpecRich6Dim1',
  SpecRich6Dim2: 'SpecRich6Dim2',
  SpecRich6Area: 'SpecRich6Area',
  Notes: 'Notes',
  source: 'source',
  DateLoadedInDb: 'DateLoadedInDb',
  DateVisited: 'DateVisited'
});

exports.Prisma.GeoIndicatorsScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  DateVisited: 'DateVisited',
  EcologicalSiteId: 'EcologicalSiteId',
  PercentCoveredByEcoSite: 'PercentCoveredByEcoSite',
  Latitude_NAD83: 'Latitude_NAD83',
  Longitude_NAD83: 'Longitude_NAD83',
  LocationStatus: 'LocationStatus',
  LocationType: 'LocationType',
  Latitude_NAD83_Actual: 'Latitude_NAD83_Actual',
  Longitude_NAD83_Actual: 'Longitude_NAD83_Actual',
  BareSoilCover: 'BareSoilCover',
  TotalFoliarCover: 'TotalFoliarCover',
  AH_AnnGrassCover: 'AH_AnnGrassCover',
  AH_ForbCover: 'AH_ForbCover',
  AH_GrassCover: 'AH_GrassCover',
  AH_PerenForbCover: 'AH_PerenForbCover',
  AH_PerenForbGrassCover: 'AH_PerenForbGrassCover',
  AH_PerenGrassCover: 'AH_PerenGrassCover',
  AH_ShrubCover: 'AH_ShrubCover',
  FH_CyanobacteriaCover: 'FH_CyanobacteriaCover',
  FH_DepSoilCover: 'FH_DepSoilCover',
  FH_DuffCover: 'FH_DuffCover',
  FH_EmbLitterCover: 'FH_EmbLitterCover',
  FH_HerbLitterCover: 'FH_HerbLitterCover',
  FH_LichenCover: 'FH_LichenCover',
  FH_MossCover: 'FH_MossCover',
  FH_RockCover: 'FH_RockCover',
  FH_TotalLitterCover: 'FH_TotalLitterCover',
  FH_VagrLichenCover: 'FH_VagrLichenCover',
  FH_WaterCover: 'FH_WaterCover',
  FH_WoodyLitterCover: 'FH_WoodyLitterCover',
  GapCover_101_200: 'GapCover_101_200',
  GapCover_200_plus: 'GapCover_200_plus',
  GapCover_25_50: 'GapCover_25_50',
  GapCover_25_plus: 'GapCover_25_plus',
  GapCover_51_100: 'GapCover_51_100',
  Hgt_Forb_Avg: 'Hgt_Forb_Avg',
  Hgt_Grass_Avg: 'Hgt_Grass_Avg',
  Hgt_Herbaceous_Avg: 'Hgt_Herbaceous_Avg',
  Hgt_PerenForb_Avg: 'Hgt_PerenForb_Avg',
  Hgt_PerenForbGrass_Avg: 'Hgt_PerenForbGrass_Avg',
  Hgt_PerenGrass_Avg: 'Hgt_PerenGrass_Avg',
  Hgt_Woody_Avg: 'Hgt_Woody_Avg',
  RH_AnnualProd: 'RH_AnnualProd',
  RH_BareGround: 'RH_BareGround',
  RH_BioticIntegrity: 'RH_BioticIntegrity',
  RH_CommentsBI: 'RH_CommentsBI',
  RH_CommentsHF: 'RH_CommentsHF',
  RH_CommentsSS: 'RH_CommentsSS',
  RH_Compaction: 'RH_Compaction',
  RH_DeadDyingPlantParts: 'RH_DeadDyingPlantParts',
  RH_FuncSructGroup: 'RH_FuncSructGroup',
  RH_Gullies: 'RH_Gullies',
  RH_HydrologicFunction: 'RH_HydrologicFunction',
  RH_InvasivePlants: 'RH_InvasivePlants',
  RH_LitterAmount: 'RH_LitterAmount',
  RH_LitterMovement: 'RH_LitterMovement',
  RH_PedestalsTerracettes: 'RH_PedestalsTerracettes',
  RH_PlantCommunityComp: 'RH_PlantCommunityComp',
  RH_ReprodCapabilityPeren: 'RH_ReprodCapabilityPeren',
  RH_Rills: 'RH_Rills',
  RH_SoilSiteStability: 'RH_SoilSiteStability',
  RH_SoilSurfLossDeg: 'RH_SoilSurfLossDeg',
  RH_SoilSurfResisErosion: 'RH_SoilSurfResisErosion',
  RH_WaterFlowPatterns: 'RH_WaterFlowPatterns',
  RH_WindScouredAreas: 'RH_WindScouredAreas',
  SoilStability_All: 'SoilStability_All',
  SoilStability_Protected: 'SoilStability_Protected',
  SoilStability_Unprotected: 'SoilStability_Unprotected',
  DateLoadedInDb: 'DateLoadedInDb',
  mlra_name: 'mlra_name',
  mlrarsym: 'mlrarsym',
  na_l1name: 'na_l1name',
  na_l2name: 'na_l2name',
  us_l3name: 'us_l3name',
  us_l4name: 'us_l4name',
  State: 'State',
  modis_landcover: 'modis_landcover'
});

exports.Prisma.GeoIndicators_viewScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  DateVisited: 'DateVisited',
  EcologicalSiteId: 'EcologicalSiteId',
  PercentCoveredByEcoSite: 'PercentCoveredByEcoSite',
  Latitude_NAD83: 'Latitude_NAD83',
  Longitude_NAD83: 'Longitude_NAD83',
  LocationStatus: 'LocationStatus',
  LocationType: 'LocationType',
  Latitude_NAD83_Actual: 'Latitude_NAD83_Actual',
  Longitude_NAD83_Actual: 'Longitude_NAD83_Actual',
  BareSoilCover: 'BareSoilCover',
  TotalFoliarCover: 'TotalFoliarCover',
  AH_AnnGrassCover: 'AH_AnnGrassCover',
  AH_ForbCover: 'AH_ForbCover',
  AH_GrassCover: 'AH_GrassCover',
  AH_PerenForbCover: 'AH_PerenForbCover',
  AH_PerenForbGrassCover: 'AH_PerenForbGrassCover',
  AH_PerenGrassCover: 'AH_PerenGrassCover',
  AH_ShrubCover: 'AH_ShrubCover',
  FH_CyanobacteriaCover: 'FH_CyanobacteriaCover',
  FH_DepSoilCover: 'FH_DepSoilCover',
  FH_DuffCover: 'FH_DuffCover',
  FH_EmbLitterCover: 'FH_EmbLitterCover',
  FH_HerbLitterCover: 'FH_HerbLitterCover',
  FH_LichenCover: 'FH_LichenCover',
  FH_MossCover: 'FH_MossCover',
  FH_RockCover: 'FH_RockCover',
  FH_TotalLitterCover: 'FH_TotalLitterCover',
  FH_VagrLichenCover: 'FH_VagrLichenCover',
  FH_WaterCover: 'FH_WaterCover',
  FH_WoodyLitterCover: 'FH_WoodyLitterCover',
  GapCover_101_200: 'GapCover_101_200',
  GapCover_200_plus: 'GapCover_200_plus',
  GapCover_25_50: 'GapCover_25_50',
  GapCover_25_plus: 'GapCover_25_plus',
  GapCover_51_100: 'GapCover_51_100',
  Hgt_Forb_Avg: 'Hgt_Forb_Avg',
  Hgt_Grass_Avg: 'Hgt_Grass_Avg',
  Hgt_Herbaceous_Avg: 'Hgt_Herbaceous_Avg',
  Hgt_PerenForb_Avg: 'Hgt_PerenForb_Avg',
  Hgt_PerenForbGrass_Avg: 'Hgt_PerenForbGrass_Avg',
  Hgt_PerenGrass_Avg: 'Hgt_PerenGrass_Avg',
  Hgt_Woody_Avg: 'Hgt_Woody_Avg',
  RH_AnnualProd: 'RH_AnnualProd',
  RH_BareGround: 'RH_BareGround',
  RH_BioticIntegrity: 'RH_BioticIntegrity',
  RH_CommentsBI: 'RH_CommentsBI',
  RH_CommentsHF: 'RH_CommentsHF',
  RH_CommentsSS: 'RH_CommentsSS',
  RH_Compaction: 'RH_Compaction',
  RH_DeadDyingPlantParts: 'RH_DeadDyingPlantParts',
  RH_FuncSructGroup: 'RH_FuncSructGroup',
  RH_Gullies: 'RH_Gullies',
  RH_HydrologicFunction: 'RH_HydrologicFunction',
  RH_InvasivePlants: 'RH_InvasivePlants',
  RH_LitterAmount: 'RH_LitterAmount',
  RH_LitterMovement: 'RH_LitterMovement',
  RH_PedestalsTerracettes: 'RH_PedestalsTerracettes',
  RH_PlantCommunityComp: 'RH_PlantCommunityComp',
  RH_ReprodCapabilityPeren: 'RH_ReprodCapabilityPeren',
  RH_Rills: 'RH_Rills',
  RH_SoilSiteStability: 'RH_SoilSiteStability',
  RH_SoilSurfLossDeg: 'RH_SoilSurfLossDeg',
  RH_SoilSurfResisErosion: 'RH_SoilSurfResisErosion',
  RH_WaterFlowPatterns: 'RH_WaterFlowPatterns',
  RH_WindScouredAreas: 'RH_WindScouredAreas',
  SoilStability_All: 'SoilStability_All',
  SoilStability_Protected: 'SoilStability_Protected',
  SoilStability_Unprotected: 'SoilStability_Unprotected',
  DateLoadedInDb: 'DateLoadedInDb',
  mlra_name: 'mlra_name',
  mlrarsym: 'mlrarsym',
  na_l1name: 'na_l1name',
  na_l2name: 'na_l2name',
  us_l3name: 'us_l3name',
  us_l4name: 'us_l4name',
  State: 'State',
  modis_landcover: 'modis_landcover',
  horizontal_flux_total_MD: 'horizontal_flux_total_MD',
  vertical_flux_MD: 'vertical_flux_MD',
  PM2_5_MD: 'PM2_5_MD',
  PM10_MD: 'PM10_MD'
});

exports.Prisma.GeoSpeciesScalarFieldEnum = makeEnum({
  rid: 'rid',
  PrimaryKey: 'PrimaryKey',
  DBKey: 'DBKey',
  ProjectKey: 'ProjectKey',
  Species: 'Species',
  AH_SpeciesCover: 'AH_SpeciesCover',
  AH_SpeciesCover_n: 'AH_SpeciesCover_n',
  Hgt_Species_Avg: 'Hgt_Species_Avg',
  Hgt_Species_Avg_n: 'Hgt_Species_Avg_n',
  Duration: 'Duration',
  GrowthHabit: 'GrowthHabit',
  GrowthHabitSub: 'GrowthHabitSub',
  SpeciesKey: 'SpeciesKey',
  DateLoadedInDb: 'DateLoadedInDb',
  DateVisited: 'DateVisited'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TblProjectScalarFieldEnum = makeEnum({
  project_key: 'project_key',
  project_name: 'project_name',
  project_description: 'project_description',
  project_website: 'project_website',
  data_use_agreement: 'data_use_agreement',
  curator_PersonName: 'curator_PersonName',
  curator_organization: 'curator_organization',
  curator_email: 'curator_email',
  author_PersonName: 'author_PersonName',
  author_email: 'author_email',
  author_orcid_id: 'author_orcid_id',
  addit_contact_person: 'addit_contact_person',
  addit_contact_email: 'addit_contact_email',
  bibliographical_reference: 'bibliographical_reference',
  data_doi: 'data_doi'
});

exports.Prisma.TblSchemaScalarFieldEnum = makeEnum({
  rid: 'rid',
  Order: 'Order',
  Table: 'Table',
  Field: 'Field',
  Alias: 'Alias',
  Description: 'Description',
  DataType: 'DataType',
  Length: 'Length',
  DatatypeNotes: 'DatatypeNotes',
  Min: 'Min',
  Max: 'Max',
  Unit: 'Unit',
  SigFig: 'SigFig',
  Version: 'Version',
  Uploaded: 'Uploaded'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  dataGap: 'dataGap',
  dataHeader: 'dataHeader',
  dataHeight: 'dataHeight',
  dataLPI: 'dataLPI',
  dataSoilStability: 'dataSoilStability',
  dataSpeciesInventory: 'dataSpeciesInventory',
  geoIndicators: 'geoIndicators',
  geoSpecies: 'geoSpecies',
  tblProject: 'tblProject',
  dataDustDeposition: 'dataDustDeposition',
  dataHorizontalFlux: 'dataHorizontalFlux',
  tblSchema: 'tblSchema',
  geoIndicators_view: 'geoIndicators_view'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
