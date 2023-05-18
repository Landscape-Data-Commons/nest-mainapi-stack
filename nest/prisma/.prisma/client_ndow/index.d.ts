
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model dataGap
 * 
 */
export type dataGap = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  RecType: string | null
  SeqNo: number | null
  GapStart: number | null
  GapEnd: number | null
  Gap: number | null
  LineKey: string | null
  RecKey: string | null
  FormDate: Date | null
  DateModified: Date | null
  FormType: string | null
  Direction: string | null
  Measure: number | null
  LineLengthAmount: number | null
  GapMin: number | null
  GapData: number | null
  PerennialsCanopy: string | null
  AnnualGrassesCanopy: string | null
  AnnualForbsCanopy: string | null
  OtherCanopy: string | null
  Notes: string | null
  NoCanopyGaps: number | null
  NoBasalGaps: number | null
  DateLoadedInDb: Date | null
  PerennialsBasal: string | null
  AnnualGrassesBasal: string | null
  AnnualForbsBasal: string | null
  OtherBasal: string | null
  source: string | null
  DateVisited: Date | null
}

/**
 * Model dataHeader
 * 
 */
export type dataHeader = {
  PrimaryKey: string
  DBKey: string | null
  ProjectKey: string | null
  DateVisited: Date | null
  Latitude_NAD83: number | null
  Longitude_NAD83: number | null
  LocationType: string | null
  EcologicalSiteID: string | null
  PercentCoveredByEcoSite: number | null
  SpeciesKey: string | null
  PlotID: string | null
  DateLoadedInDb: Date | null
  source: string | null
  rid: number
}

/**
 * Model dataHeight
 * 
 */
export type dataHeight = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  PointLoc: number | null
  PointNbr: number | null
  RecKey: string | null
  Height: number | null
  Species: string | null
  Chkbox: string | null
  type: string | null
  GrowthHabit_measured: string | null
  LineKey: string | null
  DateModified: Date | null
  FormType: string | null
  FormDate: Date | null
  source: string | null
  Direction: string | null
  Measure: number | null
  LineLengthAmount: number | null
  SpacingIntervalAmount: Prisma.Decimal | null
  SpacingType: string | null
  HeightOption: string | null
  HeightUOM: string | null
  ShowCheckbox: string | null
  CheckboxLabel: string | null
  DateLoadedInDb: Date | null
  DateVisited: Date | null
}

/**
 * Model dataLPI
 * 
 */
export type dataLPI = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  LineKey: string | null
  RecKey: string | null
  layer: string | null
  code: string | null
  chckbox: string | null
  ShrubShape: string | null
  FormType: string | null
  FormDate: Date | null
  Direction: string | null
  Measure: number | null
  LineLengthAmount: number | null
  SpacingIntervalAmount: number | null
  SpacingType: string | null
  ShowCheckbox: string | null
  CheckboxLabel: string | null
  PointLoc: number | null
  PointNbr: number | null
  source: string | null
  DateLoadedInDb: Date | null
  DateVisited: Date | null
}

/**
 * Model dataSoilStability
 * 
 */
export type dataSoilStability = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  RecKey: string | null
  FormType: string | null
  FormDate: Date | null
  LineKey: string | null
  SoilStabSubSurface: number | null
  Line: string | null
  Position: number | null
  Pos: string | null
  Veg: string | null
  Rating: number | null
  Hydro: string | null
  Notes: string | null
  source: string | null
  DateLoadedInDb: Date | null
  DateVisited: Date | null
}

/**
 * Model dataSpeciesInventory
 * 
 */
export type dataSpeciesInventory = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  Species: string | null
  DENSITY: number | null
  LineKey: string | null
  RecKey: string | null
  FormType: string | null
  FormDate: Date | null
  SpecRichMethod: number | null
  SpecRichMeasure: number | null
  SpecRichNbrSubPlots: number | null
  SpecRich1Container: string | null
  SpecRich1Shape: number | null
  SpecRich1Dim1: number | null
  SpecRich1Dim2: number | null
  SpecRich1Area: number | null
  SpecRich2Container: string | null
  SpecRich2Shape: number | null
  SpecRich2Dim1: number | null
  SpecRich2Dim2: number | null
  SpecRich2Area: number | null
  SpecRich3Container: string | null
  SpecRich3Shape: number | null
  SpecRich3Dim1: number | null
  SpecRich3Dim2: number | null
  SpecRich3Area: number | null
  SpecRich4Container: string | null
  SpecRich4Shape: number | null
  SpecRich4Dim1: number | null
  SpecRich4Dim2: number | null
  SpecRich4Area: number | null
  SpecRich5Container: string | null
  SpecRich5Shape: number | null
  SpecRich5Dim1: number | null
  SpecRich5Dim2: number | null
  SpecRich5Area: number | null
  SpecRich6Container: string | null
  SpecRich6Shape: number | null
  SpecRich6Dim1: number | null
  SpecRich6Dim2: number | null
  SpecRich6Area: number | null
  Notes: string | null
  source: string | null
  DateLoadedInDb: Date | null
  DateVisited: Date | null
}

/**
 * Model geoIndicators
 * 
 */
export type geoIndicators = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  DateVisited: Date | null
  EcologicalSiteId: string | null
  PercentCoveredByEcoSite: number | null
  Latitude_NAD83: Prisma.Decimal | null
  Longitude_NAD83: Prisma.Decimal | null
  LocationStatus: string | null
  LocationType: string | null
  Latitude_NAD83_Actual: number | null
  Longitude_NAD83_Actual: number | null
  BareSoilCover: number | null
  TotalFoliarCover: number | null
  AH_AnnGrassCover: number | null
  AH_ForbCover: number | null
  AH_GrassCover: number | null
  AH_PerenForbCover: number | null
  AH_PerenForbGrassCover: number | null
  AH_PerenGrassCover: number | null
  AH_ShrubCover: number | null
  FH_CyanobacteriaCover: number | null
  FH_DepSoilCover: number | null
  FH_DuffCover: number | null
  FH_EmbLitterCover: number | null
  FH_HerbLitterCover: number | null
  FH_LichenCover: number | null
  FH_MossCover: number | null
  FH_RockCover: number | null
  FH_TotalLitterCover: number | null
  FH_VagrLichenCover: number | null
  FH_WaterCover: number | null
  FH_WoodyLitterCover: number | null
  GapCover_101_200: number | null
  GapCover_200_plus: number | null
  GapCover_25_50: number | null
  GapCover_25_plus: number | null
  GapCover_51_100: number | null
  Hgt_Forb_Avg: number | null
  Hgt_Grass_Avg: number | null
  Hgt_Herbaceous_Avg: number | null
  Hgt_PerenForb_Avg: number | null
  Hgt_PerenForbGrass_Avg: number | null
  Hgt_PerenGrass_Avg: number | null
  Hgt_Woody_Avg: number | null
  RH_AnnualProd: string | null
  RH_BareGround: string | null
  RH_BioticIntegrity: string | null
  RH_CommentsBI: string | null
  RH_CommentsHF: string | null
  RH_CommentsSS: string | null
  RH_Compaction: string | null
  RH_DeadDyingPlantParts: string | null
  RH_FuncSructGroup: string | null
  RH_Gullies: string | null
  RH_HydrologicFunction: string | null
  RH_InvasivePlants: string | null
  RH_LitterAmount: string | null
  RH_LitterMovement: string | null
  RH_PedestalsTerracettes: string | null
  RH_PlantCommunityComp: string | null
  RH_ReprodCapabilityPeren: string | null
  RH_Rills: string | null
  RH_SoilSiteStability: string | null
  RH_SoilSurfLossDeg: string | null
  RH_SoilSurfResisErosion: string | null
  RH_WaterFlowPatterns: string | null
  RH_WindScouredAreas: string | null
  SoilStability_All: number | null
  SoilStability_Protected: number | null
  SoilStability_Unprotected: number | null
  DateLoadedInDb: Date | null
  mlra_name: string | null
  mlrarsym: string | null
  na_l1name: string | null
  na_l2name: string | null
  us_l3name: string | null
  us_l4name: string | null
  State: string | null
  modis_landcover: string | null
}

/**
 * Model geoSpecies
 * 
 */
export type geoSpecies = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  Species: string | null
  AH_SpeciesCover: number | null
  AH_SpeciesCover_n: number | null
  Hgt_Species_Avg: number | null
  Hgt_Species_Avg_n: number | null
  Duration: string | null
  GrowthHabit: string | null
  GrowthHabitSub: string | null
  SpeciesKey: string | null
  DateLoadedInDb: Date | null
  DateVisited: Date | null
}

/**
 * Model tblProject
 * 
 */
export type tblProject = {
  project_key: string
  project_name: string | null
  project_description: string | null
  project_website: string | null
  data_use_agreement: string | null
  curator_PersonName: string | null
  curator_organization: string | null
  curator_email: string | null
  author_PersonName: string | null
  author_email: string | null
  author_orcid_id: string | null
  addit_contact_person: string | null
  addit_contact_email: string | null
  bibliographical_reference: string | null
  data_doi: string | null
}

/**
 * Model tblSchema
 * 
 */
export type tblSchema = {
  rid: number
  Order: Prisma.Decimal | null
  Table: string | null
  Field: string | null
  Alias: string | null
  Description: string | null
  DataType: string | null
  Length: string | null
  DatatypeNotes: string | null
  Min: Prisma.Decimal | null
  Max: Prisma.Decimal | null
  Unit: string | null
  SigFig: Prisma.Decimal | null
  Version: string | null
  Uploaded: Date | null
}

/**
 * Model geoIndicators_view
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type geoIndicators_view = {
  rid: number
  PrimaryKey: string | null
  DBKey: string | null
  ProjectKey: string | null
  DateVisited: Date | null
  EcologicalSiteId: string | null
  PercentCoveredByEcoSite: number | null
  Latitude_NAD83: Prisma.Decimal | null
  Longitude_NAD83: Prisma.Decimal | null
  LocationStatus: string | null
  LocationType: string | null
  Latitude_NAD83_Actual: number | null
  Longitude_NAD83_Actual: number | null
  BareSoilCover: number | null
  TotalFoliarCover: number | null
  AH_AnnGrassCover: number | null
  AH_ForbCover: number | null
  AH_GrassCover: number | null
  AH_PerenForbCover: number | null
  AH_PerenForbGrassCover: number | null
  AH_PerenGrassCover: number | null
  AH_ShrubCover: number | null
  FH_CyanobacteriaCover: number | null
  FH_DepSoilCover: number | null
  FH_DuffCover: number | null
  FH_EmbLitterCover: number | null
  FH_HerbLitterCover: number | null
  FH_LichenCover: number | null
  FH_MossCover: number | null
  FH_RockCover: number | null
  FH_TotalLitterCover: number | null
  FH_VagrLichenCover: number | null
  FH_WaterCover: number | null
  FH_WoodyLitterCover: number | null
  GapCover_101_200: number | null
  GapCover_200_plus: number | null
  GapCover_25_50: number | null
  GapCover_25_plus: number | null
  GapCover_51_100: number | null
  Hgt_Forb_Avg: number | null
  Hgt_Grass_Avg: number | null
  Hgt_Herbaceous_Avg: number | null
  Hgt_PerenForb_Avg: number | null
  Hgt_PerenForbGrass_Avg: number | null
  Hgt_PerenGrass_Avg: number | null
  Hgt_Woody_Avg: number | null
  RH_AnnualProd: string | null
  RH_BareGround: string | null
  RH_BioticIntegrity: string | null
  RH_CommentsBI: string | null
  RH_CommentsHF: string | null
  RH_CommentsSS: string | null
  RH_Compaction: string | null
  RH_DeadDyingPlantParts: string | null
  RH_FuncSructGroup: string | null
  RH_Gullies: string | null
  RH_HydrologicFunction: string | null
  RH_InvasivePlants: string | null
  RH_LitterAmount: string | null
  RH_LitterMovement: string | null
  RH_PedestalsTerracettes: string | null
  RH_PlantCommunityComp: string | null
  RH_ReprodCapabilityPeren: string | null
  RH_Rills: string | null
  RH_SoilSiteStability: string | null
  RH_SoilSurfLossDeg: string | null
  RH_SoilSurfResisErosion: string | null
  RH_WaterFlowPatterns: string | null
  RH_WindScouredAreas: string | null
  SoilStability_All: number | null
  SoilStability_Protected: number | null
  SoilStability_Unprotected: number | null
  DateLoadedInDb: Date | null
  mlra_name: string | null
  mlrarsym: string | null
  na_l1name: string | null
  na_l2name: string | null
  us_l3name: string | null
  us_l4name: string | null
  State: string | null
  modis_landcover: string | null
  horizontal_flux_total_MD: number | null
  vertical_flux_MD: number | null
  PM2_5_MD: number | null
  PM10_MD: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DataGaps
 * const dataGaps = await prisma.dataGap.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DataGaps
   * const dataGaps = await prisma.dataGap.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.dataGap`: Exposes CRUD operations for the **dataGap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataGaps
    * const dataGaps = await prisma.dataGap.findMany()
    * ```
    */
  get dataGap(): Prisma.dataGapDelegate<GlobalReject>;

  /**
   * `prisma.dataHeader`: Exposes CRUD operations for the **dataHeader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataHeaders
    * const dataHeaders = await prisma.dataHeader.findMany()
    * ```
    */
  get dataHeader(): Prisma.dataHeaderDelegate<GlobalReject>;

  /**
   * `prisma.dataHeight`: Exposes CRUD operations for the **dataHeight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataHeights
    * const dataHeights = await prisma.dataHeight.findMany()
    * ```
    */
  get dataHeight(): Prisma.dataHeightDelegate<GlobalReject>;

  /**
   * `prisma.dataLPI`: Exposes CRUD operations for the **dataLPI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataLPIS
    * const dataLPIS = await prisma.dataLPI.findMany()
    * ```
    */
  get dataLPI(): Prisma.dataLPIDelegate<GlobalReject>;

  /**
   * `prisma.dataSoilStability`: Exposes CRUD operations for the **dataSoilStability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSoilStabilities
    * const dataSoilStabilities = await prisma.dataSoilStability.findMany()
    * ```
    */
  get dataSoilStability(): Prisma.dataSoilStabilityDelegate<GlobalReject>;

  /**
   * `prisma.dataSpeciesInventory`: Exposes CRUD operations for the **dataSpeciesInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSpeciesInventories
    * const dataSpeciesInventories = await prisma.dataSpeciesInventory.findMany()
    * ```
    */
  get dataSpeciesInventory(): Prisma.dataSpeciesInventoryDelegate<GlobalReject>;

  /**
   * `prisma.geoIndicators`: Exposes CRUD operations for the **geoIndicators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeoIndicators
    * const geoIndicators = await prisma.geoIndicators.findMany()
    * ```
    */
  get geoIndicators(): Prisma.geoIndicatorsDelegate<GlobalReject>;

  /**
   * `prisma.geoSpecies`: Exposes CRUD operations for the **geoSpecies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeoSpecies
    * const geoSpecies = await prisma.geoSpecies.findMany()
    * ```
    */
  get geoSpecies(): Prisma.geoSpeciesDelegate<GlobalReject>;

  /**
   * `prisma.tblProject`: Exposes CRUD operations for the **tblProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblProjects
    * const tblProjects = await prisma.tblProject.findMany()
    * ```
    */
  get tblProject(): Prisma.tblProjectDelegate<GlobalReject>;

  /**
   * `prisma.tblSchema`: Exposes CRUD operations for the **tblSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblSchemas
    * const tblSchemas = await prisma.tblSchema.findMany()
    * ```
    */
  get tblSchema(): Prisma.tblSchemaDelegate<GlobalReject>;

  /**
   * `prisma.geoIndicators_view`: Exposes CRUD operations for the **geoIndicators_view** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeoIndicators_views
    * const geoIndicators_views = await prisma.geoIndicators_view.findMany()
    * ```
    */
  get geoIndicators_view(): Prisma.geoIndicators_viewDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    dataGap: 'dataGap',
    dataHeader: 'dataHeader',
    dataHeight: 'dataHeight',
    dataLPI: 'dataLPI',
    dataSoilStability: 'dataSoilStability',
    dataSpeciesInventory: 'dataSpeciesInventory',
    geoIndicators: 'geoIndicators',
    geoSpecies: 'geoSpecies',
    tblProject: 'tblProject',
    tblSchema: 'tblSchema',
    geoIndicators_view: 'geoIndicators_view'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DataHeaderCountOutputType
   */


  export type DataHeaderCountOutputType = {
    dataGap: number
    dataHeight: number
    dataLPI: number
    dataSoilStability: number
    dataSpeciesInventory: number
    geoSpecies: number
  }

  export type DataHeaderCountOutputTypeSelect = {
    dataGap?: boolean
    dataHeight?: boolean
    dataLPI?: boolean
    dataSoilStability?: boolean
    dataSpeciesInventory?: boolean
    geoSpecies?: boolean
  }

  export type DataHeaderCountOutputTypeGetPayload<S extends boolean | null | undefined | DataHeaderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DataHeaderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DataHeaderCountOutputTypeArgs)
    ? DataHeaderCountOutputType 
    : S extends { select: any } & (DataHeaderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DataHeaderCountOutputType ? DataHeaderCountOutputType[P] : never
  } 
      : DataHeaderCountOutputType




  // Custom InputTypes

  /**
   * DataHeaderCountOutputType without action
   */
  export type DataHeaderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DataHeaderCountOutputType
     */
    select?: DataHeaderCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model dataGap
   */


  export type AggregateDataGap = {
    _count: DataGapCountAggregateOutputType | null
    _avg: DataGapAvgAggregateOutputType | null
    _sum: DataGapSumAggregateOutputType | null
    _min: DataGapMinAggregateOutputType | null
    _max: DataGapMaxAggregateOutputType | null
  }

  export type DataGapAvgAggregateOutputType = {
    rid: number | null
    SeqNo: number | null
    GapStart: number | null
    GapEnd: number | null
    Gap: number | null
    Measure: number | null
    LineLengthAmount: number | null
    GapMin: number | null
    GapData: number | null
    NoCanopyGaps: number | null
    NoBasalGaps: number | null
  }

  export type DataGapSumAggregateOutputType = {
    rid: number | null
    SeqNo: number | null
    GapStart: number | null
    GapEnd: number | null
    Gap: number | null
    Measure: number | null
    LineLengthAmount: number | null
    GapMin: number | null
    GapData: number | null
    NoCanopyGaps: number | null
    NoBasalGaps: number | null
  }

  export type DataGapMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecType: string | null
    SeqNo: number | null
    GapStart: number | null
    GapEnd: number | null
    Gap: number | null
    LineKey: string | null
    RecKey: string | null
    FormDate: Date | null
    DateModified: Date | null
    FormType: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    GapMin: number | null
    GapData: number | null
    PerennialsCanopy: string | null
    AnnualGrassesCanopy: string | null
    AnnualForbsCanopy: string | null
    OtherCanopy: string | null
    Notes: string | null
    NoCanopyGaps: number | null
    NoBasalGaps: number | null
    DateLoadedInDb: Date | null
    PerennialsBasal: string | null
    AnnualGrassesBasal: string | null
    AnnualForbsBasal: string | null
    OtherBasal: string | null
    source: string | null
    DateVisited: Date | null
  }

  export type DataGapMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecType: string | null
    SeqNo: number | null
    GapStart: number | null
    GapEnd: number | null
    Gap: number | null
    LineKey: string | null
    RecKey: string | null
    FormDate: Date | null
    DateModified: Date | null
    FormType: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    GapMin: number | null
    GapData: number | null
    PerennialsCanopy: string | null
    AnnualGrassesCanopy: string | null
    AnnualForbsCanopy: string | null
    OtherCanopy: string | null
    Notes: string | null
    NoCanopyGaps: number | null
    NoBasalGaps: number | null
    DateLoadedInDb: Date | null
    PerennialsBasal: string | null
    AnnualGrassesBasal: string | null
    AnnualForbsBasal: string | null
    OtherBasal: string | null
    source: string | null
    DateVisited: Date | null
  }

  export type DataGapCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    RecType: number
    SeqNo: number
    GapStart: number
    GapEnd: number
    Gap: number
    LineKey: number
    RecKey: number
    FormDate: number
    DateModified: number
    FormType: number
    Direction: number
    Measure: number
    LineLengthAmount: number
    GapMin: number
    GapData: number
    PerennialsCanopy: number
    AnnualGrassesCanopy: number
    AnnualForbsCanopy: number
    OtherCanopy: number
    Notes: number
    NoCanopyGaps: number
    NoBasalGaps: number
    DateLoadedInDb: number
    PerennialsBasal: number
    AnnualGrassesBasal: number
    AnnualForbsBasal: number
    OtherBasal: number
    source: number
    DateVisited: number
    _all: number
  }


  export type DataGapAvgAggregateInputType = {
    rid?: true
    SeqNo?: true
    GapStart?: true
    GapEnd?: true
    Gap?: true
    Measure?: true
    LineLengthAmount?: true
    GapMin?: true
    GapData?: true
    NoCanopyGaps?: true
    NoBasalGaps?: true
  }

  export type DataGapSumAggregateInputType = {
    rid?: true
    SeqNo?: true
    GapStart?: true
    GapEnd?: true
    Gap?: true
    Measure?: true
    LineLengthAmount?: true
    GapMin?: true
    GapData?: true
    NoCanopyGaps?: true
    NoBasalGaps?: true
  }

  export type DataGapMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecType?: true
    SeqNo?: true
    GapStart?: true
    GapEnd?: true
    Gap?: true
    LineKey?: true
    RecKey?: true
    FormDate?: true
    DateModified?: true
    FormType?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    GapMin?: true
    GapData?: true
    PerennialsCanopy?: true
    AnnualGrassesCanopy?: true
    AnnualForbsCanopy?: true
    OtherCanopy?: true
    Notes?: true
    NoCanopyGaps?: true
    NoBasalGaps?: true
    DateLoadedInDb?: true
    PerennialsBasal?: true
    AnnualGrassesBasal?: true
    AnnualForbsBasal?: true
    OtherBasal?: true
    source?: true
    DateVisited?: true
  }

  export type DataGapMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecType?: true
    SeqNo?: true
    GapStart?: true
    GapEnd?: true
    Gap?: true
    LineKey?: true
    RecKey?: true
    FormDate?: true
    DateModified?: true
    FormType?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    GapMin?: true
    GapData?: true
    PerennialsCanopy?: true
    AnnualGrassesCanopy?: true
    AnnualForbsCanopy?: true
    OtherCanopy?: true
    Notes?: true
    NoCanopyGaps?: true
    NoBasalGaps?: true
    DateLoadedInDb?: true
    PerennialsBasal?: true
    AnnualGrassesBasal?: true
    AnnualForbsBasal?: true
    OtherBasal?: true
    source?: true
    DateVisited?: true
  }

  export type DataGapCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecType?: true
    SeqNo?: true
    GapStart?: true
    GapEnd?: true
    Gap?: true
    LineKey?: true
    RecKey?: true
    FormDate?: true
    DateModified?: true
    FormType?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    GapMin?: true
    GapData?: true
    PerennialsCanopy?: true
    AnnualGrassesCanopy?: true
    AnnualForbsCanopy?: true
    OtherCanopy?: true
    Notes?: true
    NoCanopyGaps?: true
    NoBasalGaps?: true
    DateLoadedInDb?: true
    PerennialsBasal?: true
    AnnualGrassesBasal?: true
    AnnualForbsBasal?: true
    OtherBasal?: true
    source?: true
    DateVisited?: true
    _all?: true
  }

  export type DataGapAggregateArgs = {
    /**
     * Filter which dataGap to aggregate.
     */
    where?: dataGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataGaps to fetch.
     */
    orderBy?: Enumerable<dataGapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataGaps
    **/
    _count?: true | DataGapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataGapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataGapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataGapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataGapMaxAggregateInputType
  }

  export type GetDataGapAggregateType<T extends DataGapAggregateArgs> = {
        [P in keyof T & keyof AggregateDataGap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataGap[P]>
      : GetScalarType<T[P], AggregateDataGap[P]>
  }




  export type DataGapGroupByArgs = {
    where?: dataGapWhereInput
    orderBy?: Enumerable<dataGapOrderByWithAggregationInput>
    by: DataGapScalarFieldEnum[]
    having?: dataGapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataGapCountAggregateInputType | true
    _avg?: DataGapAvgAggregateInputType
    _sum?: DataGapSumAggregateInputType
    _min?: DataGapMinAggregateInputType
    _max?: DataGapMaxAggregateInputType
  }


  export type DataGapGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecType: string | null
    SeqNo: number | null
    GapStart: number | null
    GapEnd: number | null
    Gap: number | null
    LineKey: string | null
    RecKey: string | null
    FormDate: Date | null
    DateModified: Date | null
    FormType: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    GapMin: number | null
    GapData: number | null
    PerennialsCanopy: string | null
    AnnualGrassesCanopy: string | null
    AnnualForbsCanopy: string | null
    OtherCanopy: string | null
    Notes: string | null
    NoCanopyGaps: number | null
    NoBasalGaps: number | null
    DateLoadedInDb: Date | null
    PerennialsBasal: string | null
    AnnualGrassesBasal: string | null
    AnnualForbsBasal: string | null
    OtherBasal: string | null
    source: string | null
    DateVisited: Date | null
    _count: DataGapCountAggregateOutputType | null
    _avg: DataGapAvgAggregateOutputType | null
    _sum: DataGapSumAggregateOutputType | null
    _min: DataGapMinAggregateOutputType | null
    _max: DataGapMaxAggregateOutputType | null
  }

  type GetDataGapGroupByPayload<T extends DataGapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataGapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGapGroupByOutputType[P]>
            : GetScalarType<T[P], DataGapGroupByOutputType[P]>
        }
      >
    >


  export type dataGapSelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    RecType?: boolean
    SeqNo?: boolean
    GapStart?: boolean
    GapEnd?: boolean
    Gap?: boolean
    LineKey?: boolean
    RecKey?: boolean
    FormDate?: boolean
    DateModified?: boolean
    FormType?: boolean
    Direction?: boolean
    Measure?: boolean
    LineLengthAmount?: boolean
    GapMin?: boolean
    GapData?: boolean
    PerennialsCanopy?: boolean
    AnnualGrassesCanopy?: boolean
    AnnualForbsCanopy?: boolean
    OtherCanopy?: boolean
    Notes?: boolean
    NoCanopyGaps?: boolean
    NoBasalGaps?: boolean
    DateLoadedInDb?: boolean
    PerennialsBasal?: boolean
    AnnualGrassesBasal?: boolean
    AnnualForbsBasal?: boolean
    OtherBasal?: boolean
    source?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type dataGapInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type dataGapGetPayload<S extends boolean | null | undefined | dataGapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataGap :
    S extends undefined ? never :
    S extends { include: any } & (dataGapArgs | dataGapFindManyArgs)
    ? dataGap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (dataGapArgs | dataGapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof dataGap ? dataGap[P] : never
  } 
      : dataGap


  type dataGapCountArgs = 
    Omit<dataGapFindManyArgs, 'select' | 'include'> & {
      select?: DataGapCountAggregateInputType | true
    }

  export interface dataGapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataGap that matches the filter.
     * @param {dataGapFindUniqueArgs} args - Arguments to find a DataGap
     * @example
     * // Get one DataGap
     * const dataGap = await prisma.dataGap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataGapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataGapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataGap'> extends True ? Prisma__dataGapClient<dataGapGetPayload<T>> : Prisma__dataGapClient<dataGapGetPayload<T> | null, null>

    /**
     * Find one DataGap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataGapFindUniqueOrThrowArgs} args - Arguments to find a DataGap
     * @example
     * // Get one DataGap
     * const dataGap = await prisma.dataGap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataGapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataGapFindUniqueOrThrowArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Find the first DataGap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGapFindFirstArgs} args - Arguments to find a DataGap
     * @example
     * // Get one DataGap
     * const dataGap = await prisma.dataGap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataGapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataGapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataGap'> extends True ? Prisma__dataGapClient<dataGapGetPayload<T>> : Prisma__dataGapClient<dataGapGetPayload<T> | null, null>

    /**
     * Find the first DataGap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGapFindFirstOrThrowArgs} args - Arguments to find a DataGap
     * @example
     * // Get one DataGap
     * const dataGap = await prisma.dataGap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataGapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataGapFindFirstOrThrowArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Find zero or more DataGaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataGaps
     * const dataGaps = await prisma.dataGap.findMany()
     * 
     * // Get first 10 DataGaps
     * const dataGaps = await prisma.dataGap.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const dataGapWithRidOnly = await prisma.dataGap.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends dataGapFindManyArgs>(
      args?: SelectSubset<T, dataGapFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataGapGetPayload<T>>>

    /**
     * Create a DataGap.
     * @param {dataGapCreateArgs} args - Arguments to create a DataGap.
     * @example
     * // Create one DataGap
     * const DataGap = await prisma.dataGap.create({
     *   data: {
     *     // ... data to create a DataGap
     *   }
     * })
     * 
    **/
    create<T extends dataGapCreateArgs>(
      args: SelectSubset<T, dataGapCreateArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Create many DataGaps.
     *     @param {dataGapCreateManyArgs} args - Arguments to create many DataGaps.
     *     @example
     *     // Create many DataGaps
     *     const dataGap = await prisma.dataGap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataGapCreateManyArgs>(
      args?: SelectSubset<T, dataGapCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataGap.
     * @param {dataGapDeleteArgs} args - Arguments to delete one DataGap.
     * @example
     * // Delete one DataGap
     * const DataGap = await prisma.dataGap.delete({
     *   where: {
     *     // ... filter to delete one DataGap
     *   }
     * })
     * 
    **/
    delete<T extends dataGapDeleteArgs>(
      args: SelectSubset<T, dataGapDeleteArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Update one DataGap.
     * @param {dataGapUpdateArgs} args - Arguments to update one DataGap.
     * @example
     * // Update one DataGap
     * const dataGap = await prisma.dataGap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataGapUpdateArgs>(
      args: SelectSubset<T, dataGapUpdateArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Delete zero or more DataGaps.
     * @param {dataGapDeleteManyArgs} args - Arguments to filter DataGaps to delete.
     * @example
     * // Delete a few DataGaps
     * const { count } = await prisma.dataGap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataGapDeleteManyArgs>(
      args?: SelectSubset<T, dataGapDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataGaps
     * const dataGap = await prisma.dataGap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataGapUpdateManyArgs>(
      args: SelectSubset<T, dataGapUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataGap.
     * @param {dataGapUpsertArgs} args - Arguments to update or create a DataGap.
     * @example
     * // Update or create a DataGap
     * const dataGap = await prisma.dataGap.upsert({
     *   create: {
     *     // ... data to create a DataGap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataGap we want to update
     *   }
     * })
    **/
    upsert<T extends dataGapUpsertArgs>(
      args: SelectSubset<T, dataGapUpsertArgs>
    ): Prisma__dataGapClient<dataGapGetPayload<T>>

    /**
     * Count the number of DataGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGapCountArgs} args - Arguments to filter DataGaps to count.
     * @example
     * // Count the number of DataGaps
     * const count = await prisma.dataGap.count({
     *   where: {
     *     // ... the filter for the DataGaps we want to count
     *   }
     * })
    **/
    count<T extends dataGapCountArgs>(
      args?: Subset<T, dataGapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataGapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataGapAggregateArgs>(args: Subset<T, DataGapAggregateArgs>): Prisma.PrismaPromise<GetDataGapAggregateType<T>>

    /**
     * Group by DataGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataGapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGapGroupByArgs['orderBy'] }
        : { orderBy?: DataGapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataGapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataGap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataGapClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataGap base type for findUnique actions
   */
  export type dataGapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter, which dataGap to fetch.
     */
    where: dataGapWhereUniqueInput
  }

  /**
   * dataGap findUnique
   */
  export interface dataGapFindUniqueArgs extends dataGapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataGap findUniqueOrThrow
   */
  export type dataGapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter, which dataGap to fetch.
     */
    where: dataGapWhereUniqueInput
  }


  /**
   * dataGap base type for findFirst actions
   */
  export type dataGapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter, which dataGap to fetch.
     */
    where?: dataGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataGaps to fetch.
     */
    orderBy?: Enumerable<dataGapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataGaps.
     */
    cursor?: dataGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataGaps.
     */
    distinct?: Enumerable<DataGapScalarFieldEnum>
  }

  /**
   * dataGap findFirst
   */
  export interface dataGapFindFirstArgs extends dataGapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataGap findFirstOrThrow
   */
  export type dataGapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter, which dataGap to fetch.
     */
    where?: dataGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataGaps to fetch.
     */
    orderBy?: Enumerable<dataGapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataGaps.
     */
    cursor?: dataGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataGaps.
     */
    distinct?: Enumerable<DataGapScalarFieldEnum>
  }


  /**
   * dataGap findMany
   */
  export type dataGapFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter, which dataGaps to fetch.
     */
    where?: dataGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataGaps to fetch.
     */
    orderBy?: Enumerable<dataGapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataGaps.
     */
    cursor?: dataGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataGaps.
     */
    skip?: number
    distinct?: Enumerable<DataGapScalarFieldEnum>
  }


  /**
   * dataGap create
   */
  export type dataGapCreateArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * The data needed to create a dataGap.
     */
    data: XOR<dataGapCreateInput, dataGapUncheckedCreateInput>
  }


  /**
   * dataGap createMany
   */
  export type dataGapCreateManyArgs = {
    /**
     * The data used to create many dataGaps.
     */
    data: Enumerable<dataGapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataGap update
   */
  export type dataGapUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * The data needed to update a dataGap.
     */
    data: XOR<dataGapUpdateInput, dataGapUncheckedUpdateInput>
    /**
     * Choose, which dataGap to update.
     */
    where: dataGapWhereUniqueInput
  }


  /**
   * dataGap updateMany
   */
  export type dataGapUpdateManyArgs = {
    /**
     * The data used to update dataGaps.
     */
    data: XOR<dataGapUpdateManyMutationInput, dataGapUncheckedUpdateManyInput>
    /**
     * Filter which dataGaps to update
     */
    where?: dataGapWhereInput
  }


  /**
   * dataGap upsert
   */
  export type dataGapUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * The filter to search for the dataGap to update in case it exists.
     */
    where: dataGapWhereUniqueInput
    /**
     * In case the dataGap found by the `where` argument doesn't exist, create a new dataGap with this data.
     */
    create: XOR<dataGapCreateInput, dataGapUncheckedCreateInput>
    /**
     * In case the dataGap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataGapUpdateInput, dataGapUncheckedUpdateInput>
  }


  /**
   * dataGap delete
   */
  export type dataGapDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    /**
     * Filter which dataGap to delete.
     */
    where: dataGapWhereUniqueInput
  }


  /**
   * dataGap deleteMany
   */
  export type dataGapDeleteManyArgs = {
    /**
     * Filter which dataGaps to delete
     */
    where?: dataGapWhereInput
  }


  /**
   * dataGap without action
   */
  export type dataGapArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
  }



  /**
   * Model dataHeader
   */


  export type AggregateDataHeader = {
    _count: DataHeaderCountAggregateOutputType | null
    _avg: DataHeaderAvgAggregateOutputType | null
    _sum: DataHeaderSumAggregateOutputType | null
    _min: DataHeaderMinAggregateOutputType | null
    _max: DataHeaderMaxAggregateOutputType | null
  }

  export type DataHeaderAvgAggregateOutputType = {
    Latitude_NAD83: number | null
    Longitude_NAD83: number | null
    PercentCoveredByEcoSite: number | null
    rid: number | null
  }

  export type DataHeaderSumAggregateOutputType = {
    Latitude_NAD83: number | null
    Longitude_NAD83: number | null
    PercentCoveredByEcoSite: number | null
    rid: number | null
  }

  export type DataHeaderMinAggregateOutputType = {
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    Latitude_NAD83: number | null
    Longitude_NAD83: number | null
    LocationType: string | null
    EcologicalSiteID: string | null
    PercentCoveredByEcoSite: number | null
    SpeciesKey: string | null
    PlotID: string | null
    DateLoadedInDb: Date | null
    source: string | null
    rid: number | null
  }

  export type DataHeaderMaxAggregateOutputType = {
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    Latitude_NAD83: number | null
    Longitude_NAD83: number | null
    LocationType: string | null
    EcologicalSiteID: string | null
    PercentCoveredByEcoSite: number | null
    SpeciesKey: string | null
    PlotID: string | null
    DateLoadedInDb: Date | null
    source: string | null
    rid: number | null
  }

  export type DataHeaderCountAggregateOutputType = {
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    DateVisited: number
    Latitude_NAD83: number
    Longitude_NAD83: number
    LocationType: number
    EcologicalSiteID: number
    PercentCoveredByEcoSite: number
    SpeciesKey: number
    PlotID: number
    DateLoadedInDb: number
    source: number
    rid: number
    _all: number
  }


  export type DataHeaderAvgAggregateInputType = {
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    PercentCoveredByEcoSite?: true
    rid?: true
  }

  export type DataHeaderSumAggregateInputType = {
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    PercentCoveredByEcoSite?: true
    rid?: true
  }

  export type DataHeaderMinAggregateInputType = {
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationType?: true
    EcologicalSiteID?: true
    PercentCoveredByEcoSite?: true
    SpeciesKey?: true
    PlotID?: true
    DateLoadedInDb?: true
    source?: true
    rid?: true
  }

  export type DataHeaderMaxAggregateInputType = {
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationType?: true
    EcologicalSiteID?: true
    PercentCoveredByEcoSite?: true
    SpeciesKey?: true
    PlotID?: true
    DateLoadedInDb?: true
    source?: true
    rid?: true
  }

  export type DataHeaderCountAggregateInputType = {
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationType?: true
    EcologicalSiteID?: true
    PercentCoveredByEcoSite?: true
    SpeciesKey?: true
    PlotID?: true
    DateLoadedInDb?: true
    source?: true
    rid?: true
    _all?: true
  }

  export type DataHeaderAggregateArgs = {
    /**
     * Filter which dataHeader to aggregate.
     */
    where?: dataHeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeaders to fetch.
     */
    orderBy?: Enumerable<dataHeaderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataHeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataHeaders
    **/
    _count?: true | DataHeaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataHeaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataHeaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataHeaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataHeaderMaxAggregateInputType
  }

  export type GetDataHeaderAggregateType<T extends DataHeaderAggregateArgs> = {
        [P in keyof T & keyof AggregateDataHeader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataHeader[P]>
      : GetScalarType<T[P], AggregateDataHeader[P]>
  }




  export type DataHeaderGroupByArgs = {
    where?: dataHeaderWhereInput
    orderBy?: Enumerable<dataHeaderOrderByWithAggregationInput>
    by: DataHeaderScalarFieldEnum[]
    having?: dataHeaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataHeaderCountAggregateInputType | true
    _avg?: DataHeaderAvgAggregateInputType
    _sum?: DataHeaderSumAggregateInputType
    _min?: DataHeaderMinAggregateInputType
    _max?: DataHeaderMaxAggregateInputType
  }


  export type DataHeaderGroupByOutputType = {
    PrimaryKey: string
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    Latitude_NAD83: number | null
    Longitude_NAD83: number | null
    LocationType: string | null
    EcologicalSiteID: string | null
    PercentCoveredByEcoSite: number | null
    SpeciesKey: string | null
    PlotID: string | null
    DateLoadedInDb: Date | null
    source: string | null
    rid: number
    _count: DataHeaderCountAggregateOutputType | null
    _avg: DataHeaderAvgAggregateOutputType | null
    _sum: DataHeaderSumAggregateOutputType | null
    _min: DataHeaderMinAggregateOutputType | null
    _max: DataHeaderMaxAggregateOutputType | null
  }

  type GetDataHeaderGroupByPayload<T extends DataHeaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataHeaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataHeaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataHeaderGroupByOutputType[P]>
            : GetScalarType<T[P], DataHeaderGroupByOutputType[P]>
        }
      >
    >


  export type dataHeaderSelect = {
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    DateVisited?: boolean
    Latitude_NAD83?: boolean
    Longitude_NAD83?: boolean
    LocationType?: boolean
    EcologicalSiteID?: boolean
    PercentCoveredByEcoSite?: boolean
    SpeciesKey?: boolean
    PlotID?: boolean
    DateLoadedInDb?: boolean
    source?: boolean
    rid?: boolean
    dataGap?: boolean | dataHeader$dataGapArgs
    dataHeight?: boolean | dataHeader$dataHeightArgs
    dataLPI?: boolean | dataHeader$dataLPIArgs
    dataSoilStability?: boolean | dataHeader$dataSoilStabilityArgs
    dataSpeciesInventory?: boolean | dataHeader$dataSpeciesInventoryArgs
    geoIndicators?: boolean | geoIndicatorsArgs
    geoSpecies?: boolean | dataHeader$geoSpeciesArgs
    _count?: boolean | DataHeaderCountOutputTypeArgs
  }


  export type dataHeaderInclude = {
    dataGap?: boolean | dataHeader$dataGapArgs
    dataHeight?: boolean | dataHeader$dataHeightArgs
    dataLPI?: boolean | dataHeader$dataLPIArgs
    dataSoilStability?: boolean | dataHeader$dataSoilStabilityArgs
    dataSpeciesInventory?: boolean | dataHeader$dataSpeciesInventoryArgs
    geoIndicators?: boolean | geoIndicatorsArgs
    geoSpecies?: boolean | dataHeader$geoSpeciesArgs
    _count?: boolean | DataHeaderCountOutputTypeArgs
  }

  export type dataHeaderGetPayload<S extends boolean | null | undefined | dataHeaderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataHeader :
    S extends undefined ? never :
    S extends { include: any } & (dataHeaderArgs | dataHeaderFindManyArgs)
    ? dataHeader  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataGap' ? Array < dataGapGetPayload<S['include'][P]>>  :
        P extends 'dataHeight' ? Array < dataHeightGetPayload<S['include'][P]>>  :
        P extends 'dataLPI' ? Array < dataLPIGetPayload<S['include'][P]>>  :
        P extends 'dataSoilStability' ? Array < dataSoilStabilityGetPayload<S['include'][P]>>  :
        P extends 'dataSpeciesInventory' ? Array < dataSpeciesInventoryGetPayload<S['include'][P]>>  :
        P extends 'geoIndicators' ? geoIndicatorsGetPayload<S['include'][P]> | null :
        P extends 'geoSpecies' ? Array < geoSpeciesGetPayload<S['include'][P]>>  :
        P extends '_count' ? DataHeaderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (dataHeaderArgs | dataHeaderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataGap' ? Array < dataGapGetPayload<S['select'][P]>>  :
        P extends 'dataHeight' ? Array < dataHeightGetPayload<S['select'][P]>>  :
        P extends 'dataLPI' ? Array < dataLPIGetPayload<S['select'][P]>>  :
        P extends 'dataSoilStability' ? Array < dataSoilStabilityGetPayload<S['select'][P]>>  :
        P extends 'dataSpeciesInventory' ? Array < dataSpeciesInventoryGetPayload<S['select'][P]>>  :
        P extends 'geoIndicators' ? geoIndicatorsGetPayload<S['select'][P]> | null :
        P extends 'geoSpecies' ? Array < geoSpeciesGetPayload<S['select'][P]>>  :
        P extends '_count' ? DataHeaderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof dataHeader ? dataHeader[P] : never
  } 
      : dataHeader


  type dataHeaderCountArgs = 
    Omit<dataHeaderFindManyArgs, 'select' | 'include'> & {
      select?: DataHeaderCountAggregateInputType | true
    }

  export interface dataHeaderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataHeader that matches the filter.
     * @param {dataHeaderFindUniqueArgs} args - Arguments to find a DataHeader
     * @example
     * // Get one DataHeader
     * const dataHeader = await prisma.dataHeader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataHeaderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataHeaderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataHeader'> extends True ? Prisma__dataHeaderClient<dataHeaderGetPayload<T>> : Prisma__dataHeaderClient<dataHeaderGetPayload<T> | null, null>

    /**
     * Find one DataHeader that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataHeaderFindUniqueOrThrowArgs} args - Arguments to find a DataHeader
     * @example
     * // Get one DataHeader
     * const dataHeader = await prisma.dataHeader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataHeaderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataHeaderFindUniqueOrThrowArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Find the first DataHeader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeaderFindFirstArgs} args - Arguments to find a DataHeader
     * @example
     * // Get one DataHeader
     * const dataHeader = await prisma.dataHeader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataHeaderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataHeaderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataHeader'> extends True ? Prisma__dataHeaderClient<dataHeaderGetPayload<T>> : Prisma__dataHeaderClient<dataHeaderGetPayload<T> | null, null>

    /**
     * Find the first DataHeader that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeaderFindFirstOrThrowArgs} args - Arguments to find a DataHeader
     * @example
     * // Get one DataHeader
     * const dataHeader = await prisma.dataHeader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataHeaderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataHeaderFindFirstOrThrowArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Find zero or more DataHeaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeaderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataHeaders
     * const dataHeaders = await prisma.dataHeader.findMany()
     * 
     * // Get first 10 DataHeaders
     * const dataHeaders = await prisma.dataHeader.findMany({ take: 10 })
     * 
     * // Only select the `PrimaryKey`
     * const dataHeaderWithPrimaryKeyOnly = await prisma.dataHeader.findMany({ select: { PrimaryKey: true } })
     * 
    **/
    findMany<T extends dataHeaderFindManyArgs>(
      args?: SelectSubset<T, dataHeaderFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataHeaderGetPayload<T>>>

    /**
     * Create a DataHeader.
     * @param {dataHeaderCreateArgs} args - Arguments to create a DataHeader.
     * @example
     * // Create one DataHeader
     * const DataHeader = await prisma.dataHeader.create({
     *   data: {
     *     // ... data to create a DataHeader
     *   }
     * })
     * 
    **/
    create<T extends dataHeaderCreateArgs>(
      args: SelectSubset<T, dataHeaderCreateArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Create many DataHeaders.
     *     @param {dataHeaderCreateManyArgs} args - Arguments to create many DataHeaders.
     *     @example
     *     // Create many DataHeaders
     *     const dataHeader = await prisma.dataHeader.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataHeaderCreateManyArgs>(
      args?: SelectSubset<T, dataHeaderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataHeader.
     * @param {dataHeaderDeleteArgs} args - Arguments to delete one DataHeader.
     * @example
     * // Delete one DataHeader
     * const DataHeader = await prisma.dataHeader.delete({
     *   where: {
     *     // ... filter to delete one DataHeader
     *   }
     * })
     * 
    **/
    delete<T extends dataHeaderDeleteArgs>(
      args: SelectSubset<T, dataHeaderDeleteArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Update one DataHeader.
     * @param {dataHeaderUpdateArgs} args - Arguments to update one DataHeader.
     * @example
     * // Update one DataHeader
     * const dataHeader = await prisma.dataHeader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataHeaderUpdateArgs>(
      args: SelectSubset<T, dataHeaderUpdateArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Delete zero or more DataHeaders.
     * @param {dataHeaderDeleteManyArgs} args - Arguments to filter DataHeaders to delete.
     * @example
     * // Delete a few DataHeaders
     * const { count } = await prisma.dataHeader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataHeaderDeleteManyArgs>(
      args?: SelectSubset<T, dataHeaderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataHeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataHeaders
     * const dataHeader = await prisma.dataHeader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataHeaderUpdateManyArgs>(
      args: SelectSubset<T, dataHeaderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataHeader.
     * @param {dataHeaderUpsertArgs} args - Arguments to update or create a DataHeader.
     * @example
     * // Update or create a DataHeader
     * const dataHeader = await prisma.dataHeader.upsert({
     *   create: {
     *     // ... data to create a DataHeader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataHeader we want to update
     *   }
     * })
    **/
    upsert<T extends dataHeaderUpsertArgs>(
      args: SelectSubset<T, dataHeaderUpsertArgs>
    ): Prisma__dataHeaderClient<dataHeaderGetPayload<T>>

    /**
     * Count the number of DataHeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeaderCountArgs} args - Arguments to filter DataHeaders to count.
     * @example
     * // Count the number of DataHeaders
     * const count = await prisma.dataHeader.count({
     *   where: {
     *     // ... the filter for the DataHeaders we want to count
     *   }
     * })
    **/
    count<T extends dataHeaderCountArgs>(
      args?: Subset<T, dataHeaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataHeaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataHeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataHeaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataHeaderAggregateArgs>(args: Subset<T, DataHeaderAggregateArgs>): Prisma.PrismaPromise<GetDataHeaderAggregateType<T>>

    /**
     * Group by DataHeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataHeaderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataHeaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataHeaderGroupByArgs['orderBy'] }
        : { orderBy?: DataHeaderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataHeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataHeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataHeader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataHeaderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataGap<T extends dataHeader$dataGapArgs= {}>(args?: Subset<T, dataHeader$dataGapArgs>): Prisma.PrismaPromise<Array<dataGapGetPayload<T>>| Null>;

    dataHeight<T extends dataHeader$dataHeightArgs= {}>(args?: Subset<T, dataHeader$dataHeightArgs>): Prisma.PrismaPromise<Array<dataHeightGetPayload<T>>| Null>;

    dataLPI<T extends dataHeader$dataLPIArgs= {}>(args?: Subset<T, dataHeader$dataLPIArgs>): Prisma.PrismaPromise<Array<dataLPIGetPayload<T>>| Null>;

    dataSoilStability<T extends dataHeader$dataSoilStabilityArgs= {}>(args?: Subset<T, dataHeader$dataSoilStabilityArgs>): Prisma.PrismaPromise<Array<dataSoilStabilityGetPayload<T>>| Null>;

    dataSpeciesInventory<T extends dataHeader$dataSpeciesInventoryArgs= {}>(args?: Subset<T, dataHeader$dataSpeciesInventoryArgs>): Prisma.PrismaPromise<Array<dataSpeciesInventoryGetPayload<T>>| Null>;

    geoIndicators<T extends geoIndicatorsArgs= {}>(args?: Subset<T, geoIndicatorsArgs>): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T> | Null>;

    geoSpecies<T extends dataHeader$geoSpeciesArgs= {}>(args?: Subset<T, dataHeader$geoSpeciesArgs>): Prisma.PrismaPromise<Array<geoSpeciesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataHeader base type for findUnique actions
   */
  export type dataHeaderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter, which dataHeader to fetch.
     */
    where: dataHeaderWhereUniqueInput
  }

  /**
   * dataHeader findUnique
   */
  export interface dataHeaderFindUniqueArgs extends dataHeaderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataHeader findUniqueOrThrow
   */
  export type dataHeaderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter, which dataHeader to fetch.
     */
    where: dataHeaderWhereUniqueInput
  }


  /**
   * dataHeader base type for findFirst actions
   */
  export type dataHeaderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter, which dataHeader to fetch.
     */
    where?: dataHeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeaders to fetch.
     */
    orderBy?: Enumerable<dataHeaderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataHeaders.
     */
    cursor?: dataHeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataHeaders.
     */
    distinct?: Enumerable<DataHeaderScalarFieldEnum>
  }

  /**
   * dataHeader findFirst
   */
  export interface dataHeaderFindFirstArgs extends dataHeaderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataHeader findFirstOrThrow
   */
  export type dataHeaderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter, which dataHeader to fetch.
     */
    where?: dataHeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeaders to fetch.
     */
    orderBy?: Enumerable<dataHeaderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataHeaders.
     */
    cursor?: dataHeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataHeaders.
     */
    distinct?: Enumerable<DataHeaderScalarFieldEnum>
  }


  /**
   * dataHeader findMany
   */
  export type dataHeaderFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter, which dataHeaders to fetch.
     */
    where?: dataHeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeaders to fetch.
     */
    orderBy?: Enumerable<dataHeaderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataHeaders.
     */
    cursor?: dataHeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeaders.
     */
    skip?: number
    distinct?: Enumerable<DataHeaderScalarFieldEnum>
  }


  /**
   * dataHeader create
   */
  export type dataHeaderCreateArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * The data needed to create a dataHeader.
     */
    data: XOR<dataHeaderCreateInput, dataHeaderUncheckedCreateInput>
  }


  /**
   * dataHeader createMany
   */
  export type dataHeaderCreateManyArgs = {
    /**
     * The data used to create many dataHeaders.
     */
    data: Enumerable<dataHeaderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataHeader update
   */
  export type dataHeaderUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * The data needed to update a dataHeader.
     */
    data: XOR<dataHeaderUpdateInput, dataHeaderUncheckedUpdateInput>
    /**
     * Choose, which dataHeader to update.
     */
    where: dataHeaderWhereUniqueInput
  }


  /**
   * dataHeader updateMany
   */
  export type dataHeaderUpdateManyArgs = {
    /**
     * The data used to update dataHeaders.
     */
    data: XOR<dataHeaderUpdateManyMutationInput, dataHeaderUncheckedUpdateManyInput>
    /**
     * Filter which dataHeaders to update
     */
    where?: dataHeaderWhereInput
  }


  /**
   * dataHeader upsert
   */
  export type dataHeaderUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * The filter to search for the dataHeader to update in case it exists.
     */
    where: dataHeaderWhereUniqueInput
    /**
     * In case the dataHeader found by the `where` argument doesn't exist, create a new dataHeader with this data.
     */
    create: XOR<dataHeaderCreateInput, dataHeaderUncheckedCreateInput>
    /**
     * In case the dataHeader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataHeaderUpdateInput, dataHeaderUncheckedUpdateInput>
  }


  /**
   * dataHeader delete
   */
  export type dataHeaderDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
    /**
     * Filter which dataHeader to delete.
     */
    where: dataHeaderWhereUniqueInput
  }


  /**
   * dataHeader deleteMany
   */
  export type dataHeaderDeleteManyArgs = {
    /**
     * Filter which dataHeaders to delete
     */
    where?: dataHeaderWhereInput
  }


  /**
   * dataHeader.dataGap
   */
  export type dataHeader$dataGapArgs = {
    /**
     * Select specific fields to fetch from the dataGap
     */
    select?: dataGapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataGapInclude | null
    where?: dataGapWhereInput
    orderBy?: Enumerable<dataGapOrderByWithRelationInput>
    cursor?: dataGapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataGapScalarFieldEnum>
  }


  /**
   * dataHeader.dataHeight
   */
  export type dataHeader$dataHeightArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    where?: dataHeightWhereInput
    orderBy?: Enumerable<dataHeightOrderByWithRelationInput>
    cursor?: dataHeightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataHeightScalarFieldEnum>
  }


  /**
   * dataHeader.dataLPI
   */
  export type dataHeader$dataLPIArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    where?: dataLPIWhereInput
    orderBy?: Enumerable<dataLPIOrderByWithRelationInput>
    cursor?: dataLPIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataLPIScalarFieldEnum>
  }


  /**
   * dataHeader.dataSoilStability
   */
  export type dataHeader$dataSoilStabilityArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    where?: dataSoilStabilityWhereInput
    orderBy?: Enumerable<dataSoilStabilityOrderByWithRelationInput>
    cursor?: dataSoilStabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataSoilStabilityScalarFieldEnum>
  }


  /**
   * dataHeader.dataSpeciesInventory
   */
  export type dataHeader$dataSpeciesInventoryArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    where?: dataSpeciesInventoryWhereInput
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithRelationInput>
    cursor?: dataSpeciesInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataSpeciesInventoryScalarFieldEnum>
  }


  /**
   * dataHeader.geoSpecies
   */
  export type dataHeader$geoSpeciesArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    where?: geoSpeciesWhereInput
    orderBy?: Enumerable<geoSpeciesOrderByWithRelationInput>
    cursor?: geoSpeciesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GeoSpeciesScalarFieldEnum>
  }


  /**
   * dataHeader without action
   */
  export type dataHeaderArgs = {
    /**
     * Select specific fields to fetch from the dataHeader
     */
    select?: dataHeaderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeaderInclude | null
  }



  /**
   * Model dataHeight
   */


  export type AggregateDataHeight = {
    _count: DataHeightCountAggregateOutputType | null
    _avg: DataHeightAvgAggregateOutputType | null
    _sum: DataHeightSumAggregateOutputType | null
    _min: DataHeightMinAggregateOutputType | null
    _max: DataHeightMaxAggregateOutputType | null
  }

  export type DataHeightAvgAggregateOutputType = {
    rid: number | null
    PointLoc: number | null
    PointNbr: number | null
    Height: number | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: Decimal | null
  }

  export type DataHeightSumAggregateOutputType = {
    rid: number | null
    PointLoc: number | null
    PointNbr: number | null
    Height: number | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: Decimal | null
  }

  export type DataHeightMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    PointLoc: number | null
    PointNbr: number | null
    RecKey: string | null
    Height: number | null
    Species: string | null
    Chkbox: string | null
    type: string | null
    GrowthHabit_measured: string | null
    LineKey: string | null
    DateModified: Date | null
    FormType: string | null
    FormDate: Date | null
    source: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: Decimal | null
    SpacingType: string | null
    HeightOption: string | null
    HeightUOM: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataHeightMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    PointLoc: number | null
    PointNbr: number | null
    RecKey: string | null
    Height: number | null
    Species: string | null
    Chkbox: string | null
    type: string | null
    GrowthHabit_measured: string | null
    LineKey: string | null
    DateModified: Date | null
    FormType: string | null
    FormDate: Date | null
    source: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: Decimal | null
    SpacingType: string | null
    HeightOption: string | null
    HeightUOM: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataHeightCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    PointLoc: number
    PointNbr: number
    RecKey: number
    Height: number
    Species: number
    Chkbox: number
    type: number
    GrowthHabit_measured: number
    LineKey: number
    DateModified: number
    FormType: number
    FormDate: number
    source: number
    Direction: number
    Measure: number
    LineLengthAmount: number
    SpacingIntervalAmount: number
    SpacingType: number
    HeightOption: number
    HeightUOM: number
    ShowCheckbox: number
    CheckboxLabel: number
    DateLoadedInDb: number
    DateVisited: number
    _all: number
  }


  export type DataHeightAvgAggregateInputType = {
    rid?: true
    PointLoc?: true
    PointNbr?: true
    Height?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
  }

  export type DataHeightSumAggregateInputType = {
    rid?: true
    PointLoc?: true
    PointNbr?: true
    Height?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
  }

  export type DataHeightMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    PointLoc?: true
    PointNbr?: true
    RecKey?: true
    Height?: true
    Species?: true
    Chkbox?: true
    type?: true
    GrowthHabit_measured?: true
    LineKey?: true
    DateModified?: true
    FormType?: true
    FormDate?: true
    source?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    HeightOption?: true
    HeightUOM?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataHeightMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    PointLoc?: true
    PointNbr?: true
    RecKey?: true
    Height?: true
    Species?: true
    Chkbox?: true
    type?: true
    GrowthHabit_measured?: true
    LineKey?: true
    DateModified?: true
    FormType?: true
    FormDate?: true
    source?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    HeightOption?: true
    HeightUOM?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataHeightCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    PointLoc?: true
    PointNbr?: true
    RecKey?: true
    Height?: true
    Species?: true
    Chkbox?: true
    type?: true
    GrowthHabit_measured?: true
    LineKey?: true
    DateModified?: true
    FormType?: true
    FormDate?: true
    source?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    HeightOption?: true
    HeightUOM?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    DateLoadedInDb?: true
    DateVisited?: true
    _all?: true
  }

  export type DataHeightAggregateArgs = {
    /**
     * Filter which dataHeight to aggregate.
     */
    where?: dataHeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeights to fetch.
     */
    orderBy?: Enumerable<dataHeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataHeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataHeights
    **/
    _count?: true | DataHeightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataHeightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataHeightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataHeightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataHeightMaxAggregateInputType
  }

  export type GetDataHeightAggregateType<T extends DataHeightAggregateArgs> = {
        [P in keyof T & keyof AggregateDataHeight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataHeight[P]>
      : GetScalarType<T[P], AggregateDataHeight[P]>
  }




  export type DataHeightGroupByArgs = {
    where?: dataHeightWhereInput
    orderBy?: Enumerable<dataHeightOrderByWithAggregationInput>
    by: DataHeightScalarFieldEnum[]
    having?: dataHeightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataHeightCountAggregateInputType | true
    _avg?: DataHeightAvgAggregateInputType
    _sum?: DataHeightSumAggregateInputType
    _min?: DataHeightMinAggregateInputType
    _max?: DataHeightMaxAggregateInputType
  }


  export type DataHeightGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    PointLoc: number | null
    PointNbr: number | null
    RecKey: string | null
    Height: number | null
    Species: string | null
    Chkbox: string | null
    type: string | null
    GrowthHabit_measured: string | null
    LineKey: string | null
    DateModified: Date | null
    FormType: string | null
    FormDate: Date | null
    source: string | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: Decimal | null
    SpacingType: string | null
    HeightOption: string | null
    HeightUOM: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
    _count: DataHeightCountAggregateOutputType | null
    _avg: DataHeightAvgAggregateOutputType | null
    _sum: DataHeightSumAggregateOutputType | null
    _min: DataHeightMinAggregateOutputType | null
    _max: DataHeightMaxAggregateOutputType | null
  }

  type GetDataHeightGroupByPayload<T extends DataHeightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataHeightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataHeightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataHeightGroupByOutputType[P]>
            : GetScalarType<T[P], DataHeightGroupByOutputType[P]>
        }
      >
    >


  export type dataHeightSelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    PointLoc?: boolean
    PointNbr?: boolean
    RecKey?: boolean
    Height?: boolean
    Species?: boolean
    Chkbox?: boolean
    type?: boolean
    GrowthHabit_measured?: boolean
    LineKey?: boolean
    DateModified?: boolean
    FormType?: boolean
    FormDate?: boolean
    source?: boolean
    Direction?: boolean
    Measure?: boolean
    LineLengthAmount?: boolean
    SpacingIntervalAmount?: boolean
    SpacingType?: boolean
    HeightOption?: boolean
    HeightUOM?: boolean
    ShowCheckbox?: boolean
    CheckboxLabel?: boolean
    DateLoadedInDb?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type dataHeightInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type dataHeightGetPayload<S extends boolean | null | undefined | dataHeightArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataHeight :
    S extends undefined ? never :
    S extends { include: any } & (dataHeightArgs | dataHeightFindManyArgs)
    ? dataHeight  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (dataHeightArgs | dataHeightFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof dataHeight ? dataHeight[P] : never
  } 
      : dataHeight


  type dataHeightCountArgs = 
    Omit<dataHeightFindManyArgs, 'select' | 'include'> & {
      select?: DataHeightCountAggregateInputType | true
    }

  export interface dataHeightDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataHeight that matches the filter.
     * @param {dataHeightFindUniqueArgs} args - Arguments to find a DataHeight
     * @example
     * // Get one DataHeight
     * const dataHeight = await prisma.dataHeight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataHeightFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataHeightFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataHeight'> extends True ? Prisma__dataHeightClient<dataHeightGetPayload<T>> : Prisma__dataHeightClient<dataHeightGetPayload<T> | null, null>

    /**
     * Find one DataHeight that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataHeightFindUniqueOrThrowArgs} args - Arguments to find a DataHeight
     * @example
     * // Get one DataHeight
     * const dataHeight = await prisma.dataHeight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataHeightFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataHeightFindUniqueOrThrowArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Find the first DataHeight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeightFindFirstArgs} args - Arguments to find a DataHeight
     * @example
     * // Get one DataHeight
     * const dataHeight = await prisma.dataHeight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataHeightFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataHeightFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataHeight'> extends True ? Prisma__dataHeightClient<dataHeightGetPayload<T>> : Prisma__dataHeightClient<dataHeightGetPayload<T> | null, null>

    /**
     * Find the first DataHeight that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeightFindFirstOrThrowArgs} args - Arguments to find a DataHeight
     * @example
     * // Get one DataHeight
     * const dataHeight = await prisma.dataHeight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataHeightFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataHeightFindFirstOrThrowArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Find zero or more DataHeights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataHeights
     * const dataHeights = await prisma.dataHeight.findMany()
     * 
     * // Get first 10 DataHeights
     * const dataHeights = await prisma.dataHeight.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const dataHeightWithRidOnly = await prisma.dataHeight.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends dataHeightFindManyArgs>(
      args?: SelectSubset<T, dataHeightFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataHeightGetPayload<T>>>

    /**
     * Create a DataHeight.
     * @param {dataHeightCreateArgs} args - Arguments to create a DataHeight.
     * @example
     * // Create one DataHeight
     * const DataHeight = await prisma.dataHeight.create({
     *   data: {
     *     // ... data to create a DataHeight
     *   }
     * })
     * 
    **/
    create<T extends dataHeightCreateArgs>(
      args: SelectSubset<T, dataHeightCreateArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Create many DataHeights.
     *     @param {dataHeightCreateManyArgs} args - Arguments to create many DataHeights.
     *     @example
     *     // Create many DataHeights
     *     const dataHeight = await prisma.dataHeight.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataHeightCreateManyArgs>(
      args?: SelectSubset<T, dataHeightCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataHeight.
     * @param {dataHeightDeleteArgs} args - Arguments to delete one DataHeight.
     * @example
     * // Delete one DataHeight
     * const DataHeight = await prisma.dataHeight.delete({
     *   where: {
     *     // ... filter to delete one DataHeight
     *   }
     * })
     * 
    **/
    delete<T extends dataHeightDeleteArgs>(
      args: SelectSubset<T, dataHeightDeleteArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Update one DataHeight.
     * @param {dataHeightUpdateArgs} args - Arguments to update one DataHeight.
     * @example
     * // Update one DataHeight
     * const dataHeight = await prisma.dataHeight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataHeightUpdateArgs>(
      args: SelectSubset<T, dataHeightUpdateArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Delete zero or more DataHeights.
     * @param {dataHeightDeleteManyArgs} args - Arguments to filter DataHeights to delete.
     * @example
     * // Delete a few DataHeights
     * const { count } = await prisma.dataHeight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataHeightDeleteManyArgs>(
      args?: SelectSubset<T, dataHeightDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataHeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataHeights
     * const dataHeight = await prisma.dataHeight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataHeightUpdateManyArgs>(
      args: SelectSubset<T, dataHeightUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataHeight.
     * @param {dataHeightUpsertArgs} args - Arguments to update or create a DataHeight.
     * @example
     * // Update or create a DataHeight
     * const dataHeight = await prisma.dataHeight.upsert({
     *   create: {
     *     // ... data to create a DataHeight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataHeight we want to update
     *   }
     * })
    **/
    upsert<T extends dataHeightUpsertArgs>(
      args: SelectSubset<T, dataHeightUpsertArgs>
    ): Prisma__dataHeightClient<dataHeightGetPayload<T>>

    /**
     * Count the number of DataHeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataHeightCountArgs} args - Arguments to filter DataHeights to count.
     * @example
     * // Count the number of DataHeights
     * const count = await prisma.dataHeight.count({
     *   where: {
     *     // ... the filter for the DataHeights we want to count
     *   }
     * })
    **/
    count<T extends dataHeightCountArgs>(
      args?: Subset<T, dataHeightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataHeightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataHeight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataHeightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataHeightAggregateArgs>(args: Subset<T, DataHeightAggregateArgs>): Prisma.PrismaPromise<GetDataHeightAggregateType<T>>

    /**
     * Group by DataHeight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataHeightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataHeightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataHeightGroupByArgs['orderBy'] }
        : { orderBy?: DataHeightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataHeightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataHeightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataHeight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataHeightClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataHeight base type for findUnique actions
   */
  export type dataHeightFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter, which dataHeight to fetch.
     */
    where: dataHeightWhereUniqueInput
  }

  /**
   * dataHeight findUnique
   */
  export interface dataHeightFindUniqueArgs extends dataHeightFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataHeight findUniqueOrThrow
   */
  export type dataHeightFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter, which dataHeight to fetch.
     */
    where: dataHeightWhereUniqueInput
  }


  /**
   * dataHeight base type for findFirst actions
   */
  export type dataHeightFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter, which dataHeight to fetch.
     */
    where?: dataHeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeights to fetch.
     */
    orderBy?: Enumerable<dataHeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataHeights.
     */
    cursor?: dataHeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataHeights.
     */
    distinct?: Enumerable<DataHeightScalarFieldEnum>
  }

  /**
   * dataHeight findFirst
   */
  export interface dataHeightFindFirstArgs extends dataHeightFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataHeight findFirstOrThrow
   */
  export type dataHeightFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter, which dataHeight to fetch.
     */
    where?: dataHeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeights to fetch.
     */
    orderBy?: Enumerable<dataHeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataHeights.
     */
    cursor?: dataHeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataHeights.
     */
    distinct?: Enumerable<DataHeightScalarFieldEnum>
  }


  /**
   * dataHeight findMany
   */
  export type dataHeightFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter, which dataHeights to fetch.
     */
    where?: dataHeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataHeights to fetch.
     */
    orderBy?: Enumerable<dataHeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataHeights.
     */
    cursor?: dataHeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataHeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataHeights.
     */
    skip?: number
    distinct?: Enumerable<DataHeightScalarFieldEnum>
  }


  /**
   * dataHeight create
   */
  export type dataHeightCreateArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * The data needed to create a dataHeight.
     */
    data: XOR<dataHeightCreateInput, dataHeightUncheckedCreateInput>
  }


  /**
   * dataHeight createMany
   */
  export type dataHeightCreateManyArgs = {
    /**
     * The data used to create many dataHeights.
     */
    data: Enumerable<dataHeightCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataHeight update
   */
  export type dataHeightUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * The data needed to update a dataHeight.
     */
    data: XOR<dataHeightUpdateInput, dataHeightUncheckedUpdateInput>
    /**
     * Choose, which dataHeight to update.
     */
    where: dataHeightWhereUniqueInput
  }


  /**
   * dataHeight updateMany
   */
  export type dataHeightUpdateManyArgs = {
    /**
     * The data used to update dataHeights.
     */
    data: XOR<dataHeightUpdateManyMutationInput, dataHeightUncheckedUpdateManyInput>
    /**
     * Filter which dataHeights to update
     */
    where?: dataHeightWhereInput
  }


  /**
   * dataHeight upsert
   */
  export type dataHeightUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * The filter to search for the dataHeight to update in case it exists.
     */
    where: dataHeightWhereUniqueInput
    /**
     * In case the dataHeight found by the `where` argument doesn't exist, create a new dataHeight with this data.
     */
    create: XOR<dataHeightCreateInput, dataHeightUncheckedCreateInput>
    /**
     * In case the dataHeight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataHeightUpdateInput, dataHeightUncheckedUpdateInput>
  }


  /**
   * dataHeight delete
   */
  export type dataHeightDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
    /**
     * Filter which dataHeight to delete.
     */
    where: dataHeightWhereUniqueInput
  }


  /**
   * dataHeight deleteMany
   */
  export type dataHeightDeleteManyArgs = {
    /**
     * Filter which dataHeights to delete
     */
    where?: dataHeightWhereInput
  }


  /**
   * dataHeight without action
   */
  export type dataHeightArgs = {
    /**
     * Select specific fields to fetch from the dataHeight
     */
    select?: dataHeightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataHeightInclude | null
  }



  /**
   * Model dataLPI
   */


  export type AggregateDataLPI = {
    _count: DataLPICountAggregateOutputType | null
    _avg: DataLPIAvgAggregateOutputType | null
    _sum: DataLPISumAggregateOutputType | null
    _min: DataLPIMinAggregateOutputType | null
    _max: DataLPIMaxAggregateOutputType | null
  }

  export type DataLPIAvgAggregateOutputType = {
    rid: number | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: number | null
    PointLoc: number | null
    PointNbr: number | null
  }

  export type DataLPISumAggregateOutputType = {
    rid: number | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: number | null
    PointLoc: number | null
    PointNbr: number | null
  }

  export type DataLPIMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    LineKey: string | null
    RecKey: string | null
    layer: string | null
    code: string | null
    chckbox: string | null
    ShrubShape: string | null
    FormType: string | null
    FormDate: Date | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: number | null
    SpacingType: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    PointLoc: number | null
    PointNbr: number | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataLPIMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    LineKey: string | null
    RecKey: string | null
    layer: string | null
    code: string | null
    chckbox: string | null
    ShrubShape: string | null
    FormType: string | null
    FormDate: Date | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: number | null
    SpacingType: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    PointLoc: number | null
    PointNbr: number | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataLPICountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    LineKey: number
    RecKey: number
    layer: number
    code: number
    chckbox: number
    ShrubShape: number
    FormType: number
    FormDate: number
    Direction: number
    Measure: number
    LineLengthAmount: number
    SpacingIntervalAmount: number
    SpacingType: number
    ShowCheckbox: number
    CheckboxLabel: number
    PointLoc: number
    PointNbr: number
    source: number
    DateLoadedInDb: number
    DateVisited: number
    _all: number
  }


  export type DataLPIAvgAggregateInputType = {
    rid?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    PointLoc?: true
    PointNbr?: true
  }

  export type DataLPISumAggregateInputType = {
    rid?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    PointLoc?: true
    PointNbr?: true
  }

  export type DataLPIMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    LineKey?: true
    RecKey?: true
    layer?: true
    code?: true
    chckbox?: true
    ShrubShape?: true
    FormType?: true
    FormDate?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    PointLoc?: true
    PointNbr?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataLPIMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    LineKey?: true
    RecKey?: true
    layer?: true
    code?: true
    chckbox?: true
    ShrubShape?: true
    FormType?: true
    FormDate?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    PointLoc?: true
    PointNbr?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataLPICountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    LineKey?: true
    RecKey?: true
    layer?: true
    code?: true
    chckbox?: true
    ShrubShape?: true
    FormType?: true
    FormDate?: true
    Direction?: true
    Measure?: true
    LineLengthAmount?: true
    SpacingIntervalAmount?: true
    SpacingType?: true
    ShowCheckbox?: true
    CheckboxLabel?: true
    PointLoc?: true
    PointNbr?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
    _all?: true
  }

  export type DataLPIAggregateArgs = {
    /**
     * Filter which dataLPI to aggregate.
     */
    where?: dataLPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataLPIS to fetch.
     */
    orderBy?: Enumerable<dataLPIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataLPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataLPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataLPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataLPIS
    **/
    _count?: true | DataLPICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataLPIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataLPISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataLPIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataLPIMaxAggregateInputType
  }

  export type GetDataLPIAggregateType<T extends DataLPIAggregateArgs> = {
        [P in keyof T & keyof AggregateDataLPI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataLPI[P]>
      : GetScalarType<T[P], AggregateDataLPI[P]>
  }




  export type DataLPIGroupByArgs = {
    where?: dataLPIWhereInput
    orderBy?: Enumerable<dataLPIOrderByWithAggregationInput>
    by: DataLPIScalarFieldEnum[]
    having?: dataLPIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataLPICountAggregateInputType | true
    _avg?: DataLPIAvgAggregateInputType
    _sum?: DataLPISumAggregateInputType
    _min?: DataLPIMinAggregateInputType
    _max?: DataLPIMaxAggregateInputType
  }


  export type DataLPIGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    LineKey: string | null
    RecKey: string | null
    layer: string | null
    code: string | null
    chckbox: string | null
    ShrubShape: string | null
    FormType: string | null
    FormDate: Date | null
    Direction: string | null
    Measure: number | null
    LineLengthAmount: number | null
    SpacingIntervalAmount: number | null
    SpacingType: string | null
    ShowCheckbox: string | null
    CheckboxLabel: string | null
    PointLoc: number | null
    PointNbr: number | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
    _count: DataLPICountAggregateOutputType | null
    _avg: DataLPIAvgAggregateOutputType | null
    _sum: DataLPISumAggregateOutputType | null
    _min: DataLPIMinAggregateOutputType | null
    _max: DataLPIMaxAggregateOutputType | null
  }

  type GetDataLPIGroupByPayload<T extends DataLPIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataLPIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataLPIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataLPIGroupByOutputType[P]>
            : GetScalarType<T[P], DataLPIGroupByOutputType[P]>
        }
      >
    >


  export type dataLPISelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    LineKey?: boolean
    RecKey?: boolean
    layer?: boolean
    code?: boolean
    chckbox?: boolean
    ShrubShape?: boolean
    FormType?: boolean
    FormDate?: boolean
    Direction?: boolean
    Measure?: boolean
    LineLengthAmount?: boolean
    SpacingIntervalAmount?: boolean
    SpacingType?: boolean
    ShowCheckbox?: boolean
    CheckboxLabel?: boolean
    PointLoc?: boolean
    PointNbr?: boolean
    source?: boolean
    DateLoadedInDb?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type dataLPIInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type dataLPIGetPayload<S extends boolean | null | undefined | dataLPIArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataLPI :
    S extends undefined ? never :
    S extends { include: any } & (dataLPIArgs | dataLPIFindManyArgs)
    ? dataLPI  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (dataLPIArgs | dataLPIFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof dataLPI ? dataLPI[P] : never
  } 
      : dataLPI


  type dataLPICountArgs = 
    Omit<dataLPIFindManyArgs, 'select' | 'include'> & {
      select?: DataLPICountAggregateInputType | true
    }

  export interface dataLPIDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataLPI that matches the filter.
     * @param {dataLPIFindUniqueArgs} args - Arguments to find a DataLPI
     * @example
     * // Get one DataLPI
     * const dataLPI = await prisma.dataLPI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataLPIFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataLPIFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataLPI'> extends True ? Prisma__dataLPIClient<dataLPIGetPayload<T>> : Prisma__dataLPIClient<dataLPIGetPayload<T> | null, null>

    /**
     * Find one DataLPI that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataLPIFindUniqueOrThrowArgs} args - Arguments to find a DataLPI
     * @example
     * // Get one DataLPI
     * const dataLPI = await prisma.dataLPI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataLPIFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataLPIFindUniqueOrThrowArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Find the first DataLPI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataLPIFindFirstArgs} args - Arguments to find a DataLPI
     * @example
     * // Get one DataLPI
     * const dataLPI = await prisma.dataLPI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataLPIFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataLPIFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataLPI'> extends True ? Prisma__dataLPIClient<dataLPIGetPayload<T>> : Prisma__dataLPIClient<dataLPIGetPayload<T> | null, null>

    /**
     * Find the first DataLPI that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataLPIFindFirstOrThrowArgs} args - Arguments to find a DataLPI
     * @example
     * // Get one DataLPI
     * const dataLPI = await prisma.dataLPI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataLPIFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataLPIFindFirstOrThrowArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Find zero or more DataLPIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataLPIFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataLPIS
     * const dataLPIS = await prisma.dataLPI.findMany()
     * 
     * // Get first 10 DataLPIS
     * const dataLPIS = await prisma.dataLPI.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const dataLPIWithRidOnly = await prisma.dataLPI.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends dataLPIFindManyArgs>(
      args?: SelectSubset<T, dataLPIFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataLPIGetPayload<T>>>

    /**
     * Create a DataLPI.
     * @param {dataLPICreateArgs} args - Arguments to create a DataLPI.
     * @example
     * // Create one DataLPI
     * const DataLPI = await prisma.dataLPI.create({
     *   data: {
     *     // ... data to create a DataLPI
     *   }
     * })
     * 
    **/
    create<T extends dataLPICreateArgs>(
      args: SelectSubset<T, dataLPICreateArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Create many DataLPIS.
     *     @param {dataLPICreateManyArgs} args - Arguments to create many DataLPIS.
     *     @example
     *     // Create many DataLPIS
     *     const dataLPI = await prisma.dataLPI.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataLPICreateManyArgs>(
      args?: SelectSubset<T, dataLPICreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataLPI.
     * @param {dataLPIDeleteArgs} args - Arguments to delete one DataLPI.
     * @example
     * // Delete one DataLPI
     * const DataLPI = await prisma.dataLPI.delete({
     *   where: {
     *     // ... filter to delete one DataLPI
     *   }
     * })
     * 
    **/
    delete<T extends dataLPIDeleteArgs>(
      args: SelectSubset<T, dataLPIDeleteArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Update one DataLPI.
     * @param {dataLPIUpdateArgs} args - Arguments to update one DataLPI.
     * @example
     * // Update one DataLPI
     * const dataLPI = await prisma.dataLPI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataLPIUpdateArgs>(
      args: SelectSubset<T, dataLPIUpdateArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Delete zero or more DataLPIS.
     * @param {dataLPIDeleteManyArgs} args - Arguments to filter DataLPIS to delete.
     * @example
     * // Delete a few DataLPIS
     * const { count } = await prisma.dataLPI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataLPIDeleteManyArgs>(
      args?: SelectSubset<T, dataLPIDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataLPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataLPIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataLPIS
     * const dataLPI = await prisma.dataLPI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataLPIUpdateManyArgs>(
      args: SelectSubset<T, dataLPIUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataLPI.
     * @param {dataLPIUpsertArgs} args - Arguments to update or create a DataLPI.
     * @example
     * // Update or create a DataLPI
     * const dataLPI = await prisma.dataLPI.upsert({
     *   create: {
     *     // ... data to create a DataLPI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataLPI we want to update
     *   }
     * })
    **/
    upsert<T extends dataLPIUpsertArgs>(
      args: SelectSubset<T, dataLPIUpsertArgs>
    ): Prisma__dataLPIClient<dataLPIGetPayload<T>>

    /**
     * Count the number of DataLPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataLPICountArgs} args - Arguments to filter DataLPIS to count.
     * @example
     * // Count the number of DataLPIS
     * const count = await prisma.dataLPI.count({
     *   where: {
     *     // ... the filter for the DataLPIS we want to count
     *   }
     * })
    **/
    count<T extends dataLPICountArgs>(
      args?: Subset<T, dataLPICountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataLPICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataLPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLPIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataLPIAggregateArgs>(args: Subset<T, DataLPIAggregateArgs>): Prisma.PrismaPromise<GetDataLPIAggregateType<T>>

    /**
     * Group by DataLPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLPIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataLPIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataLPIGroupByArgs['orderBy'] }
        : { orderBy?: DataLPIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataLPIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataLPIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataLPI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataLPIClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataLPI base type for findUnique actions
   */
  export type dataLPIFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter, which dataLPI to fetch.
     */
    where: dataLPIWhereUniqueInput
  }

  /**
   * dataLPI findUnique
   */
  export interface dataLPIFindUniqueArgs extends dataLPIFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataLPI findUniqueOrThrow
   */
  export type dataLPIFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter, which dataLPI to fetch.
     */
    where: dataLPIWhereUniqueInput
  }


  /**
   * dataLPI base type for findFirst actions
   */
  export type dataLPIFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter, which dataLPI to fetch.
     */
    where?: dataLPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataLPIS to fetch.
     */
    orderBy?: Enumerable<dataLPIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataLPIS.
     */
    cursor?: dataLPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataLPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataLPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataLPIS.
     */
    distinct?: Enumerable<DataLPIScalarFieldEnum>
  }

  /**
   * dataLPI findFirst
   */
  export interface dataLPIFindFirstArgs extends dataLPIFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataLPI findFirstOrThrow
   */
  export type dataLPIFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter, which dataLPI to fetch.
     */
    where?: dataLPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataLPIS to fetch.
     */
    orderBy?: Enumerable<dataLPIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataLPIS.
     */
    cursor?: dataLPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataLPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataLPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataLPIS.
     */
    distinct?: Enumerable<DataLPIScalarFieldEnum>
  }


  /**
   * dataLPI findMany
   */
  export type dataLPIFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter, which dataLPIS to fetch.
     */
    where?: dataLPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataLPIS to fetch.
     */
    orderBy?: Enumerable<dataLPIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataLPIS.
     */
    cursor?: dataLPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataLPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataLPIS.
     */
    skip?: number
    distinct?: Enumerable<DataLPIScalarFieldEnum>
  }


  /**
   * dataLPI create
   */
  export type dataLPICreateArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * The data needed to create a dataLPI.
     */
    data: XOR<dataLPICreateInput, dataLPIUncheckedCreateInput>
  }


  /**
   * dataLPI createMany
   */
  export type dataLPICreateManyArgs = {
    /**
     * The data used to create many dataLPIS.
     */
    data: Enumerable<dataLPICreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataLPI update
   */
  export type dataLPIUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * The data needed to update a dataLPI.
     */
    data: XOR<dataLPIUpdateInput, dataLPIUncheckedUpdateInput>
    /**
     * Choose, which dataLPI to update.
     */
    where: dataLPIWhereUniqueInput
  }


  /**
   * dataLPI updateMany
   */
  export type dataLPIUpdateManyArgs = {
    /**
     * The data used to update dataLPIS.
     */
    data: XOR<dataLPIUpdateManyMutationInput, dataLPIUncheckedUpdateManyInput>
    /**
     * Filter which dataLPIS to update
     */
    where?: dataLPIWhereInput
  }


  /**
   * dataLPI upsert
   */
  export type dataLPIUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * The filter to search for the dataLPI to update in case it exists.
     */
    where: dataLPIWhereUniqueInput
    /**
     * In case the dataLPI found by the `where` argument doesn't exist, create a new dataLPI with this data.
     */
    create: XOR<dataLPICreateInput, dataLPIUncheckedCreateInput>
    /**
     * In case the dataLPI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataLPIUpdateInput, dataLPIUncheckedUpdateInput>
  }


  /**
   * dataLPI delete
   */
  export type dataLPIDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
    /**
     * Filter which dataLPI to delete.
     */
    where: dataLPIWhereUniqueInput
  }


  /**
   * dataLPI deleteMany
   */
  export type dataLPIDeleteManyArgs = {
    /**
     * Filter which dataLPIS to delete
     */
    where?: dataLPIWhereInput
  }


  /**
   * dataLPI without action
   */
  export type dataLPIArgs = {
    /**
     * Select specific fields to fetch from the dataLPI
     */
    select?: dataLPISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataLPIInclude | null
  }



  /**
   * Model dataSoilStability
   */


  export type AggregateDataSoilStability = {
    _count: DataSoilStabilityCountAggregateOutputType | null
    _avg: DataSoilStabilityAvgAggregateOutputType | null
    _sum: DataSoilStabilitySumAggregateOutputType | null
    _min: DataSoilStabilityMinAggregateOutputType | null
    _max: DataSoilStabilityMaxAggregateOutputType | null
  }

  export type DataSoilStabilityAvgAggregateOutputType = {
    rid: number | null
    SoilStabSubSurface: number | null
    Position: number | null
    Rating: number | null
  }

  export type DataSoilStabilitySumAggregateOutputType = {
    rid: number | null
    SoilStabSubSurface: number | null
    Position: number | null
    Rating: number | null
  }

  export type DataSoilStabilityMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    LineKey: string | null
    SoilStabSubSurface: number | null
    Line: string | null
    Position: number | null
    Pos: string | null
    Veg: string | null
    Rating: number | null
    Hydro: string | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataSoilStabilityMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    LineKey: string | null
    SoilStabSubSurface: number | null
    Line: string | null
    Position: number | null
    Pos: string | null
    Veg: string | null
    Rating: number | null
    Hydro: string | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataSoilStabilityCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    RecKey: number
    FormType: number
    FormDate: number
    LineKey: number
    SoilStabSubSurface: number
    Line: number
    Position: number
    Pos: number
    Veg: number
    Rating: number
    Hydro: number
    Notes: number
    source: number
    DateLoadedInDb: number
    DateVisited: number
    _all: number
  }


  export type DataSoilStabilityAvgAggregateInputType = {
    rid?: true
    SoilStabSubSurface?: true
    Position?: true
    Rating?: true
  }

  export type DataSoilStabilitySumAggregateInputType = {
    rid?: true
    SoilStabSubSurface?: true
    Position?: true
    Rating?: true
  }

  export type DataSoilStabilityMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    LineKey?: true
    SoilStabSubSurface?: true
    Line?: true
    Position?: true
    Pos?: true
    Veg?: true
    Rating?: true
    Hydro?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataSoilStabilityMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    LineKey?: true
    SoilStabSubSurface?: true
    Line?: true
    Position?: true
    Pos?: true
    Veg?: true
    Rating?: true
    Hydro?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataSoilStabilityCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    LineKey?: true
    SoilStabSubSurface?: true
    Line?: true
    Position?: true
    Pos?: true
    Veg?: true
    Rating?: true
    Hydro?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
    _all?: true
  }

  export type DataSoilStabilityAggregateArgs = {
    /**
     * Filter which dataSoilStability to aggregate.
     */
    where?: dataSoilStabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSoilStabilities to fetch.
     */
    orderBy?: Enumerable<dataSoilStabilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataSoilStabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSoilStabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSoilStabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataSoilStabilities
    **/
    _count?: true | DataSoilStabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataSoilStabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSoilStabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSoilStabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSoilStabilityMaxAggregateInputType
  }

  export type GetDataSoilStabilityAggregateType<T extends DataSoilStabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSoilStability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSoilStability[P]>
      : GetScalarType<T[P], AggregateDataSoilStability[P]>
  }




  export type DataSoilStabilityGroupByArgs = {
    where?: dataSoilStabilityWhereInput
    orderBy?: Enumerable<dataSoilStabilityOrderByWithAggregationInput>
    by: DataSoilStabilityScalarFieldEnum[]
    having?: dataSoilStabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSoilStabilityCountAggregateInputType | true
    _avg?: DataSoilStabilityAvgAggregateInputType
    _sum?: DataSoilStabilitySumAggregateInputType
    _min?: DataSoilStabilityMinAggregateInputType
    _max?: DataSoilStabilityMaxAggregateInputType
  }


  export type DataSoilStabilityGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    LineKey: string | null
    SoilStabSubSurface: number | null
    Line: string | null
    Position: number | null
    Pos: string | null
    Veg: string | null
    Rating: number | null
    Hydro: string | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
    _count: DataSoilStabilityCountAggregateOutputType | null
    _avg: DataSoilStabilityAvgAggregateOutputType | null
    _sum: DataSoilStabilitySumAggregateOutputType | null
    _min: DataSoilStabilityMinAggregateOutputType | null
    _max: DataSoilStabilityMaxAggregateOutputType | null
  }

  type GetDataSoilStabilityGroupByPayload<T extends DataSoilStabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataSoilStabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSoilStabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSoilStabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DataSoilStabilityGroupByOutputType[P]>
        }
      >
    >


  export type dataSoilStabilitySelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    RecKey?: boolean
    FormType?: boolean
    FormDate?: boolean
    LineKey?: boolean
    SoilStabSubSurface?: boolean
    Line?: boolean
    Position?: boolean
    Pos?: boolean
    Veg?: boolean
    Rating?: boolean
    Hydro?: boolean
    Notes?: boolean
    source?: boolean
    DateLoadedInDb?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type dataSoilStabilityInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type dataSoilStabilityGetPayload<S extends boolean | null | undefined | dataSoilStabilityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataSoilStability :
    S extends undefined ? never :
    S extends { include: any } & (dataSoilStabilityArgs | dataSoilStabilityFindManyArgs)
    ? dataSoilStability  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (dataSoilStabilityArgs | dataSoilStabilityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof dataSoilStability ? dataSoilStability[P] : never
  } 
      : dataSoilStability


  type dataSoilStabilityCountArgs = 
    Omit<dataSoilStabilityFindManyArgs, 'select' | 'include'> & {
      select?: DataSoilStabilityCountAggregateInputType | true
    }

  export interface dataSoilStabilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataSoilStability that matches the filter.
     * @param {dataSoilStabilityFindUniqueArgs} args - Arguments to find a DataSoilStability
     * @example
     * // Get one DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataSoilStabilityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataSoilStabilityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataSoilStability'> extends True ? Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>> : Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T> | null, null>

    /**
     * Find one DataSoilStability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataSoilStabilityFindUniqueOrThrowArgs} args - Arguments to find a DataSoilStability
     * @example
     * // Get one DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataSoilStabilityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataSoilStabilityFindUniqueOrThrowArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Find the first DataSoilStability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSoilStabilityFindFirstArgs} args - Arguments to find a DataSoilStability
     * @example
     * // Get one DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataSoilStabilityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataSoilStabilityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataSoilStability'> extends True ? Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>> : Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T> | null, null>

    /**
     * Find the first DataSoilStability that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSoilStabilityFindFirstOrThrowArgs} args - Arguments to find a DataSoilStability
     * @example
     * // Get one DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataSoilStabilityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataSoilStabilityFindFirstOrThrowArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Find zero or more DataSoilStabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSoilStabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSoilStabilities
     * const dataSoilStabilities = await prisma.dataSoilStability.findMany()
     * 
     * // Get first 10 DataSoilStabilities
     * const dataSoilStabilities = await prisma.dataSoilStability.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const dataSoilStabilityWithRidOnly = await prisma.dataSoilStability.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends dataSoilStabilityFindManyArgs>(
      args?: SelectSubset<T, dataSoilStabilityFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataSoilStabilityGetPayload<T>>>

    /**
     * Create a DataSoilStability.
     * @param {dataSoilStabilityCreateArgs} args - Arguments to create a DataSoilStability.
     * @example
     * // Create one DataSoilStability
     * const DataSoilStability = await prisma.dataSoilStability.create({
     *   data: {
     *     // ... data to create a DataSoilStability
     *   }
     * })
     * 
    **/
    create<T extends dataSoilStabilityCreateArgs>(
      args: SelectSubset<T, dataSoilStabilityCreateArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Create many DataSoilStabilities.
     *     @param {dataSoilStabilityCreateManyArgs} args - Arguments to create many DataSoilStabilities.
     *     @example
     *     // Create many DataSoilStabilities
     *     const dataSoilStability = await prisma.dataSoilStability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataSoilStabilityCreateManyArgs>(
      args?: SelectSubset<T, dataSoilStabilityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataSoilStability.
     * @param {dataSoilStabilityDeleteArgs} args - Arguments to delete one DataSoilStability.
     * @example
     * // Delete one DataSoilStability
     * const DataSoilStability = await prisma.dataSoilStability.delete({
     *   where: {
     *     // ... filter to delete one DataSoilStability
     *   }
     * })
     * 
    **/
    delete<T extends dataSoilStabilityDeleteArgs>(
      args: SelectSubset<T, dataSoilStabilityDeleteArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Update one DataSoilStability.
     * @param {dataSoilStabilityUpdateArgs} args - Arguments to update one DataSoilStability.
     * @example
     * // Update one DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataSoilStabilityUpdateArgs>(
      args: SelectSubset<T, dataSoilStabilityUpdateArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Delete zero or more DataSoilStabilities.
     * @param {dataSoilStabilityDeleteManyArgs} args - Arguments to filter DataSoilStabilities to delete.
     * @example
     * // Delete a few DataSoilStabilities
     * const { count } = await prisma.dataSoilStability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataSoilStabilityDeleteManyArgs>(
      args?: SelectSubset<T, dataSoilStabilityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSoilStabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSoilStabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSoilStabilities
     * const dataSoilStability = await prisma.dataSoilStability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataSoilStabilityUpdateManyArgs>(
      args: SelectSubset<T, dataSoilStabilityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataSoilStability.
     * @param {dataSoilStabilityUpsertArgs} args - Arguments to update or create a DataSoilStability.
     * @example
     * // Update or create a DataSoilStability
     * const dataSoilStability = await prisma.dataSoilStability.upsert({
     *   create: {
     *     // ... data to create a DataSoilStability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSoilStability we want to update
     *   }
     * })
    **/
    upsert<T extends dataSoilStabilityUpsertArgs>(
      args: SelectSubset<T, dataSoilStabilityUpsertArgs>
    ): Prisma__dataSoilStabilityClient<dataSoilStabilityGetPayload<T>>

    /**
     * Count the number of DataSoilStabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSoilStabilityCountArgs} args - Arguments to filter DataSoilStabilities to count.
     * @example
     * // Count the number of DataSoilStabilities
     * const count = await prisma.dataSoilStability.count({
     *   where: {
     *     // ... the filter for the DataSoilStabilities we want to count
     *   }
     * })
    **/
    count<T extends dataSoilStabilityCountArgs>(
      args?: Subset<T, dataSoilStabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSoilStabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSoilStability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSoilStabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataSoilStabilityAggregateArgs>(args: Subset<T, DataSoilStabilityAggregateArgs>): Prisma.PrismaPromise<GetDataSoilStabilityAggregateType<T>>

    /**
     * Group by DataSoilStability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSoilStabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataSoilStabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSoilStabilityGroupByArgs['orderBy'] }
        : { orderBy?: DataSoilStabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataSoilStabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSoilStabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataSoilStability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataSoilStabilityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataSoilStability base type for findUnique actions
   */
  export type dataSoilStabilityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter, which dataSoilStability to fetch.
     */
    where: dataSoilStabilityWhereUniqueInput
  }

  /**
   * dataSoilStability findUnique
   */
  export interface dataSoilStabilityFindUniqueArgs extends dataSoilStabilityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataSoilStability findUniqueOrThrow
   */
  export type dataSoilStabilityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter, which dataSoilStability to fetch.
     */
    where: dataSoilStabilityWhereUniqueInput
  }


  /**
   * dataSoilStability base type for findFirst actions
   */
  export type dataSoilStabilityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter, which dataSoilStability to fetch.
     */
    where?: dataSoilStabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSoilStabilities to fetch.
     */
    orderBy?: Enumerable<dataSoilStabilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataSoilStabilities.
     */
    cursor?: dataSoilStabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSoilStabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSoilStabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataSoilStabilities.
     */
    distinct?: Enumerable<DataSoilStabilityScalarFieldEnum>
  }

  /**
   * dataSoilStability findFirst
   */
  export interface dataSoilStabilityFindFirstArgs extends dataSoilStabilityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataSoilStability findFirstOrThrow
   */
  export type dataSoilStabilityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter, which dataSoilStability to fetch.
     */
    where?: dataSoilStabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSoilStabilities to fetch.
     */
    orderBy?: Enumerable<dataSoilStabilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataSoilStabilities.
     */
    cursor?: dataSoilStabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSoilStabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSoilStabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataSoilStabilities.
     */
    distinct?: Enumerable<DataSoilStabilityScalarFieldEnum>
  }


  /**
   * dataSoilStability findMany
   */
  export type dataSoilStabilityFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter, which dataSoilStabilities to fetch.
     */
    where?: dataSoilStabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSoilStabilities to fetch.
     */
    orderBy?: Enumerable<dataSoilStabilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataSoilStabilities.
     */
    cursor?: dataSoilStabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSoilStabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSoilStabilities.
     */
    skip?: number
    distinct?: Enumerable<DataSoilStabilityScalarFieldEnum>
  }


  /**
   * dataSoilStability create
   */
  export type dataSoilStabilityCreateArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * The data needed to create a dataSoilStability.
     */
    data: XOR<dataSoilStabilityCreateInput, dataSoilStabilityUncheckedCreateInput>
  }


  /**
   * dataSoilStability createMany
   */
  export type dataSoilStabilityCreateManyArgs = {
    /**
     * The data used to create many dataSoilStabilities.
     */
    data: Enumerable<dataSoilStabilityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataSoilStability update
   */
  export type dataSoilStabilityUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * The data needed to update a dataSoilStability.
     */
    data: XOR<dataSoilStabilityUpdateInput, dataSoilStabilityUncheckedUpdateInput>
    /**
     * Choose, which dataSoilStability to update.
     */
    where: dataSoilStabilityWhereUniqueInput
  }


  /**
   * dataSoilStability updateMany
   */
  export type dataSoilStabilityUpdateManyArgs = {
    /**
     * The data used to update dataSoilStabilities.
     */
    data: XOR<dataSoilStabilityUpdateManyMutationInput, dataSoilStabilityUncheckedUpdateManyInput>
    /**
     * Filter which dataSoilStabilities to update
     */
    where?: dataSoilStabilityWhereInput
  }


  /**
   * dataSoilStability upsert
   */
  export type dataSoilStabilityUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * The filter to search for the dataSoilStability to update in case it exists.
     */
    where: dataSoilStabilityWhereUniqueInput
    /**
     * In case the dataSoilStability found by the `where` argument doesn't exist, create a new dataSoilStability with this data.
     */
    create: XOR<dataSoilStabilityCreateInput, dataSoilStabilityUncheckedCreateInput>
    /**
     * In case the dataSoilStability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataSoilStabilityUpdateInput, dataSoilStabilityUncheckedUpdateInput>
  }


  /**
   * dataSoilStability delete
   */
  export type dataSoilStabilityDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
    /**
     * Filter which dataSoilStability to delete.
     */
    where: dataSoilStabilityWhereUniqueInput
  }


  /**
   * dataSoilStability deleteMany
   */
  export type dataSoilStabilityDeleteManyArgs = {
    /**
     * Filter which dataSoilStabilities to delete
     */
    where?: dataSoilStabilityWhereInput
  }


  /**
   * dataSoilStability without action
   */
  export type dataSoilStabilityArgs = {
    /**
     * Select specific fields to fetch from the dataSoilStability
     */
    select?: dataSoilStabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSoilStabilityInclude | null
  }



  /**
   * Model dataSpeciesInventory
   */


  export type AggregateDataSpeciesInventory = {
    _count: DataSpeciesInventoryCountAggregateOutputType | null
    _avg: DataSpeciesInventoryAvgAggregateOutputType | null
    _sum: DataSpeciesInventorySumAggregateOutputType | null
    _min: DataSpeciesInventoryMinAggregateOutputType | null
    _max: DataSpeciesInventoryMaxAggregateOutputType | null
  }

  export type DataSpeciesInventoryAvgAggregateOutputType = {
    rid: number | null
    DENSITY: number | null
    SpecRichMethod: number | null
    SpecRichMeasure: number | null
    SpecRichNbrSubPlots: number | null
    SpecRich1Shape: number | null
    SpecRich1Dim1: number | null
    SpecRich1Dim2: number | null
    SpecRich1Area: number | null
    SpecRich2Shape: number | null
    SpecRich2Dim1: number | null
    SpecRich2Dim2: number | null
    SpecRich2Area: number | null
    SpecRich3Shape: number | null
    SpecRich3Dim1: number | null
    SpecRich3Dim2: number | null
    SpecRich3Area: number | null
    SpecRich4Shape: number | null
    SpecRich4Dim1: number | null
    SpecRich4Dim2: number | null
    SpecRich4Area: number | null
    SpecRich5Shape: number | null
    SpecRich5Dim1: number | null
    SpecRich5Dim2: number | null
    SpecRich5Area: number | null
    SpecRich6Shape: number | null
    SpecRich6Dim1: number | null
    SpecRich6Dim2: number | null
    SpecRich6Area: number | null
  }

  export type DataSpeciesInventorySumAggregateOutputType = {
    rid: number | null
    DENSITY: number | null
    SpecRichMethod: number | null
    SpecRichMeasure: number | null
    SpecRichNbrSubPlots: number | null
    SpecRich1Shape: number | null
    SpecRich1Dim1: number | null
    SpecRich1Dim2: number | null
    SpecRich1Area: number | null
    SpecRich2Shape: number | null
    SpecRich2Dim1: number | null
    SpecRich2Dim2: number | null
    SpecRich2Area: number | null
    SpecRich3Shape: number | null
    SpecRich3Dim1: number | null
    SpecRich3Dim2: number | null
    SpecRich3Area: number | null
    SpecRich4Shape: number | null
    SpecRich4Dim1: number | null
    SpecRich4Dim2: number | null
    SpecRich4Area: number | null
    SpecRich5Shape: number | null
    SpecRich5Dim1: number | null
    SpecRich5Dim2: number | null
    SpecRich5Area: number | null
    SpecRich6Shape: number | null
    SpecRich6Dim1: number | null
    SpecRich6Dim2: number | null
    SpecRich6Area: number | null
  }

  export type DataSpeciesInventoryMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    DENSITY: number | null
    LineKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    SpecRichMethod: number | null
    SpecRichMeasure: number | null
    SpecRichNbrSubPlots: number | null
    SpecRich1Container: string | null
    SpecRich1Shape: number | null
    SpecRich1Dim1: number | null
    SpecRich1Dim2: number | null
    SpecRich1Area: number | null
    SpecRich2Container: string | null
    SpecRich2Shape: number | null
    SpecRich2Dim1: number | null
    SpecRich2Dim2: number | null
    SpecRich2Area: number | null
    SpecRich3Container: string | null
    SpecRich3Shape: number | null
    SpecRich3Dim1: number | null
    SpecRich3Dim2: number | null
    SpecRich3Area: number | null
    SpecRich4Container: string | null
    SpecRich4Shape: number | null
    SpecRich4Dim1: number | null
    SpecRich4Dim2: number | null
    SpecRich4Area: number | null
    SpecRich5Container: string | null
    SpecRich5Shape: number | null
    SpecRich5Dim1: number | null
    SpecRich5Dim2: number | null
    SpecRich5Area: number | null
    SpecRich6Container: string | null
    SpecRich6Shape: number | null
    SpecRich6Dim1: number | null
    SpecRich6Dim2: number | null
    SpecRich6Area: number | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataSpeciesInventoryMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    DENSITY: number | null
    LineKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    SpecRichMethod: number | null
    SpecRichMeasure: number | null
    SpecRichNbrSubPlots: number | null
    SpecRich1Container: string | null
    SpecRich1Shape: number | null
    SpecRich1Dim1: number | null
    SpecRich1Dim2: number | null
    SpecRich1Area: number | null
    SpecRich2Container: string | null
    SpecRich2Shape: number | null
    SpecRich2Dim1: number | null
    SpecRich2Dim2: number | null
    SpecRich2Area: number | null
    SpecRich3Container: string | null
    SpecRich3Shape: number | null
    SpecRich3Dim1: number | null
    SpecRich3Dim2: number | null
    SpecRich3Area: number | null
    SpecRich4Container: string | null
    SpecRich4Shape: number | null
    SpecRich4Dim1: number | null
    SpecRich4Dim2: number | null
    SpecRich4Area: number | null
    SpecRich5Container: string | null
    SpecRich5Shape: number | null
    SpecRich5Dim1: number | null
    SpecRich5Dim2: number | null
    SpecRich5Area: number | null
    SpecRich6Container: string | null
    SpecRich6Shape: number | null
    SpecRich6Dim1: number | null
    SpecRich6Dim2: number | null
    SpecRich6Area: number | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type DataSpeciesInventoryCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    Species: number
    DENSITY: number
    LineKey: number
    RecKey: number
    FormType: number
    FormDate: number
    SpecRichMethod: number
    SpecRichMeasure: number
    SpecRichNbrSubPlots: number
    SpecRich1Container: number
    SpecRich1Shape: number
    SpecRich1Dim1: number
    SpecRich1Dim2: number
    SpecRich1Area: number
    SpecRich2Container: number
    SpecRich2Shape: number
    SpecRich2Dim1: number
    SpecRich2Dim2: number
    SpecRich2Area: number
    SpecRich3Container: number
    SpecRich3Shape: number
    SpecRich3Dim1: number
    SpecRich3Dim2: number
    SpecRich3Area: number
    SpecRich4Container: number
    SpecRich4Shape: number
    SpecRich4Dim1: number
    SpecRich4Dim2: number
    SpecRich4Area: number
    SpecRich5Container: number
    SpecRich5Shape: number
    SpecRich5Dim1: number
    SpecRich5Dim2: number
    SpecRich5Area: number
    SpecRich6Container: number
    SpecRich6Shape: number
    SpecRich6Dim1: number
    SpecRich6Dim2: number
    SpecRich6Area: number
    Notes: number
    source: number
    DateLoadedInDb: number
    DateVisited: number
    _all: number
  }


  export type DataSpeciesInventoryAvgAggregateInputType = {
    rid?: true
    DENSITY?: true
    SpecRichMethod?: true
    SpecRichMeasure?: true
    SpecRichNbrSubPlots?: true
    SpecRich1Shape?: true
    SpecRich1Dim1?: true
    SpecRich1Dim2?: true
    SpecRich1Area?: true
    SpecRich2Shape?: true
    SpecRich2Dim1?: true
    SpecRich2Dim2?: true
    SpecRich2Area?: true
    SpecRich3Shape?: true
    SpecRich3Dim1?: true
    SpecRich3Dim2?: true
    SpecRich3Area?: true
    SpecRich4Shape?: true
    SpecRich4Dim1?: true
    SpecRich4Dim2?: true
    SpecRich4Area?: true
    SpecRich5Shape?: true
    SpecRich5Dim1?: true
    SpecRich5Dim2?: true
    SpecRich5Area?: true
    SpecRich6Shape?: true
    SpecRich6Dim1?: true
    SpecRich6Dim2?: true
    SpecRich6Area?: true
  }

  export type DataSpeciesInventorySumAggregateInputType = {
    rid?: true
    DENSITY?: true
    SpecRichMethod?: true
    SpecRichMeasure?: true
    SpecRichNbrSubPlots?: true
    SpecRich1Shape?: true
    SpecRich1Dim1?: true
    SpecRich1Dim2?: true
    SpecRich1Area?: true
    SpecRich2Shape?: true
    SpecRich2Dim1?: true
    SpecRich2Dim2?: true
    SpecRich2Area?: true
    SpecRich3Shape?: true
    SpecRich3Dim1?: true
    SpecRich3Dim2?: true
    SpecRich3Area?: true
    SpecRich4Shape?: true
    SpecRich4Dim1?: true
    SpecRich4Dim2?: true
    SpecRich4Area?: true
    SpecRich5Shape?: true
    SpecRich5Dim1?: true
    SpecRich5Dim2?: true
    SpecRich5Area?: true
    SpecRich6Shape?: true
    SpecRich6Dim1?: true
    SpecRich6Dim2?: true
    SpecRich6Area?: true
  }

  export type DataSpeciesInventoryMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    DENSITY?: true
    LineKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    SpecRichMethod?: true
    SpecRichMeasure?: true
    SpecRichNbrSubPlots?: true
    SpecRich1Container?: true
    SpecRich1Shape?: true
    SpecRich1Dim1?: true
    SpecRich1Dim2?: true
    SpecRich1Area?: true
    SpecRich2Container?: true
    SpecRich2Shape?: true
    SpecRich2Dim1?: true
    SpecRich2Dim2?: true
    SpecRich2Area?: true
    SpecRich3Container?: true
    SpecRich3Shape?: true
    SpecRich3Dim1?: true
    SpecRich3Dim2?: true
    SpecRich3Area?: true
    SpecRich4Container?: true
    SpecRich4Shape?: true
    SpecRich4Dim1?: true
    SpecRich4Dim2?: true
    SpecRich4Area?: true
    SpecRich5Container?: true
    SpecRich5Shape?: true
    SpecRich5Dim1?: true
    SpecRich5Dim2?: true
    SpecRich5Area?: true
    SpecRich6Container?: true
    SpecRich6Shape?: true
    SpecRich6Dim1?: true
    SpecRich6Dim2?: true
    SpecRich6Area?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataSpeciesInventoryMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    DENSITY?: true
    LineKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    SpecRichMethod?: true
    SpecRichMeasure?: true
    SpecRichNbrSubPlots?: true
    SpecRich1Container?: true
    SpecRich1Shape?: true
    SpecRich1Dim1?: true
    SpecRich1Dim2?: true
    SpecRich1Area?: true
    SpecRich2Container?: true
    SpecRich2Shape?: true
    SpecRich2Dim1?: true
    SpecRich2Dim2?: true
    SpecRich2Area?: true
    SpecRich3Container?: true
    SpecRich3Shape?: true
    SpecRich3Dim1?: true
    SpecRich3Dim2?: true
    SpecRich3Area?: true
    SpecRich4Container?: true
    SpecRich4Shape?: true
    SpecRich4Dim1?: true
    SpecRich4Dim2?: true
    SpecRich4Area?: true
    SpecRich5Container?: true
    SpecRich5Shape?: true
    SpecRich5Dim1?: true
    SpecRich5Dim2?: true
    SpecRich5Area?: true
    SpecRich6Container?: true
    SpecRich6Shape?: true
    SpecRich6Dim1?: true
    SpecRich6Dim2?: true
    SpecRich6Area?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type DataSpeciesInventoryCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    DENSITY?: true
    LineKey?: true
    RecKey?: true
    FormType?: true
    FormDate?: true
    SpecRichMethod?: true
    SpecRichMeasure?: true
    SpecRichNbrSubPlots?: true
    SpecRich1Container?: true
    SpecRich1Shape?: true
    SpecRich1Dim1?: true
    SpecRich1Dim2?: true
    SpecRich1Area?: true
    SpecRich2Container?: true
    SpecRich2Shape?: true
    SpecRich2Dim1?: true
    SpecRich2Dim2?: true
    SpecRich2Area?: true
    SpecRich3Container?: true
    SpecRich3Shape?: true
    SpecRich3Dim1?: true
    SpecRich3Dim2?: true
    SpecRich3Area?: true
    SpecRich4Container?: true
    SpecRich4Shape?: true
    SpecRich4Dim1?: true
    SpecRich4Dim2?: true
    SpecRich4Area?: true
    SpecRich5Container?: true
    SpecRich5Shape?: true
    SpecRich5Dim1?: true
    SpecRich5Dim2?: true
    SpecRich5Area?: true
    SpecRich6Container?: true
    SpecRich6Shape?: true
    SpecRich6Dim1?: true
    SpecRich6Dim2?: true
    SpecRich6Area?: true
    Notes?: true
    source?: true
    DateLoadedInDb?: true
    DateVisited?: true
    _all?: true
  }

  export type DataSpeciesInventoryAggregateArgs = {
    /**
     * Filter which dataSpeciesInventory to aggregate.
     */
    where?: dataSpeciesInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSpeciesInventories to fetch.
     */
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataSpeciesInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSpeciesInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSpeciesInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataSpeciesInventories
    **/
    _count?: true | DataSpeciesInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataSpeciesInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSpeciesInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSpeciesInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSpeciesInventoryMaxAggregateInputType
  }

  export type GetDataSpeciesInventoryAggregateType<T extends DataSpeciesInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSpeciesInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSpeciesInventory[P]>
      : GetScalarType<T[P], AggregateDataSpeciesInventory[P]>
  }




  export type DataSpeciesInventoryGroupByArgs = {
    where?: dataSpeciesInventoryWhereInput
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithAggregationInput>
    by: DataSpeciesInventoryScalarFieldEnum[]
    having?: dataSpeciesInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSpeciesInventoryCountAggregateInputType | true
    _avg?: DataSpeciesInventoryAvgAggregateInputType
    _sum?: DataSpeciesInventorySumAggregateInputType
    _min?: DataSpeciesInventoryMinAggregateInputType
    _max?: DataSpeciesInventoryMaxAggregateInputType
  }


  export type DataSpeciesInventoryGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    DENSITY: number | null
    LineKey: string | null
    RecKey: string | null
    FormType: string | null
    FormDate: Date | null
    SpecRichMethod: number | null
    SpecRichMeasure: number | null
    SpecRichNbrSubPlots: number | null
    SpecRich1Container: string | null
    SpecRich1Shape: number | null
    SpecRich1Dim1: number | null
    SpecRich1Dim2: number | null
    SpecRich1Area: number | null
    SpecRich2Container: string | null
    SpecRich2Shape: number | null
    SpecRich2Dim1: number | null
    SpecRich2Dim2: number | null
    SpecRich2Area: number | null
    SpecRich3Container: string | null
    SpecRich3Shape: number | null
    SpecRich3Dim1: number | null
    SpecRich3Dim2: number | null
    SpecRich3Area: number | null
    SpecRich4Container: string | null
    SpecRich4Shape: number | null
    SpecRich4Dim1: number | null
    SpecRich4Dim2: number | null
    SpecRich4Area: number | null
    SpecRich5Container: string | null
    SpecRich5Shape: number | null
    SpecRich5Dim1: number | null
    SpecRich5Dim2: number | null
    SpecRich5Area: number | null
    SpecRich6Container: string | null
    SpecRich6Shape: number | null
    SpecRich6Dim1: number | null
    SpecRich6Dim2: number | null
    SpecRich6Area: number | null
    Notes: string | null
    source: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
    _count: DataSpeciesInventoryCountAggregateOutputType | null
    _avg: DataSpeciesInventoryAvgAggregateOutputType | null
    _sum: DataSpeciesInventorySumAggregateOutputType | null
    _min: DataSpeciesInventoryMinAggregateOutputType | null
    _max: DataSpeciesInventoryMaxAggregateOutputType | null
  }

  type GetDataSpeciesInventoryGroupByPayload<T extends DataSpeciesInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataSpeciesInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSpeciesInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSpeciesInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], DataSpeciesInventoryGroupByOutputType[P]>
        }
      >
    >


  export type dataSpeciesInventorySelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    Species?: boolean
    DENSITY?: boolean
    LineKey?: boolean
    RecKey?: boolean
    FormType?: boolean
    FormDate?: boolean
    SpecRichMethod?: boolean
    SpecRichMeasure?: boolean
    SpecRichNbrSubPlots?: boolean
    SpecRich1Container?: boolean
    SpecRich1Shape?: boolean
    SpecRich1Dim1?: boolean
    SpecRich1Dim2?: boolean
    SpecRich1Area?: boolean
    SpecRich2Container?: boolean
    SpecRich2Shape?: boolean
    SpecRich2Dim1?: boolean
    SpecRich2Dim2?: boolean
    SpecRich2Area?: boolean
    SpecRich3Container?: boolean
    SpecRich3Shape?: boolean
    SpecRich3Dim1?: boolean
    SpecRich3Dim2?: boolean
    SpecRich3Area?: boolean
    SpecRich4Container?: boolean
    SpecRich4Shape?: boolean
    SpecRich4Dim1?: boolean
    SpecRich4Dim2?: boolean
    SpecRich4Area?: boolean
    SpecRich5Container?: boolean
    SpecRich5Shape?: boolean
    SpecRich5Dim1?: boolean
    SpecRich5Dim2?: boolean
    SpecRich5Area?: boolean
    SpecRich6Container?: boolean
    SpecRich6Shape?: boolean
    SpecRich6Dim1?: boolean
    SpecRich6Dim2?: boolean
    SpecRich6Area?: boolean
    Notes?: boolean
    source?: boolean
    DateLoadedInDb?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type dataSpeciesInventoryInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type dataSpeciesInventoryGetPayload<S extends boolean | null | undefined | dataSpeciesInventoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dataSpeciesInventory :
    S extends undefined ? never :
    S extends { include: any } & (dataSpeciesInventoryArgs | dataSpeciesInventoryFindManyArgs)
    ? dataSpeciesInventory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (dataSpeciesInventoryArgs | dataSpeciesInventoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof dataSpeciesInventory ? dataSpeciesInventory[P] : never
  } 
      : dataSpeciesInventory


  type dataSpeciesInventoryCountArgs = 
    Omit<dataSpeciesInventoryFindManyArgs, 'select' | 'include'> & {
      select?: DataSpeciesInventoryCountAggregateInputType | true
    }

  export interface dataSpeciesInventoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataSpeciesInventory that matches the filter.
     * @param {dataSpeciesInventoryFindUniqueArgs} args - Arguments to find a DataSpeciesInventory
     * @example
     * // Get one DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataSpeciesInventoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataSpeciesInventoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dataSpeciesInventory'> extends True ? Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>> : Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T> | null, null>

    /**
     * Find one DataSpeciesInventory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataSpeciesInventoryFindUniqueOrThrowArgs} args - Arguments to find a DataSpeciesInventory
     * @example
     * // Get one DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataSpeciesInventoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dataSpeciesInventoryFindUniqueOrThrowArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Find the first DataSpeciesInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSpeciesInventoryFindFirstArgs} args - Arguments to find a DataSpeciesInventory
     * @example
     * // Get one DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataSpeciesInventoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataSpeciesInventoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dataSpeciesInventory'> extends True ? Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>> : Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T> | null, null>

    /**
     * Find the first DataSpeciesInventory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSpeciesInventoryFindFirstOrThrowArgs} args - Arguments to find a DataSpeciesInventory
     * @example
     * // Get one DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataSpeciesInventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dataSpeciesInventoryFindFirstOrThrowArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Find zero or more DataSpeciesInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSpeciesInventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSpeciesInventories
     * const dataSpeciesInventories = await prisma.dataSpeciesInventory.findMany()
     * 
     * // Get first 10 DataSpeciesInventories
     * const dataSpeciesInventories = await prisma.dataSpeciesInventory.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const dataSpeciesInventoryWithRidOnly = await prisma.dataSpeciesInventory.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends dataSpeciesInventoryFindManyArgs>(
      args?: SelectSubset<T, dataSpeciesInventoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<dataSpeciesInventoryGetPayload<T>>>

    /**
     * Create a DataSpeciesInventory.
     * @param {dataSpeciesInventoryCreateArgs} args - Arguments to create a DataSpeciesInventory.
     * @example
     * // Create one DataSpeciesInventory
     * const DataSpeciesInventory = await prisma.dataSpeciesInventory.create({
     *   data: {
     *     // ... data to create a DataSpeciesInventory
     *   }
     * })
     * 
    **/
    create<T extends dataSpeciesInventoryCreateArgs>(
      args: SelectSubset<T, dataSpeciesInventoryCreateArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Create many DataSpeciesInventories.
     *     @param {dataSpeciesInventoryCreateManyArgs} args - Arguments to create many DataSpeciesInventories.
     *     @example
     *     // Create many DataSpeciesInventories
     *     const dataSpeciesInventory = await prisma.dataSpeciesInventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataSpeciesInventoryCreateManyArgs>(
      args?: SelectSubset<T, dataSpeciesInventoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataSpeciesInventory.
     * @param {dataSpeciesInventoryDeleteArgs} args - Arguments to delete one DataSpeciesInventory.
     * @example
     * // Delete one DataSpeciesInventory
     * const DataSpeciesInventory = await prisma.dataSpeciesInventory.delete({
     *   where: {
     *     // ... filter to delete one DataSpeciesInventory
     *   }
     * })
     * 
    **/
    delete<T extends dataSpeciesInventoryDeleteArgs>(
      args: SelectSubset<T, dataSpeciesInventoryDeleteArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Update one DataSpeciesInventory.
     * @param {dataSpeciesInventoryUpdateArgs} args - Arguments to update one DataSpeciesInventory.
     * @example
     * // Update one DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataSpeciesInventoryUpdateArgs>(
      args: SelectSubset<T, dataSpeciesInventoryUpdateArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Delete zero or more DataSpeciesInventories.
     * @param {dataSpeciesInventoryDeleteManyArgs} args - Arguments to filter DataSpeciesInventories to delete.
     * @example
     * // Delete a few DataSpeciesInventories
     * const { count } = await prisma.dataSpeciesInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataSpeciesInventoryDeleteManyArgs>(
      args?: SelectSubset<T, dataSpeciesInventoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSpeciesInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSpeciesInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSpeciesInventories
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataSpeciesInventoryUpdateManyArgs>(
      args: SelectSubset<T, dataSpeciesInventoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataSpeciesInventory.
     * @param {dataSpeciesInventoryUpsertArgs} args - Arguments to update or create a DataSpeciesInventory.
     * @example
     * // Update or create a DataSpeciesInventory
     * const dataSpeciesInventory = await prisma.dataSpeciesInventory.upsert({
     *   create: {
     *     // ... data to create a DataSpeciesInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSpeciesInventory we want to update
     *   }
     * })
    **/
    upsert<T extends dataSpeciesInventoryUpsertArgs>(
      args: SelectSubset<T, dataSpeciesInventoryUpsertArgs>
    ): Prisma__dataSpeciesInventoryClient<dataSpeciesInventoryGetPayload<T>>

    /**
     * Count the number of DataSpeciesInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataSpeciesInventoryCountArgs} args - Arguments to filter DataSpeciesInventories to count.
     * @example
     * // Count the number of DataSpeciesInventories
     * const count = await prisma.dataSpeciesInventory.count({
     *   where: {
     *     // ... the filter for the DataSpeciesInventories we want to count
     *   }
     * })
    **/
    count<T extends dataSpeciesInventoryCountArgs>(
      args?: Subset<T, dataSpeciesInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSpeciesInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSpeciesInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSpeciesInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataSpeciesInventoryAggregateArgs>(args: Subset<T, DataSpeciesInventoryAggregateArgs>): Prisma.PrismaPromise<GetDataSpeciesInventoryAggregateType<T>>

    /**
     * Group by DataSpeciesInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSpeciesInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataSpeciesInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSpeciesInventoryGroupByArgs['orderBy'] }
        : { orderBy?: DataSpeciesInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataSpeciesInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSpeciesInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dataSpeciesInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataSpeciesInventoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dataSpeciesInventory base type for findUnique actions
   */
  export type dataSpeciesInventoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter, which dataSpeciesInventory to fetch.
     */
    where: dataSpeciesInventoryWhereUniqueInput
  }

  /**
   * dataSpeciesInventory findUnique
   */
  export interface dataSpeciesInventoryFindUniqueArgs extends dataSpeciesInventoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataSpeciesInventory findUniqueOrThrow
   */
  export type dataSpeciesInventoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter, which dataSpeciesInventory to fetch.
     */
    where: dataSpeciesInventoryWhereUniqueInput
  }


  /**
   * dataSpeciesInventory base type for findFirst actions
   */
  export type dataSpeciesInventoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter, which dataSpeciesInventory to fetch.
     */
    where?: dataSpeciesInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSpeciesInventories to fetch.
     */
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataSpeciesInventories.
     */
    cursor?: dataSpeciesInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSpeciesInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSpeciesInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataSpeciesInventories.
     */
    distinct?: Enumerable<DataSpeciesInventoryScalarFieldEnum>
  }

  /**
   * dataSpeciesInventory findFirst
   */
  export interface dataSpeciesInventoryFindFirstArgs extends dataSpeciesInventoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dataSpeciesInventory findFirstOrThrow
   */
  export type dataSpeciesInventoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter, which dataSpeciesInventory to fetch.
     */
    where?: dataSpeciesInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSpeciesInventories to fetch.
     */
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataSpeciesInventories.
     */
    cursor?: dataSpeciesInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSpeciesInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSpeciesInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataSpeciesInventories.
     */
    distinct?: Enumerable<DataSpeciesInventoryScalarFieldEnum>
  }


  /**
   * dataSpeciesInventory findMany
   */
  export type dataSpeciesInventoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter, which dataSpeciesInventories to fetch.
     */
    where?: dataSpeciesInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataSpeciesInventories to fetch.
     */
    orderBy?: Enumerable<dataSpeciesInventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataSpeciesInventories.
     */
    cursor?: dataSpeciesInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataSpeciesInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataSpeciesInventories.
     */
    skip?: number
    distinct?: Enumerable<DataSpeciesInventoryScalarFieldEnum>
  }


  /**
   * dataSpeciesInventory create
   */
  export type dataSpeciesInventoryCreateArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * The data needed to create a dataSpeciesInventory.
     */
    data: XOR<dataSpeciesInventoryCreateInput, dataSpeciesInventoryUncheckedCreateInput>
  }


  /**
   * dataSpeciesInventory createMany
   */
  export type dataSpeciesInventoryCreateManyArgs = {
    /**
     * The data used to create many dataSpeciesInventories.
     */
    data: Enumerable<dataSpeciesInventoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dataSpeciesInventory update
   */
  export type dataSpeciesInventoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * The data needed to update a dataSpeciesInventory.
     */
    data: XOR<dataSpeciesInventoryUpdateInput, dataSpeciesInventoryUncheckedUpdateInput>
    /**
     * Choose, which dataSpeciesInventory to update.
     */
    where: dataSpeciesInventoryWhereUniqueInput
  }


  /**
   * dataSpeciesInventory updateMany
   */
  export type dataSpeciesInventoryUpdateManyArgs = {
    /**
     * The data used to update dataSpeciesInventories.
     */
    data: XOR<dataSpeciesInventoryUpdateManyMutationInput, dataSpeciesInventoryUncheckedUpdateManyInput>
    /**
     * Filter which dataSpeciesInventories to update
     */
    where?: dataSpeciesInventoryWhereInput
  }


  /**
   * dataSpeciesInventory upsert
   */
  export type dataSpeciesInventoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * The filter to search for the dataSpeciesInventory to update in case it exists.
     */
    where: dataSpeciesInventoryWhereUniqueInput
    /**
     * In case the dataSpeciesInventory found by the `where` argument doesn't exist, create a new dataSpeciesInventory with this data.
     */
    create: XOR<dataSpeciesInventoryCreateInput, dataSpeciesInventoryUncheckedCreateInput>
    /**
     * In case the dataSpeciesInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataSpeciesInventoryUpdateInput, dataSpeciesInventoryUncheckedUpdateInput>
  }


  /**
   * dataSpeciesInventory delete
   */
  export type dataSpeciesInventoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
    /**
     * Filter which dataSpeciesInventory to delete.
     */
    where: dataSpeciesInventoryWhereUniqueInput
  }


  /**
   * dataSpeciesInventory deleteMany
   */
  export type dataSpeciesInventoryDeleteManyArgs = {
    /**
     * Filter which dataSpeciesInventories to delete
     */
    where?: dataSpeciesInventoryWhereInput
  }


  /**
   * dataSpeciesInventory without action
   */
  export type dataSpeciesInventoryArgs = {
    /**
     * Select specific fields to fetch from the dataSpeciesInventory
     */
    select?: dataSpeciesInventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataSpeciesInventoryInclude | null
  }



  /**
   * Model geoIndicators
   */


  export type AggregateGeoIndicators = {
    _count: GeoIndicatorsCountAggregateOutputType | null
    _avg: GeoIndicatorsAvgAggregateOutputType | null
    _sum: GeoIndicatorsSumAggregateOutputType | null
    _min: GeoIndicatorsMinAggregateOutputType | null
    _max: GeoIndicatorsMaxAggregateOutputType | null
  }

  export type GeoIndicatorsAvgAggregateOutputType = {
    rid: number | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
  }

  export type GeoIndicatorsSumAggregateOutputType = {
    rid: number | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
  }

  export type GeoIndicatorsMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
  }

  export type GeoIndicatorsMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
  }

  export type GeoIndicatorsCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    DateVisited: number
    EcologicalSiteId: number
    PercentCoveredByEcoSite: number
    Latitude_NAD83: number
    Longitude_NAD83: number
    LocationStatus: number
    LocationType: number
    Latitude_NAD83_Actual: number
    Longitude_NAD83_Actual: number
    BareSoilCover: number
    TotalFoliarCover: number
    AH_AnnGrassCover: number
    AH_ForbCover: number
    AH_GrassCover: number
    AH_PerenForbCover: number
    AH_PerenForbGrassCover: number
    AH_PerenGrassCover: number
    AH_ShrubCover: number
    FH_CyanobacteriaCover: number
    FH_DepSoilCover: number
    FH_DuffCover: number
    FH_EmbLitterCover: number
    FH_HerbLitterCover: number
    FH_LichenCover: number
    FH_MossCover: number
    FH_RockCover: number
    FH_TotalLitterCover: number
    FH_VagrLichenCover: number
    FH_WaterCover: number
    FH_WoodyLitterCover: number
    GapCover_101_200: number
    GapCover_200_plus: number
    GapCover_25_50: number
    GapCover_25_plus: number
    GapCover_51_100: number
    Hgt_Forb_Avg: number
    Hgt_Grass_Avg: number
    Hgt_Herbaceous_Avg: number
    Hgt_PerenForb_Avg: number
    Hgt_PerenForbGrass_Avg: number
    Hgt_PerenGrass_Avg: number
    Hgt_Woody_Avg: number
    RH_AnnualProd: number
    RH_BareGround: number
    RH_BioticIntegrity: number
    RH_CommentsBI: number
    RH_CommentsHF: number
    RH_CommentsSS: number
    RH_Compaction: number
    RH_DeadDyingPlantParts: number
    RH_FuncSructGroup: number
    RH_Gullies: number
    RH_HydrologicFunction: number
    RH_InvasivePlants: number
    RH_LitterAmount: number
    RH_LitterMovement: number
    RH_PedestalsTerracettes: number
    RH_PlantCommunityComp: number
    RH_ReprodCapabilityPeren: number
    RH_Rills: number
    RH_SoilSiteStability: number
    RH_SoilSurfLossDeg: number
    RH_SoilSurfResisErosion: number
    RH_WaterFlowPatterns: number
    RH_WindScouredAreas: number
    SoilStability_All: number
    SoilStability_Protected: number
    SoilStability_Unprotected: number
    DateLoadedInDb: number
    mlra_name: number
    mlrarsym: number
    na_l1name: number
    na_l2name: number
    us_l3name: number
    us_l4name: number
    State: number
    modis_landcover: number
    _all: number
  }


  export type GeoIndicatorsAvgAggregateInputType = {
    rid?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
  }

  export type GeoIndicatorsSumAggregateInputType = {
    rid?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
  }

  export type GeoIndicatorsMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
  }

  export type GeoIndicatorsMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
  }

  export type GeoIndicatorsCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
    _all?: true
  }

  export type GeoIndicatorsAggregateArgs = {
    /**
     * Filter which geoIndicators to aggregate.
     */
    where?: geoIndicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators to fetch.
     */
    orderBy?: Enumerable<geoIndicatorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: geoIndicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned geoIndicators
    **/
    _count?: true | GeoIndicatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeoIndicatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeoIndicatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeoIndicatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeoIndicatorsMaxAggregateInputType
  }

  export type GetGeoIndicatorsAggregateType<T extends GeoIndicatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateGeoIndicators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeoIndicators[P]>
      : GetScalarType<T[P], AggregateGeoIndicators[P]>
  }




  export type GeoIndicatorsGroupByArgs = {
    where?: geoIndicatorsWhereInput
    orderBy?: Enumerable<geoIndicatorsOrderByWithAggregationInput>
    by: GeoIndicatorsScalarFieldEnum[]
    having?: geoIndicatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeoIndicatorsCountAggregateInputType | true
    _avg?: GeoIndicatorsAvgAggregateInputType
    _sum?: GeoIndicatorsSumAggregateInputType
    _min?: GeoIndicatorsMinAggregateInputType
    _max?: GeoIndicatorsMaxAggregateInputType
  }


  export type GeoIndicatorsGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
    _count: GeoIndicatorsCountAggregateOutputType | null
    _avg: GeoIndicatorsAvgAggregateOutputType | null
    _sum: GeoIndicatorsSumAggregateOutputType | null
    _min: GeoIndicatorsMinAggregateOutputType | null
    _max: GeoIndicatorsMaxAggregateOutputType | null
  }

  type GetGeoIndicatorsGroupByPayload<T extends GeoIndicatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeoIndicatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeoIndicatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeoIndicatorsGroupByOutputType[P]>
            : GetScalarType<T[P], GeoIndicatorsGroupByOutputType[P]>
        }
      >
    >


  export type geoIndicatorsSelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    DateVisited?: boolean
    EcologicalSiteId?: boolean
    PercentCoveredByEcoSite?: boolean
    Latitude_NAD83?: boolean
    Longitude_NAD83?: boolean
    LocationStatus?: boolean
    LocationType?: boolean
    Latitude_NAD83_Actual?: boolean
    Longitude_NAD83_Actual?: boolean
    BareSoilCover?: boolean
    TotalFoliarCover?: boolean
    AH_AnnGrassCover?: boolean
    AH_ForbCover?: boolean
    AH_GrassCover?: boolean
    AH_PerenForbCover?: boolean
    AH_PerenForbGrassCover?: boolean
    AH_PerenGrassCover?: boolean
    AH_ShrubCover?: boolean
    FH_CyanobacteriaCover?: boolean
    FH_DepSoilCover?: boolean
    FH_DuffCover?: boolean
    FH_EmbLitterCover?: boolean
    FH_HerbLitterCover?: boolean
    FH_LichenCover?: boolean
    FH_MossCover?: boolean
    FH_RockCover?: boolean
    FH_TotalLitterCover?: boolean
    FH_VagrLichenCover?: boolean
    FH_WaterCover?: boolean
    FH_WoodyLitterCover?: boolean
    GapCover_101_200?: boolean
    GapCover_200_plus?: boolean
    GapCover_25_50?: boolean
    GapCover_25_plus?: boolean
    GapCover_51_100?: boolean
    Hgt_Forb_Avg?: boolean
    Hgt_Grass_Avg?: boolean
    Hgt_Herbaceous_Avg?: boolean
    Hgt_PerenForb_Avg?: boolean
    Hgt_PerenForbGrass_Avg?: boolean
    Hgt_PerenGrass_Avg?: boolean
    Hgt_Woody_Avg?: boolean
    RH_AnnualProd?: boolean
    RH_BareGround?: boolean
    RH_BioticIntegrity?: boolean
    RH_CommentsBI?: boolean
    RH_CommentsHF?: boolean
    RH_CommentsSS?: boolean
    RH_Compaction?: boolean
    RH_DeadDyingPlantParts?: boolean
    RH_FuncSructGroup?: boolean
    RH_Gullies?: boolean
    RH_HydrologicFunction?: boolean
    RH_InvasivePlants?: boolean
    RH_LitterAmount?: boolean
    RH_LitterMovement?: boolean
    RH_PedestalsTerracettes?: boolean
    RH_PlantCommunityComp?: boolean
    RH_ReprodCapabilityPeren?: boolean
    RH_Rills?: boolean
    RH_SoilSiteStability?: boolean
    RH_SoilSurfLossDeg?: boolean
    RH_SoilSurfResisErosion?: boolean
    RH_WaterFlowPatterns?: boolean
    RH_WindScouredAreas?: boolean
    SoilStability_All?: boolean
    SoilStability_Protected?: boolean
    SoilStability_Unprotected?: boolean
    DateLoadedInDb?: boolean
    mlra_name?: boolean
    mlrarsym?: boolean
    na_l1name?: boolean
    na_l2name?: boolean
    us_l3name?: boolean
    us_l4name?: boolean
    State?: boolean
    modis_landcover?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type geoIndicatorsInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type geoIndicatorsGetPayload<S extends boolean | null | undefined | geoIndicatorsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? geoIndicators :
    S extends undefined ? never :
    S extends { include: any } & (geoIndicatorsArgs | geoIndicatorsFindManyArgs)
    ? geoIndicators  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (geoIndicatorsArgs | geoIndicatorsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof geoIndicators ? geoIndicators[P] : never
  } 
      : geoIndicators


  type geoIndicatorsCountArgs = 
    Omit<geoIndicatorsFindManyArgs, 'select' | 'include'> & {
      select?: GeoIndicatorsCountAggregateInputType | true
    }

  export interface geoIndicatorsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeoIndicators that matches the filter.
     * @param {geoIndicatorsFindUniqueArgs} args - Arguments to find a GeoIndicators
     * @example
     * // Get one GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends geoIndicatorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, geoIndicatorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'geoIndicators'> extends True ? Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>> : Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T> | null, null>

    /**
     * Find one GeoIndicators that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {geoIndicatorsFindUniqueOrThrowArgs} args - Arguments to find a GeoIndicators
     * @example
     * // Get one GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends geoIndicatorsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, geoIndicatorsFindUniqueOrThrowArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Find the first GeoIndicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicatorsFindFirstArgs} args - Arguments to find a GeoIndicators
     * @example
     * // Get one GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends geoIndicatorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, geoIndicatorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'geoIndicators'> extends True ? Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>> : Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T> | null, null>

    /**
     * Find the first GeoIndicators that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicatorsFindFirstOrThrowArgs} args - Arguments to find a GeoIndicators
     * @example
     * // Get one GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends geoIndicatorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, geoIndicatorsFindFirstOrThrowArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Find zero or more GeoIndicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicatorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findMany()
     * 
     * // Get first 10 GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const geoIndicatorsWithRidOnly = await prisma.geoIndicators.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends geoIndicatorsFindManyArgs>(
      args?: SelectSubset<T, geoIndicatorsFindManyArgs>
    ): Prisma.PrismaPromise<Array<geoIndicatorsGetPayload<T>>>

    /**
     * Create a GeoIndicators.
     * @param {geoIndicatorsCreateArgs} args - Arguments to create a GeoIndicators.
     * @example
     * // Create one GeoIndicators
     * const GeoIndicators = await prisma.geoIndicators.create({
     *   data: {
     *     // ... data to create a GeoIndicators
     *   }
     * })
     * 
    **/
    create<T extends geoIndicatorsCreateArgs>(
      args: SelectSubset<T, geoIndicatorsCreateArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Create many GeoIndicators.
     *     @param {geoIndicatorsCreateManyArgs} args - Arguments to create many GeoIndicators.
     *     @example
     *     // Create many GeoIndicators
     *     const geoIndicators = await prisma.geoIndicators.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends geoIndicatorsCreateManyArgs>(
      args?: SelectSubset<T, geoIndicatorsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeoIndicators.
     * @param {geoIndicatorsDeleteArgs} args - Arguments to delete one GeoIndicators.
     * @example
     * // Delete one GeoIndicators
     * const GeoIndicators = await prisma.geoIndicators.delete({
     *   where: {
     *     // ... filter to delete one GeoIndicators
     *   }
     * })
     * 
    **/
    delete<T extends geoIndicatorsDeleteArgs>(
      args: SelectSubset<T, geoIndicatorsDeleteArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Update one GeoIndicators.
     * @param {geoIndicatorsUpdateArgs} args - Arguments to update one GeoIndicators.
     * @example
     * // Update one GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends geoIndicatorsUpdateArgs>(
      args: SelectSubset<T, geoIndicatorsUpdateArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Delete zero or more GeoIndicators.
     * @param {geoIndicatorsDeleteManyArgs} args - Arguments to filter GeoIndicators to delete.
     * @example
     * // Delete a few GeoIndicators
     * const { count } = await prisma.geoIndicators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends geoIndicatorsDeleteManyArgs>(
      args?: SelectSubset<T, geoIndicatorsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeoIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends geoIndicatorsUpdateManyArgs>(
      args: SelectSubset<T, geoIndicatorsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeoIndicators.
     * @param {geoIndicatorsUpsertArgs} args - Arguments to update or create a GeoIndicators.
     * @example
     * // Update or create a GeoIndicators
     * const geoIndicators = await prisma.geoIndicators.upsert({
     *   create: {
     *     // ... data to create a GeoIndicators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeoIndicators we want to update
     *   }
     * })
    **/
    upsert<T extends geoIndicatorsUpsertArgs>(
      args: SelectSubset<T, geoIndicatorsUpsertArgs>
    ): Prisma__geoIndicatorsClient<geoIndicatorsGetPayload<T>>

    /**
     * Count the number of GeoIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicatorsCountArgs} args - Arguments to filter GeoIndicators to count.
     * @example
     * // Count the number of GeoIndicators
     * const count = await prisma.geoIndicators.count({
     *   where: {
     *     // ... the filter for the GeoIndicators we want to count
     *   }
     * })
    **/
    count<T extends geoIndicatorsCountArgs>(
      args?: Subset<T, geoIndicatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeoIndicatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeoIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoIndicatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeoIndicatorsAggregateArgs>(args: Subset<T, GeoIndicatorsAggregateArgs>): Prisma.PrismaPromise<GetGeoIndicatorsAggregateType<T>>

    /**
     * Group by GeoIndicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoIndicatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeoIndicatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeoIndicatorsGroupByArgs['orderBy'] }
        : { orderBy?: GeoIndicatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeoIndicatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeoIndicatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for geoIndicators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__geoIndicatorsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * geoIndicators base type for findUnique actions
   */
  export type geoIndicatorsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter, which geoIndicators to fetch.
     */
    where: geoIndicatorsWhereUniqueInput
  }

  /**
   * geoIndicators findUnique
   */
  export interface geoIndicatorsFindUniqueArgs extends geoIndicatorsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoIndicators findUniqueOrThrow
   */
  export type geoIndicatorsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter, which geoIndicators to fetch.
     */
    where: geoIndicatorsWhereUniqueInput
  }


  /**
   * geoIndicators base type for findFirst actions
   */
  export type geoIndicatorsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter, which geoIndicators to fetch.
     */
    where?: geoIndicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators to fetch.
     */
    orderBy?: Enumerable<geoIndicatorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoIndicators.
     */
    cursor?: geoIndicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoIndicators.
     */
    distinct?: Enumerable<GeoIndicatorsScalarFieldEnum>
  }

  /**
   * geoIndicators findFirst
   */
  export interface geoIndicatorsFindFirstArgs extends geoIndicatorsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoIndicators findFirstOrThrow
   */
  export type geoIndicatorsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter, which geoIndicators to fetch.
     */
    where?: geoIndicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators to fetch.
     */
    orderBy?: Enumerable<geoIndicatorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoIndicators.
     */
    cursor?: geoIndicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoIndicators.
     */
    distinct?: Enumerable<GeoIndicatorsScalarFieldEnum>
  }


  /**
   * geoIndicators findMany
   */
  export type geoIndicatorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter, which geoIndicators to fetch.
     */
    where?: geoIndicatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators to fetch.
     */
    orderBy?: Enumerable<geoIndicatorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing geoIndicators.
     */
    cursor?: geoIndicatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators.
     */
    skip?: number
    distinct?: Enumerable<GeoIndicatorsScalarFieldEnum>
  }


  /**
   * geoIndicators create
   */
  export type geoIndicatorsCreateArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * The data needed to create a geoIndicators.
     */
    data: XOR<geoIndicatorsCreateInput, geoIndicatorsUncheckedCreateInput>
  }


  /**
   * geoIndicators createMany
   */
  export type geoIndicatorsCreateManyArgs = {
    /**
     * The data used to create many geoIndicators.
     */
    data: Enumerable<geoIndicatorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * geoIndicators update
   */
  export type geoIndicatorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * The data needed to update a geoIndicators.
     */
    data: XOR<geoIndicatorsUpdateInput, geoIndicatorsUncheckedUpdateInput>
    /**
     * Choose, which geoIndicators to update.
     */
    where: geoIndicatorsWhereUniqueInput
  }


  /**
   * geoIndicators updateMany
   */
  export type geoIndicatorsUpdateManyArgs = {
    /**
     * The data used to update geoIndicators.
     */
    data: XOR<geoIndicatorsUpdateManyMutationInput, geoIndicatorsUncheckedUpdateManyInput>
    /**
     * Filter which geoIndicators to update
     */
    where?: geoIndicatorsWhereInput
  }


  /**
   * geoIndicators upsert
   */
  export type geoIndicatorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * The filter to search for the geoIndicators to update in case it exists.
     */
    where: geoIndicatorsWhereUniqueInput
    /**
     * In case the geoIndicators found by the `where` argument doesn't exist, create a new geoIndicators with this data.
     */
    create: XOR<geoIndicatorsCreateInput, geoIndicatorsUncheckedCreateInput>
    /**
     * In case the geoIndicators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<geoIndicatorsUpdateInput, geoIndicatorsUncheckedUpdateInput>
  }


  /**
   * geoIndicators delete
   */
  export type geoIndicatorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
    /**
     * Filter which geoIndicators to delete.
     */
    where: geoIndicatorsWhereUniqueInput
  }


  /**
   * geoIndicators deleteMany
   */
  export type geoIndicatorsDeleteManyArgs = {
    /**
     * Filter which geoIndicators to delete
     */
    where?: geoIndicatorsWhereInput
  }


  /**
   * geoIndicators without action
   */
  export type geoIndicatorsArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators
     */
    select?: geoIndicatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoIndicatorsInclude | null
  }



  /**
   * Model geoSpecies
   */


  export type AggregateGeoSpecies = {
    _count: GeoSpeciesCountAggregateOutputType | null
    _avg: GeoSpeciesAvgAggregateOutputType | null
    _sum: GeoSpeciesSumAggregateOutputType | null
    _min: GeoSpeciesMinAggregateOutputType | null
    _max: GeoSpeciesMaxAggregateOutputType | null
  }

  export type GeoSpeciesAvgAggregateOutputType = {
    rid: number | null
    AH_SpeciesCover: number | null
    AH_SpeciesCover_n: number | null
    Hgt_Species_Avg: number | null
    Hgt_Species_Avg_n: number | null
  }

  export type GeoSpeciesSumAggregateOutputType = {
    rid: number | null
    AH_SpeciesCover: number | null
    AH_SpeciesCover_n: number | null
    Hgt_Species_Avg: number | null
    Hgt_Species_Avg_n: number | null
  }

  export type GeoSpeciesMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    AH_SpeciesCover: number | null
    AH_SpeciesCover_n: number | null
    Hgt_Species_Avg: number | null
    Hgt_Species_Avg_n: number | null
    Duration: string | null
    GrowthHabit: string | null
    GrowthHabitSub: string | null
    SpeciesKey: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type GeoSpeciesMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    AH_SpeciesCover: number | null
    AH_SpeciesCover_n: number | null
    Hgt_Species_Avg: number | null
    Hgt_Species_Avg_n: number | null
    Duration: string | null
    GrowthHabit: string | null
    GrowthHabitSub: string | null
    SpeciesKey: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
  }

  export type GeoSpeciesCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    Species: number
    AH_SpeciesCover: number
    AH_SpeciesCover_n: number
    Hgt_Species_Avg: number
    Hgt_Species_Avg_n: number
    Duration: number
    GrowthHabit: number
    GrowthHabitSub: number
    SpeciesKey: number
    DateLoadedInDb: number
    DateVisited: number
    _all: number
  }


  export type GeoSpeciesAvgAggregateInputType = {
    rid?: true
    AH_SpeciesCover?: true
    AH_SpeciesCover_n?: true
    Hgt_Species_Avg?: true
    Hgt_Species_Avg_n?: true
  }

  export type GeoSpeciesSumAggregateInputType = {
    rid?: true
    AH_SpeciesCover?: true
    AH_SpeciesCover_n?: true
    Hgt_Species_Avg?: true
    Hgt_Species_Avg_n?: true
  }

  export type GeoSpeciesMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    AH_SpeciesCover?: true
    AH_SpeciesCover_n?: true
    Hgt_Species_Avg?: true
    Hgt_Species_Avg_n?: true
    Duration?: true
    GrowthHabit?: true
    GrowthHabitSub?: true
    SpeciesKey?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type GeoSpeciesMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    AH_SpeciesCover?: true
    AH_SpeciesCover_n?: true
    Hgt_Species_Avg?: true
    Hgt_Species_Avg_n?: true
    Duration?: true
    GrowthHabit?: true
    GrowthHabitSub?: true
    SpeciesKey?: true
    DateLoadedInDb?: true
    DateVisited?: true
  }

  export type GeoSpeciesCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    Species?: true
    AH_SpeciesCover?: true
    AH_SpeciesCover_n?: true
    Hgt_Species_Avg?: true
    Hgt_Species_Avg_n?: true
    Duration?: true
    GrowthHabit?: true
    GrowthHabitSub?: true
    SpeciesKey?: true
    DateLoadedInDb?: true
    DateVisited?: true
    _all?: true
  }

  export type GeoSpeciesAggregateArgs = {
    /**
     * Filter which geoSpecies to aggregate.
     */
    where?: geoSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoSpecies to fetch.
     */
    orderBy?: Enumerable<geoSpeciesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: geoSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned geoSpecies
    **/
    _count?: true | GeoSpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeoSpeciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeoSpeciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeoSpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeoSpeciesMaxAggregateInputType
  }

  export type GetGeoSpeciesAggregateType<T extends GeoSpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregateGeoSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeoSpecies[P]>
      : GetScalarType<T[P], AggregateGeoSpecies[P]>
  }




  export type GeoSpeciesGroupByArgs = {
    where?: geoSpeciesWhereInput
    orderBy?: Enumerable<geoSpeciesOrderByWithAggregationInput>
    by: GeoSpeciesScalarFieldEnum[]
    having?: geoSpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeoSpeciesCountAggregateInputType | true
    _avg?: GeoSpeciesAvgAggregateInputType
    _sum?: GeoSpeciesSumAggregateInputType
    _min?: GeoSpeciesMinAggregateInputType
    _max?: GeoSpeciesMaxAggregateInputType
  }


  export type GeoSpeciesGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    Species: string | null
    AH_SpeciesCover: number | null
    AH_SpeciesCover_n: number | null
    Hgt_Species_Avg: number | null
    Hgt_Species_Avg_n: number | null
    Duration: string | null
    GrowthHabit: string | null
    GrowthHabitSub: string | null
    SpeciesKey: string | null
    DateLoadedInDb: Date | null
    DateVisited: Date | null
    _count: GeoSpeciesCountAggregateOutputType | null
    _avg: GeoSpeciesAvgAggregateOutputType | null
    _sum: GeoSpeciesSumAggregateOutputType | null
    _min: GeoSpeciesMinAggregateOutputType | null
    _max: GeoSpeciesMaxAggregateOutputType | null
  }

  type GetGeoSpeciesGroupByPayload<T extends GeoSpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeoSpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeoSpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeoSpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], GeoSpeciesGroupByOutputType[P]>
        }
      >
    >


  export type geoSpeciesSelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    Species?: boolean
    AH_SpeciesCover?: boolean
    AH_SpeciesCover_n?: boolean
    Hgt_Species_Avg?: boolean
    Hgt_Species_Avg_n?: boolean
    Duration?: boolean
    GrowthHabit?: boolean
    GrowthHabitSub?: boolean
    SpeciesKey?: boolean
    DateLoadedInDb?: boolean
    DateVisited?: boolean
    dataHeader?: boolean | dataHeaderArgs
  }


  export type geoSpeciesInclude = {
    dataHeader?: boolean | dataHeaderArgs
  }

  export type geoSpeciesGetPayload<S extends boolean | null | undefined | geoSpeciesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? geoSpecies :
    S extends undefined ? never :
    S extends { include: any } & (geoSpeciesArgs | geoSpeciesFindManyArgs)
    ? geoSpecies  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (geoSpeciesArgs | geoSpeciesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dataHeader' ? dataHeaderGetPayload<S['select'][P]> | null :  P extends keyof geoSpecies ? geoSpecies[P] : never
  } 
      : geoSpecies


  type geoSpeciesCountArgs = 
    Omit<geoSpeciesFindManyArgs, 'select' | 'include'> & {
      select?: GeoSpeciesCountAggregateInputType | true
    }

  export interface geoSpeciesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeoSpecies that matches the filter.
     * @param {geoSpeciesFindUniqueArgs} args - Arguments to find a GeoSpecies
     * @example
     * // Get one GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends geoSpeciesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, geoSpeciesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'geoSpecies'> extends True ? Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>> : Prisma__geoSpeciesClient<geoSpeciesGetPayload<T> | null, null>

    /**
     * Find one GeoSpecies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {geoSpeciesFindUniqueOrThrowArgs} args - Arguments to find a GeoSpecies
     * @example
     * // Get one GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends geoSpeciesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, geoSpeciesFindUniqueOrThrowArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Find the first GeoSpecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoSpeciesFindFirstArgs} args - Arguments to find a GeoSpecies
     * @example
     * // Get one GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends geoSpeciesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, geoSpeciesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'geoSpecies'> extends True ? Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>> : Prisma__geoSpeciesClient<geoSpeciesGetPayload<T> | null, null>

    /**
     * Find the first GeoSpecies that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoSpeciesFindFirstOrThrowArgs} args - Arguments to find a GeoSpecies
     * @example
     * // Get one GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends geoSpeciesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, geoSpeciesFindFirstOrThrowArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Find zero or more GeoSpecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoSpeciesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findMany()
     * 
     * // Get first 10 GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const geoSpeciesWithRidOnly = await prisma.geoSpecies.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends geoSpeciesFindManyArgs>(
      args?: SelectSubset<T, geoSpeciesFindManyArgs>
    ): Prisma.PrismaPromise<Array<geoSpeciesGetPayload<T>>>

    /**
     * Create a GeoSpecies.
     * @param {geoSpeciesCreateArgs} args - Arguments to create a GeoSpecies.
     * @example
     * // Create one GeoSpecies
     * const GeoSpecies = await prisma.geoSpecies.create({
     *   data: {
     *     // ... data to create a GeoSpecies
     *   }
     * })
     * 
    **/
    create<T extends geoSpeciesCreateArgs>(
      args: SelectSubset<T, geoSpeciesCreateArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Create many GeoSpecies.
     *     @param {geoSpeciesCreateManyArgs} args - Arguments to create many GeoSpecies.
     *     @example
     *     // Create many GeoSpecies
     *     const geoSpecies = await prisma.geoSpecies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends geoSpeciesCreateManyArgs>(
      args?: SelectSubset<T, geoSpeciesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeoSpecies.
     * @param {geoSpeciesDeleteArgs} args - Arguments to delete one GeoSpecies.
     * @example
     * // Delete one GeoSpecies
     * const GeoSpecies = await prisma.geoSpecies.delete({
     *   where: {
     *     // ... filter to delete one GeoSpecies
     *   }
     * })
     * 
    **/
    delete<T extends geoSpeciesDeleteArgs>(
      args: SelectSubset<T, geoSpeciesDeleteArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Update one GeoSpecies.
     * @param {geoSpeciesUpdateArgs} args - Arguments to update one GeoSpecies.
     * @example
     * // Update one GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends geoSpeciesUpdateArgs>(
      args: SelectSubset<T, geoSpeciesUpdateArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Delete zero or more GeoSpecies.
     * @param {geoSpeciesDeleteManyArgs} args - Arguments to filter GeoSpecies to delete.
     * @example
     * // Delete a few GeoSpecies
     * const { count } = await prisma.geoSpecies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends geoSpeciesDeleteManyArgs>(
      args?: SelectSubset<T, geoSpeciesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeoSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoSpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends geoSpeciesUpdateManyArgs>(
      args: SelectSubset<T, geoSpeciesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeoSpecies.
     * @param {geoSpeciesUpsertArgs} args - Arguments to update or create a GeoSpecies.
     * @example
     * // Update or create a GeoSpecies
     * const geoSpecies = await prisma.geoSpecies.upsert({
     *   create: {
     *     // ... data to create a GeoSpecies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeoSpecies we want to update
     *   }
     * })
    **/
    upsert<T extends geoSpeciesUpsertArgs>(
      args: SelectSubset<T, geoSpeciesUpsertArgs>
    ): Prisma__geoSpeciesClient<geoSpeciesGetPayload<T>>

    /**
     * Count the number of GeoSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoSpeciesCountArgs} args - Arguments to filter GeoSpecies to count.
     * @example
     * // Count the number of GeoSpecies
     * const count = await prisma.geoSpecies.count({
     *   where: {
     *     // ... the filter for the GeoSpecies we want to count
     *   }
     * })
    **/
    count<T extends geoSpeciesCountArgs>(
      args?: Subset<T, geoSpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeoSpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeoSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoSpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeoSpeciesAggregateArgs>(args: Subset<T, GeoSpeciesAggregateArgs>): Prisma.PrismaPromise<GetGeoSpeciesAggregateType<T>>

    /**
     * Group by GeoSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoSpeciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeoSpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeoSpeciesGroupByArgs['orderBy'] }
        : { orderBy?: GeoSpeciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeoSpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeoSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for geoSpecies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__geoSpeciesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dataHeader<T extends dataHeaderArgs= {}>(args?: Subset<T, dataHeaderArgs>): Prisma__dataHeaderClient<dataHeaderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * geoSpecies base type for findUnique actions
   */
  export type geoSpeciesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter, which geoSpecies to fetch.
     */
    where: geoSpeciesWhereUniqueInput
  }

  /**
   * geoSpecies findUnique
   */
  export interface geoSpeciesFindUniqueArgs extends geoSpeciesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoSpecies findUniqueOrThrow
   */
  export type geoSpeciesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter, which geoSpecies to fetch.
     */
    where: geoSpeciesWhereUniqueInput
  }


  /**
   * geoSpecies base type for findFirst actions
   */
  export type geoSpeciesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter, which geoSpecies to fetch.
     */
    where?: geoSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoSpecies to fetch.
     */
    orderBy?: Enumerable<geoSpeciesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoSpecies.
     */
    cursor?: geoSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoSpecies.
     */
    distinct?: Enumerable<GeoSpeciesScalarFieldEnum>
  }

  /**
   * geoSpecies findFirst
   */
  export interface geoSpeciesFindFirstArgs extends geoSpeciesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoSpecies findFirstOrThrow
   */
  export type geoSpeciesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter, which geoSpecies to fetch.
     */
    where?: geoSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoSpecies to fetch.
     */
    orderBy?: Enumerable<geoSpeciesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoSpecies.
     */
    cursor?: geoSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoSpecies.
     */
    distinct?: Enumerable<GeoSpeciesScalarFieldEnum>
  }


  /**
   * geoSpecies findMany
   */
  export type geoSpeciesFindManyArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter, which geoSpecies to fetch.
     */
    where?: geoSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoSpecies to fetch.
     */
    orderBy?: Enumerable<geoSpeciesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing geoSpecies.
     */
    cursor?: geoSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoSpecies.
     */
    skip?: number
    distinct?: Enumerable<GeoSpeciesScalarFieldEnum>
  }


  /**
   * geoSpecies create
   */
  export type geoSpeciesCreateArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * The data needed to create a geoSpecies.
     */
    data: XOR<geoSpeciesCreateInput, geoSpeciesUncheckedCreateInput>
  }


  /**
   * geoSpecies createMany
   */
  export type geoSpeciesCreateManyArgs = {
    /**
     * The data used to create many geoSpecies.
     */
    data: Enumerable<geoSpeciesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * geoSpecies update
   */
  export type geoSpeciesUpdateArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * The data needed to update a geoSpecies.
     */
    data: XOR<geoSpeciesUpdateInput, geoSpeciesUncheckedUpdateInput>
    /**
     * Choose, which geoSpecies to update.
     */
    where: geoSpeciesWhereUniqueInput
  }


  /**
   * geoSpecies updateMany
   */
  export type geoSpeciesUpdateManyArgs = {
    /**
     * The data used to update geoSpecies.
     */
    data: XOR<geoSpeciesUpdateManyMutationInput, geoSpeciesUncheckedUpdateManyInput>
    /**
     * Filter which geoSpecies to update
     */
    where?: geoSpeciesWhereInput
  }


  /**
   * geoSpecies upsert
   */
  export type geoSpeciesUpsertArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * The filter to search for the geoSpecies to update in case it exists.
     */
    where: geoSpeciesWhereUniqueInput
    /**
     * In case the geoSpecies found by the `where` argument doesn't exist, create a new geoSpecies with this data.
     */
    create: XOR<geoSpeciesCreateInput, geoSpeciesUncheckedCreateInput>
    /**
     * In case the geoSpecies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<geoSpeciesUpdateInput, geoSpeciesUncheckedUpdateInput>
  }


  /**
   * geoSpecies delete
   */
  export type geoSpeciesDeleteArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
    /**
     * Filter which geoSpecies to delete.
     */
    where: geoSpeciesWhereUniqueInput
  }


  /**
   * geoSpecies deleteMany
   */
  export type geoSpeciesDeleteManyArgs = {
    /**
     * Filter which geoSpecies to delete
     */
    where?: geoSpeciesWhereInput
  }


  /**
   * geoSpecies without action
   */
  export type geoSpeciesArgs = {
    /**
     * Select specific fields to fetch from the geoSpecies
     */
    select?: geoSpeciesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: geoSpeciesInclude | null
  }



  /**
   * Model tblProject
   */


  export type AggregateTblProject = {
    _count: TblProjectCountAggregateOutputType | null
    _min: TblProjectMinAggregateOutputType | null
    _max: TblProjectMaxAggregateOutputType | null
  }

  export type TblProjectMinAggregateOutputType = {
    project_key: string | null
    project_name: string | null
    project_description: string | null
    project_website: string | null
    data_use_agreement: string | null
    curator_PersonName: string | null
    curator_organization: string | null
    curator_email: string | null
    author_PersonName: string | null
    author_email: string | null
    author_orcid_id: string | null
    addit_contact_person: string | null
    addit_contact_email: string | null
    bibliographical_reference: string | null
    data_doi: string | null
  }

  export type TblProjectMaxAggregateOutputType = {
    project_key: string | null
    project_name: string | null
    project_description: string | null
    project_website: string | null
    data_use_agreement: string | null
    curator_PersonName: string | null
    curator_organization: string | null
    curator_email: string | null
    author_PersonName: string | null
    author_email: string | null
    author_orcid_id: string | null
    addit_contact_person: string | null
    addit_contact_email: string | null
    bibliographical_reference: string | null
    data_doi: string | null
  }

  export type TblProjectCountAggregateOutputType = {
    project_key: number
    project_name: number
    project_description: number
    project_website: number
    data_use_agreement: number
    curator_PersonName: number
    curator_organization: number
    curator_email: number
    author_PersonName: number
    author_email: number
    author_orcid_id: number
    addit_contact_person: number
    addit_contact_email: number
    bibliographical_reference: number
    data_doi: number
    _all: number
  }


  export type TblProjectMinAggregateInputType = {
    project_key?: true
    project_name?: true
    project_description?: true
    project_website?: true
    data_use_agreement?: true
    curator_PersonName?: true
    curator_organization?: true
    curator_email?: true
    author_PersonName?: true
    author_email?: true
    author_orcid_id?: true
    addit_contact_person?: true
    addit_contact_email?: true
    bibliographical_reference?: true
    data_doi?: true
  }

  export type TblProjectMaxAggregateInputType = {
    project_key?: true
    project_name?: true
    project_description?: true
    project_website?: true
    data_use_agreement?: true
    curator_PersonName?: true
    curator_organization?: true
    curator_email?: true
    author_PersonName?: true
    author_email?: true
    author_orcid_id?: true
    addit_contact_person?: true
    addit_contact_email?: true
    bibliographical_reference?: true
    data_doi?: true
  }

  export type TblProjectCountAggregateInputType = {
    project_key?: true
    project_name?: true
    project_description?: true
    project_website?: true
    data_use_agreement?: true
    curator_PersonName?: true
    curator_organization?: true
    curator_email?: true
    author_PersonName?: true
    author_email?: true
    author_orcid_id?: true
    addit_contact_person?: true
    addit_contact_email?: true
    bibliographical_reference?: true
    data_doi?: true
    _all?: true
  }

  export type TblProjectAggregateArgs = {
    /**
     * Filter which tblProject to aggregate.
     */
    where?: tblProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblProjects to fetch.
     */
    orderBy?: Enumerable<tblProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblProjects
    **/
    _count?: true | TblProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblProjectMaxAggregateInputType
  }

  export type GetTblProjectAggregateType<T extends TblProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTblProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblProject[P]>
      : GetScalarType<T[P], AggregateTblProject[P]>
  }




  export type TblProjectGroupByArgs = {
    where?: tblProjectWhereInput
    orderBy?: Enumerable<tblProjectOrderByWithAggregationInput>
    by: TblProjectScalarFieldEnum[]
    having?: tblProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblProjectCountAggregateInputType | true
    _min?: TblProjectMinAggregateInputType
    _max?: TblProjectMaxAggregateInputType
  }


  export type TblProjectGroupByOutputType = {
    project_key: string
    project_name: string | null
    project_description: string | null
    project_website: string | null
    data_use_agreement: string | null
    curator_PersonName: string | null
    curator_organization: string | null
    curator_email: string | null
    author_PersonName: string | null
    author_email: string | null
    author_orcid_id: string | null
    addit_contact_person: string | null
    addit_contact_email: string | null
    bibliographical_reference: string | null
    data_doi: string | null
    _count: TblProjectCountAggregateOutputType | null
    _min: TblProjectMinAggregateOutputType | null
    _max: TblProjectMaxAggregateOutputType | null
  }

  type GetTblProjectGroupByPayload<T extends TblProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TblProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblProjectGroupByOutputType[P]>
            : GetScalarType<T[P], TblProjectGroupByOutputType[P]>
        }
      >
    >


  export type tblProjectSelect = {
    project_key?: boolean
    project_name?: boolean
    project_description?: boolean
    project_website?: boolean
    data_use_agreement?: boolean
    curator_PersonName?: boolean
    curator_organization?: boolean
    curator_email?: boolean
    author_PersonName?: boolean
    author_email?: boolean
    author_orcid_id?: boolean
    addit_contact_person?: boolean
    addit_contact_email?: boolean
    bibliographical_reference?: boolean
    data_doi?: boolean
  }


  export type tblProjectGetPayload<S extends boolean | null | undefined | tblProjectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tblProject :
    S extends undefined ? never :
    S extends { include: any } & (tblProjectArgs | tblProjectFindManyArgs)
    ? tblProject 
    : S extends { select: any } & (tblProjectArgs | tblProjectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof tblProject ? tblProject[P] : never
  } 
      : tblProject


  type tblProjectCountArgs = 
    Omit<tblProjectFindManyArgs, 'select' | 'include'> & {
      select?: TblProjectCountAggregateInputType | true
    }

  export interface tblProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TblProject that matches the filter.
     * @param {tblProjectFindUniqueArgs} args - Arguments to find a TblProject
     * @example
     * // Get one TblProject
     * const tblProject = await prisma.tblProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tblProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tblProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tblProject'> extends True ? Prisma__tblProjectClient<tblProjectGetPayload<T>> : Prisma__tblProjectClient<tblProjectGetPayload<T> | null, null>

    /**
     * Find one TblProject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tblProjectFindUniqueOrThrowArgs} args - Arguments to find a TblProject
     * @example
     * // Get one TblProject
     * const tblProject = await prisma.tblProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tblProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tblProjectFindUniqueOrThrowArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Find the first TblProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblProjectFindFirstArgs} args - Arguments to find a TblProject
     * @example
     * // Get one TblProject
     * const tblProject = await prisma.tblProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tblProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tblProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tblProject'> extends True ? Prisma__tblProjectClient<tblProjectGetPayload<T>> : Prisma__tblProjectClient<tblProjectGetPayload<T> | null, null>

    /**
     * Find the first TblProject that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblProjectFindFirstOrThrowArgs} args - Arguments to find a TblProject
     * @example
     * // Get one TblProject
     * const tblProject = await prisma.tblProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tblProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tblProjectFindFirstOrThrowArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Find zero or more TblProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblProjects
     * const tblProjects = await prisma.tblProject.findMany()
     * 
     * // Get first 10 TblProjects
     * const tblProjects = await prisma.tblProject.findMany({ take: 10 })
     * 
     * // Only select the `project_key`
     * const tblProjectWithProject_keyOnly = await prisma.tblProject.findMany({ select: { project_key: true } })
     * 
    **/
    findMany<T extends tblProjectFindManyArgs>(
      args?: SelectSubset<T, tblProjectFindManyArgs>
    ): Prisma.PrismaPromise<Array<tblProjectGetPayload<T>>>

    /**
     * Create a TblProject.
     * @param {tblProjectCreateArgs} args - Arguments to create a TblProject.
     * @example
     * // Create one TblProject
     * const TblProject = await prisma.tblProject.create({
     *   data: {
     *     // ... data to create a TblProject
     *   }
     * })
     * 
    **/
    create<T extends tblProjectCreateArgs>(
      args: SelectSubset<T, tblProjectCreateArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Create many TblProjects.
     *     @param {tblProjectCreateManyArgs} args - Arguments to create many TblProjects.
     *     @example
     *     // Create many TblProjects
     *     const tblProject = await prisma.tblProject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tblProjectCreateManyArgs>(
      args?: SelectSubset<T, tblProjectCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblProject.
     * @param {tblProjectDeleteArgs} args - Arguments to delete one TblProject.
     * @example
     * // Delete one TblProject
     * const TblProject = await prisma.tblProject.delete({
     *   where: {
     *     // ... filter to delete one TblProject
     *   }
     * })
     * 
    **/
    delete<T extends tblProjectDeleteArgs>(
      args: SelectSubset<T, tblProjectDeleteArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Update one TblProject.
     * @param {tblProjectUpdateArgs} args - Arguments to update one TblProject.
     * @example
     * // Update one TblProject
     * const tblProject = await prisma.tblProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tblProjectUpdateArgs>(
      args: SelectSubset<T, tblProjectUpdateArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Delete zero or more TblProjects.
     * @param {tblProjectDeleteManyArgs} args - Arguments to filter TblProjects to delete.
     * @example
     * // Delete a few TblProjects
     * const { count } = await prisma.tblProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tblProjectDeleteManyArgs>(
      args?: SelectSubset<T, tblProjectDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblProjects
     * const tblProject = await prisma.tblProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tblProjectUpdateManyArgs>(
      args: SelectSubset<T, tblProjectUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblProject.
     * @param {tblProjectUpsertArgs} args - Arguments to update or create a TblProject.
     * @example
     * // Update or create a TblProject
     * const tblProject = await prisma.tblProject.upsert({
     *   create: {
     *     // ... data to create a TblProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblProject we want to update
     *   }
     * })
    **/
    upsert<T extends tblProjectUpsertArgs>(
      args: SelectSubset<T, tblProjectUpsertArgs>
    ): Prisma__tblProjectClient<tblProjectGetPayload<T>>

    /**
     * Count the number of TblProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblProjectCountArgs} args - Arguments to filter TblProjects to count.
     * @example
     * // Count the number of TblProjects
     * const count = await prisma.tblProject.count({
     *   where: {
     *     // ... the filter for the TblProjects we want to count
     *   }
     * })
    **/
    count<T extends tblProjectCountArgs>(
      args?: Subset<T, tblProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblProjectAggregateArgs>(args: Subset<T, TblProjectAggregateArgs>): Prisma.PrismaPromise<GetTblProjectAggregateType<T>>

    /**
     * Group by TblProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TblProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TblProjectGroupByArgs['orderBy'] }
        : { orderBy?: TblProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TblProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tblProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tblProjectClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tblProject base type for findUnique actions
   */
  export type tblProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter, which tblProject to fetch.
     */
    where: tblProjectWhereUniqueInput
  }

  /**
   * tblProject findUnique
   */
  export interface tblProjectFindUniqueArgs extends tblProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tblProject findUniqueOrThrow
   */
  export type tblProjectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter, which tblProject to fetch.
     */
    where: tblProjectWhereUniqueInput
  }


  /**
   * tblProject base type for findFirst actions
   */
  export type tblProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter, which tblProject to fetch.
     */
    where?: tblProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblProjects to fetch.
     */
    orderBy?: Enumerable<tblProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblProjects.
     */
    cursor?: tblProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblProjects.
     */
    distinct?: Enumerable<TblProjectScalarFieldEnum>
  }

  /**
   * tblProject findFirst
   */
  export interface tblProjectFindFirstArgs extends tblProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tblProject findFirstOrThrow
   */
  export type tblProjectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter, which tblProject to fetch.
     */
    where?: tblProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblProjects to fetch.
     */
    orderBy?: Enumerable<tblProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblProjects.
     */
    cursor?: tblProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblProjects.
     */
    distinct?: Enumerable<TblProjectScalarFieldEnum>
  }


  /**
   * tblProject findMany
   */
  export type tblProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter, which tblProjects to fetch.
     */
    where?: tblProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblProjects to fetch.
     */
    orderBy?: Enumerable<tblProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblProjects.
     */
    cursor?: tblProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblProjects.
     */
    skip?: number
    distinct?: Enumerable<TblProjectScalarFieldEnum>
  }


  /**
   * tblProject create
   */
  export type tblProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * The data needed to create a tblProject.
     */
    data: XOR<tblProjectCreateInput, tblProjectUncheckedCreateInput>
  }


  /**
   * tblProject createMany
   */
  export type tblProjectCreateManyArgs = {
    /**
     * The data used to create many tblProjects.
     */
    data: Enumerable<tblProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tblProject update
   */
  export type tblProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * The data needed to update a tblProject.
     */
    data: XOR<tblProjectUpdateInput, tblProjectUncheckedUpdateInput>
    /**
     * Choose, which tblProject to update.
     */
    where: tblProjectWhereUniqueInput
  }


  /**
   * tblProject updateMany
   */
  export type tblProjectUpdateManyArgs = {
    /**
     * The data used to update tblProjects.
     */
    data: XOR<tblProjectUpdateManyMutationInput, tblProjectUncheckedUpdateManyInput>
    /**
     * Filter which tblProjects to update
     */
    where?: tblProjectWhereInput
  }


  /**
   * tblProject upsert
   */
  export type tblProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * The filter to search for the tblProject to update in case it exists.
     */
    where: tblProjectWhereUniqueInput
    /**
     * In case the tblProject found by the `where` argument doesn't exist, create a new tblProject with this data.
     */
    create: XOR<tblProjectCreateInput, tblProjectUncheckedCreateInput>
    /**
     * In case the tblProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblProjectUpdateInput, tblProjectUncheckedUpdateInput>
  }


  /**
   * tblProject delete
   */
  export type tblProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
    /**
     * Filter which tblProject to delete.
     */
    where: tblProjectWhereUniqueInput
  }


  /**
   * tblProject deleteMany
   */
  export type tblProjectDeleteManyArgs = {
    /**
     * Filter which tblProjects to delete
     */
    where?: tblProjectWhereInput
  }


  /**
   * tblProject without action
   */
  export type tblProjectArgs = {
    /**
     * Select specific fields to fetch from the tblProject
     */
    select?: tblProjectSelect | null
  }



  /**
   * Model tblSchema
   */


  export type AggregateTblSchema = {
    _count: TblSchemaCountAggregateOutputType | null
    _avg: TblSchemaAvgAggregateOutputType | null
    _sum: TblSchemaSumAggregateOutputType | null
    _min: TblSchemaMinAggregateOutputType | null
    _max: TblSchemaMaxAggregateOutputType | null
  }

  export type TblSchemaAvgAggregateOutputType = {
    rid: number | null
    Order: Decimal | null
    Min: Decimal | null
    Max: Decimal | null
    SigFig: Decimal | null
  }

  export type TblSchemaSumAggregateOutputType = {
    rid: number | null
    Order: Decimal | null
    Min: Decimal | null
    Max: Decimal | null
    SigFig: Decimal | null
  }

  export type TblSchemaMinAggregateOutputType = {
    rid: number | null
    Order: Decimal | null
    Table: string | null
    Field: string | null
    Alias: string | null
    Description: string | null
    DataType: string | null
    Length: string | null
    DatatypeNotes: string | null
    Min: Decimal | null
    Max: Decimal | null
    Unit: string | null
    SigFig: Decimal | null
    Version: string | null
    Uploaded: Date | null
  }

  export type TblSchemaMaxAggregateOutputType = {
    rid: number | null
    Order: Decimal | null
    Table: string | null
    Field: string | null
    Alias: string | null
    Description: string | null
    DataType: string | null
    Length: string | null
    DatatypeNotes: string | null
    Min: Decimal | null
    Max: Decimal | null
    Unit: string | null
    SigFig: Decimal | null
    Version: string | null
    Uploaded: Date | null
  }

  export type TblSchemaCountAggregateOutputType = {
    rid: number
    Order: number
    Table: number
    Field: number
    Alias: number
    Description: number
    DataType: number
    Length: number
    DatatypeNotes: number
    Min: number
    Max: number
    Unit: number
    SigFig: number
    Version: number
    Uploaded: number
    _all: number
  }


  export type TblSchemaAvgAggregateInputType = {
    rid?: true
    Order?: true
    Min?: true
    Max?: true
    SigFig?: true
  }

  export type TblSchemaSumAggregateInputType = {
    rid?: true
    Order?: true
    Min?: true
    Max?: true
    SigFig?: true
  }

  export type TblSchemaMinAggregateInputType = {
    rid?: true
    Order?: true
    Table?: true
    Field?: true
    Alias?: true
    Description?: true
    DataType?: true
    Length?: true
    DatatypeNotes?: true
    Min?: true
    Max?: true
    Unit?: true
    SigFig?: true
    Version?: true
    Uploaded?: true
  }

  export type TblSchemaMaxAggregateInputType = {
    rid?: true
    Order?: true
    Table?: true
    Field?: true
    Alias?: true
    Description?: true
    DataType?: true
    Length?: true
    DatatypeNotes?: true
    Min?: true
    Max?: true
    Unit?: true
    SigFig?: true
    Version?: true
    Uploaded?: true
  }

  export type TblSchemaCountAggregateInputType = {
    rid?: true
    Order?: true
    Table?: true
    Field?: true
    Alias?: true
    Description?: true
    DataType?: true
    Length?: true
    DatatypeNotes?: true
    Min?: true
    Max?: true
    Unit?: true
    SigFig?: true
    Version?: true
    Uploaded?: true
    _all?: true
  }

  export type TblSchemaAggregateArgs = {
    /**
     * Filter which tblSchema to aggregate.
     */
    where?: tblSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblSchemas to fetch.
     */
    orderBy?: Enumerable<tblSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblSchemas
    **/
    _count?: true | TblSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblSchemaMaxAggregateInputType
  }

  export type GetTblSchemaAggregateType<T extends TblSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateTblSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblSchema[P]>
      : GetScalarType<T[P], AggregateTblSchema[P]>
  }




  export type TblSchemaGroupByArgs = {
    where?: tblSchemaWhereInput
    orderBy?: Enumerable<tblSchemaOrderByWithAggregationInput>
    by: TblSchemaScalarFieldEnum[]
    having?: tblSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblSchemaCountAggregateInputType | true
    _avg?: TblSchemaAvgAggregateInputType
    _sum?: TblSchemaSumAggregateInputType
    _min?: TblSchemaMinAggregateInputType
    _max?: TblSchemaMaxAggregateInputType
  }


  export type TblSchemaGroupByOutputType = {
    rid: number
    Order: Decimal | null
    Table: string | null
    Field: string | null
    Alias: string | null
    Description: string | null
    DataType: string | null
    Length: string | null
    DatatypeNotes: string | null
    Min: Decimal | null
    Max: Decimal | null
    Unit: string | null
    SigFig: Decimal | null
    Version: string | null
    Uploaded: Date | null
    _count: TblSchemaCountAggregateOutputType | null
    _avg: TblSchemaAvgAggregateOutputType | null
    _sum: TblSchemaSumAggregateOutputType | null
    _min: TblSchemaMinAggregateOutputType | null
    _max: TblSchemaMaxAggregateOutputType | null
  }

  type GetTblSchemaGroupByPayload<T extends TblSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TblSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], TblSchemaGroupByOutputType[P]>
        }
      >
    >


  export type tblSchemaSelect = {
    rid?: boolean
    Order?: boolean
    Table?: boolean
    Field?: boolean
    Alias?: boolean
    Description?: boolean
    DataType?: boolean
    Length?: boolean
    DatatypeNotes?: boolean
    Min?: boolean
    Max?: boolean
    Unit?: boolean
    SigFig?: boolean
    Version?: boolean
    Uploaded?: boolean
  }


  export type tblSchemaGetPayload<S extends boolean | null | undefined | tblSchemaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tblSchema :
    S extends undefined ? never :
    S extends { include: any } & (tblSchemaArgs | tblSchemaFindManyArgs)
    ? tblSchema 
    : S extends { select: any } & (tblSchemaArgs | tblSchemaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof tblSchema ? tblSchema[P] : never
  } 
      : tblSchema


  type tblSchemaCountArgs = 
    Omit<tblSchemaFindManyArgs, 'select' | 'include'> & {
      select?: TblSchemaCountAggregateInputType | true
    }

  export interface tblSchemaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TblSchema that matches the filter.
     * @param {tblSchemaFindUniqueArgs} args - Arguments to find a TblSchema
     * @example
     * // Get one TblSchema
     * const tblSchema = await prisma.tblSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tblSchemaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tblSchemaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tblSchema'> extends True ? Prisma__tblSchemaClient<tblSchemaGetPayload<T>> : Prisma__tblSchemaClient<tblSchemaGetPayload<T> | null, null>

    /**
     * Find one TblSchema that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tblSchemaFindUniqueOrThrowArgs} args - Arguments to find a TblSchema
     * @example
     * // Get one TblSchema
     * const tblSchema = await prisma.tblSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tblSchemaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tblSchemaFindUniqueOrThrowArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Find the first TblSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblSchemaFindFirstArgs} args - Arguments to find a TblSchema
     * @example
     * // Get one TblSchema
     * const tblSchema = await prisma.tblSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tblSchemaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tblSchemaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tblSchema'> extends True ? Prisma__tblSchemaClient<tblSchemaGetPayload<T>> : Prisma__tblSchemaClient<tblSchemaGetPayload<T> | null, null>

    /**
     * Find the first TblSchema that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblSchemaFindFirstOrThrowArgs} args - Arguments to find a TblSchema
     * @example
     * // Get one TblSchema
     * const tblSchema = await prisma.tblSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tblSchemaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tblSchemaFindFirstOrThrowArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Find zero or more TblSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblSchemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblSchemas
     * const tblSchemas = await prisma.tblSchema.findMany()
     * 
     * // Get first 10 TblSchemas
     * const tblSchemas = await prisma.tblSchema.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const tblSchemaWithRidOnly = await prisma.tblSchema.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends tblSchemaFindManyArgs>(
      args?: SelectSubset<T, tblSchemaFindManyArgs>
    ): Prisma.PrismaPromise<Array<tblSchemaGetPayload<T>>>

    /**
     * Create a TblSchema.
     * @param {tblSchemaCreateArgs} args - Arguments to create a TblSchema.
     * @example
     * // Create one TblSchema
     * const TblSchema = await prisma.tblSchema.create({
     *   data: {
     *     // ... data to create a TblSchema
     *   }
     * })
     * 
    **/
    create<T extends tblSchemaCreateArgs>(
      args: SelectSubset<T, tblSchemaCreateArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Create many TblSchemas.
     *     @param {tblSchemaCreateManyArgs} args - Arguments to create many TblSchemas.
     *     @example
     *     // Create many TblSchemas
     *     const tblSchema = await prisma.tblSchema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tblSchemaCreateManyArgs>(
      args?: SelectSubset<T, tblSchemaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblSchema.
     * @param {tblSchemaDeleteArgs} args - Arguments to delete one TblSchema.
     * @example
     * // Delete one TblSchema
     * const TblSchema = await prisma.tblSchema.delete({
     *   where: {
     *     // ... filter to delete one TblSchema
     *   }
     * })
     * 
    **/
    delete<T extends tblSchemaDeleteArgs>(
      args: SelectSubset<T, tblSchemaDeleteArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Update one TblSchema.
     * @param {tblSchemaUpdateArgs} args - Arguments to update one TblSchema.
     * @example
     * // Update one TblSchema
     * const tblSchema = await prisma.tblSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tblSchemaUpdateArgs>(
      args: SelectSubset<T, tblSchemaUpdateArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Delete zero or more TblSchemas.
     * @param {tblSchemaDeleteManyArgs} args - Arguments to filter TblSchemas to delete.
     * @example
     * // Delete a few TblSchemas
     * const { count } = await prisma.tblSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tblSchemaDeleteManyArgs>(
      args?: SelectSubset<T, tblSchemaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblSchemas
     * const tblSchema = await prisma.tblSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tblSchemaUpdateManyArgs>(
      args: SelectSubset<T, tblSchemaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblSchema.
     * @param {tblSchemaUpsertArgs} args - Arguments to update or create a TblSchema.
     * @example
     * // Update or create a TblSchema
     * const tblSchema = await prisma.tblSchema.upsert({
     *   create: {
     *     // ... data to create a TblSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblSchema we want to update
     *   }
     * })
    **/
    upsert<T extends tblSchemaUpsertArgs>(
      args: SelectSubset<T, tblSchemaUpsertArgs>
    ): Prisma__tblSchemaClient<tblSchemaGetPayload<T>>

    /**
     * Count the number of TblSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblSchemaCountArgs} args - Arguments to filter TblSchemas to count.
     * @example
     * // Count the number of TblSchemas
     * const count = await prisma.tblSchema.count({
     *   where: {
     *     // ... the filter for the TblSchemas we want to count
     *   }
     * })
    **/
    count<T extends tblSchemaCountArgs>(
      args?: Subset<T, tblSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblSchemaAggregateArgs>(args: Subset<T, TblSchemaAggregateArgs>): Prisma.PrismaPromise<GetTblSchemaAggregateType<T>>

    /**
     * Group by TblSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TblSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TblSchemaGroupByArgs['orderBy'] }
        : { orderBy?: TblSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TblSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tblSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tblSchemaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tblSchema base type for findUnique actions
   */
  export type tblSchemaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter, which tblSchema to fetch.
     */
    where: tblSchemaWhereUniqueInput
  }

  /**
   * tblSchema findUnique
   */
  export interface tblSchemaFindUniqueArgs extends tblSchemaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tblSchema findUniqueOrThrow
   */
  export type tblSchemaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter, which tblSchema to fetch.
     */
    where: tblSchemaWhereUniqueInput
  }


  /**
   * tblSchema base type for findFirst actions
   */
  export type tblSchemaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter, which tblSchema to fetch.
     */
    where?: tblSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblSchemas to fetch.
     */
    orderBy?: Enumerable<tblSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblSchemas.
     */
    cursor?: tblSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblSchemas.
     */
    distinct?: Enumerable<TblSchemaScalarFieldEnum>
  }

  /**
   * tblSchema findFirst
   */
  export interface tblSchemaFindFirstArgs extends tblSchemaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tblSchema findFirstOrThrow
   */
  export type tblSchemaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter, which tblSchema to fetch.
     */
    where?: tblSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblSchemas to fetch.
     */
    orderBy?: Enumerable<tblSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblSchemas.
     */
    cursor?: tblSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblSchemas.
     */
    distinct?: Enumerable<TblSchemaScalarFieldEnum>
  }


  /**
   * tblSchema findMany
   */
  export type tblSchemaFindManyArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter, which tblSchemas to fetch.
     */
    where?: tblSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblSchemas to fetch.
     */
    orderBy?: Enumerable<tblSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblSchemas.
     */
    cursor?: tblSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblSchemas.
     */
    skip?: number
    distinct?: Enumerable<TblSchemaScalarFieldEnum>
  }


  /**
   * tblSchema create
   */
  export type tblSchemaCreateArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * The data needed to create a tblSchema.
     */
    data: XOR<tblSchemaCreateInput, tblSchemaUncheckedCreateInput>
  }


  /**
   * tblSchema createMany
   */
  export type tblSchemaCreateManyArgs = {
    /**
     * The data used to create many tblSchemas.
     */
    data: Enumerable<tblSchemaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tblSchema update
   */
  export type tblSchemaUpdateArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * The data needed to update a tblSchema.
     */
    data: XOR<tblSchemaUpdateInput, tblSchemaUncheckedUpdateInput>
    /**
     * Choose, which tblSchema to update.
     */
    where: tblSchemaWhereUniqueInput
  }


  /**
   * tblSchema updateMany
   */
  export type tblSchemaUpdateManyArgs = {
    /**
     * The data used to update tblSchemas.
     */
    data: XOR<tblSchemaUpdateManyMutationInput, tblSchemaUncheckedUpdateManyInput>
    /**
     * Filter which tblSchemas to update
     */
    where?: tblSchemaWhereInput
  }


  /**
   * tblSchema upsert
   */
  export type tblSchemaUpsertArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * The filter to search for the tblSchema to update in case it exists.
     */
    where: tblSchemaWhereUniqueInput
    /**
     * In case the tblSchema found by the `where` argument doesn't exist, create a new tblSchema with this data.
     */
    create: XOR<tblSchemaCreateInput, tblSchemaUncheckedCreateInput>
    /**
     * In case the tblSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblSchemaUpdateInput, tblSchemaUncheckedUpdateInput>
  }


  /**
   * tblSchema delete
   */
  export type tblSchemaDeleteArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
    /**
     * Filter which tblSchema to delete.
     */
    where: tblSchemaWhereUniqueInput
  }


  /**
   * tblSchema deleteMany
   */
  export type tblSchemaDeleteManyArgs = {
    /**
     * Filter which tblSchemas to delete
     */
    where?: tblSchemaWhereInput
  }


  /**
   * tblSchema without action
   */
  export type tblSchemaArgs = {
    /**
     * Select specific fields to fetch from the tblSchema
     */
    select?: tblSchemaSelect | null
  }



  /**
   * Model geoIndicators_view
   */


  export type AggregateGeoIndicators_view = {
    _count: GeoIndicators_viewCountAggregateOutputType | null
    _avg: GeoIndicators_viewAvgAggregateOutputType | null
    _sum: GeoIndicators_viewSumAggregateOutputType | null
    _min: GeoIndicators_viewMinAggregateOutputType | null
    _max: GeoIndicators_viewMaxAggregateOutputType | null
  }

  export type GeoIndicators_viewAvgAggregateOutputType = {
    rid: number | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    horizontal_flux_total_MD: number | null
    vertical_flux_MD: number | null
    PM2_5_MD: number | null
    PM10_MD: number | null
  }

  export type GeoIndicators_viewSumAggregateOutputType = {
    rid: number | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    horizontal_flux_total_MD: number | null
    vertical_flux_MD: number | null
    PM2_5_MD: number | null
    PM10_MD: number | null
  }

  export type GeoIndicators_viewMinAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
    horizontal_flux_total_MD: number | null
    vertical_flux_MD: number | null
    PM2_5_MD: number | null
    PM10_MD: number | null
  }

  export type GeoIndicators_viewMaxAggregateOutputType = {
    rid: number | null
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
    horizontal_flux_total_MD: number | null
    vertical_flux_MD: number | null
    PM2_5_MD: number | null
    PM10_MD: number | null
  }

  export type GeoIndicators_viewCountAggregateOutputType = {
    rid: number
    PrimaryKey: number
    DBKey: number
    ProjectKey: number
    DateVisited: number
    EcologicalSiteId: number
    PercentCoveredByEcoSite: number
    Latitude_NAD83: number
    Longitude_NAD83: number
    LocationStatus: number
    LocationType: number
    Latitude_NAD83_Actual: number
    Longitude_NAD83_Actual: number
    BareSoilCover: number
    TotalFoliarCover: number
    AH_AnnGrassCover: number
    AH_ForbCover: number
    AH_GrassCover: number
    AH_PerenForbCover: number
    AH_PerenForbGrassCover: number
    AH_PerenGrassCover: number
    AH_ShrubCover: number
    FH_CyanobacteriaCover: number
    FH_DepSoilCover: number
    FH_DuffCover: number
    FH_EmbLitterCover: number
    FH_HerbLitterCover: number
    FH_LichenCover: number
    FH_MossCover: number
    FH_RockCover: number
    FH_TotalLitterCover: number
    FH_VagrLichenCover: number
    FH_WaterCover: number
    FH_WoodyLitterCover: number
    GapCover_101_200: number
    GapCover_200_plus: number
    GapCover_25_50: number
    GapCover_25_plus: number
    GapCover_51_100: number
    Hgt_Forb_Avg: number
    Hgt_Grass_Avg: number
    Hgt_Herbaceous_Avg: number
    Hgt_PerenForb_Avg: number
    Hgt_PerenForbGrass_Avg: number
    Hgt_PerenGrass_Avg: number
    Hgt_Woody_Avg: number
    RH_AnnualProd: number
    RH_BareGround: number
    RH_BioticIntegrity: number
    RH_CommentsBI: number
    RH_CommentsHF: number
    RH_CommentsSS: number
    RH_Compaction: number
    RH_DeadDyingPlantParts: number
    RH_FuncSructGroup: number
    RH_Gullies: number
    RH_HydrologicFunction: number
    RH_InvasivePlants: number
    RH_LitterAmount: number
    RH_LitterMovement: number
    RH_PedestalsTerracettes: number
    RH_PlantCommunityComp: number
    RH_ReprodCapabilityPeren: number
    RH_Rills: number
    RH_SoilSiteStability: number
    RH_SoilSurfLossDeg: number
    RH_SoilSurfResisErosion: number
    RH_WaterFlowPatterns: number
    RH_WindScouredAreas: number
    SoilStability_All: number
    SoilStability_Protected: number
    SoilStability_Unprotected: number
    DateLoadedInDb: number
    mlra_name: number
    mlrarsym: number
    na_l1name: number
    na_l2name: number
    us_l3name: number
    us_l4name: number
    State: number
    modis_landcover: number
    horizontal_flux_total_MD: number
    vertical_flux_MD: number
    PM2_5_MD: number
    PM10_MD: number
    _all: number
  }


  export type GeoIndicators_viewAvgAggregateInputType = {
    rid?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    horizontal_flux_total_MD?: true
    vertical_flux_MD?: true
    PM2_5_MD?: true
    PM10_MD?: true
  }

  export type GeoIndicators_viewSumAggregateInputType = {
    rid?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    horizontal_flux_total_MD?: true
    vertical_flux_MD?: true
    PM2_5_MD?: true
    PM10_MD?: true
  }

  export type GeoIndicators_viewMinAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
    horizontal_flux_total_MD?: true
    vertical_flux_MD?: true
    PM2_5_MD?: true
    PM10_MD?: true
  }

  export type GeoIndicators_viewMaxAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
    horizontal_flux_total_MD?: true
    vertical_flux_MD?: true
    PM2_5_MD?: true
    PM10_MD?: true
  }

  export type GeoIndicators_viewCountAggregateInputType = {
    rid?: true
    PrimaryKey?: true
    DBKey?: true
    ProjectKey?: true
    DateVisited?: true
    EcologicalSiteId?: true
    PercentCoveredByEcoSite?: true
    Latitude_NAD83?: true
    Longitude_NAD83?: true
    LocationStatus?: true
    LocationType?: true
    Latitude_NAD83_Actual?: true
    Longitude_NAD83_Actual?: true
    BareSoilCover?: true
    TotalFoliarCover?: true
    AH_AnnGrassCover?: true
    AH_ForbCover?: true
    AH_GrassCover?: true
    AH_PerenForbCover?: true
    AH_PerenForbGrassCover?: true
    AH_PerenGrassCover?: true
    AH_ShrubCover?: true
    FH_CyanobacteriaCover?: true
    FH_DepSoilCover?: true
    FH_DuffCover?: true
    FH_EmbLitterCover?: true
    FH_HerbLitterCover?: true
    FH_LichenCover?: true
    FH_MossCover?: true
    FH_RockCover?: true
    FH_TotalLitterCover?: true
    FH_VagrLichenCover?: true
    FH_WaterCover?: true
    FH_WoodyLitterCover?: true
    GapCover_101_200?: true
    GapCover_200_plus?: true
    GapCover_25_50?: true
    GapCover_25_plus?: true
    GapCover_51_100?: true
    Hgt_Forb_Avg?: true
    Hgt_Grass_Avg?: true
    Hgt_Herbaceous_Avg?: true
    Hgt_PerenForb_Avg?: true
    Hgt_PerenForbGrass_Avg?: true
    Hgt_PerenGrass_Avg?: true
    Hgt_Woody_Avg?: true
    RH_AnnualProd?: true
    RH_BareGround?: true
    RH_BioticIntegrity?: true
    RH_CommentsBI?: true
    RH_CommentsHF?: true
    RH_CommentsSS?: true
    RH_Compaction?: true
    RH_DeadDyingPlantParts?: true
    RH_FuncSructGroup?: true
    RH_Gullies?: true
    RH_HydrologicFunction?: true
    RH_InvasivePlants?: true
    RH_LitterAmount?: true
    RH_LitterMovement?: true
    RH_PedestalsTerracettes?: true
    RH_PlantCommunityComp?: true
    RH_ReprodCapabilityPeren?: true
    RH_Rills?: true
    RH_SoilSiteStability?: true
    RH_SoilSurfLossDeg?: true
    RH_SoilSurfResisErosion?: true
    RH_WaterFlowPatterns?: true
    RH_WindScouredAreas?: true
    SoilStability_All?: true
    SoilStability_Protected?: true
    SoilStability_Unprotected?: true
    DateLoadedInDb?: true
    mlra_name?: true
    mlrarsym?: true
    na_l1name?: true
    na_l2name?: true
    us_l3name?: true
    us_l4name?: true
    State?: true
    modis_landcover?: true
    horizontal_flux_total_MD?: true
    vertical_flux_MD?: true
    PM2_5_MD?: true
    PM10_MD?: true
    _all?: true
  }

  export type GeoIndicators_viewAggregateArgs = {
    /**
     * Filter which geoIndicators_view to aggregate.
     */
    where?: geoIndicators_viewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators_views to fetch.
     */
    orderBy?: Enumerable<geoIndicators_viewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: geoIndicators_viewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned geoIndicators_views
    **/
    _count?: true | GeoIndicators_viewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeoIndicators_viewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeoIndicators_viewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeoIndicators_viewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeoIndicators_viewMaxAggregateInputType
  }

  export type GetGeoIndicators_viewAggregateType<T extends GeoIndicators_viewAggregateArgs> = {
        [P in keyof T & keyof AggregateGeoIndicators_view]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeoIndicators_view[P]>
      : GetScalarType<T[P], AggregateGeoIndicators_view[P]>
  }




  export type GeoIndicators_viewGroupByArgs = {
    where?: geoIndicators_viewWhereInput
    orderBy?: Enumerable<geoIndicators_viewOrderByWithAggregationInput>
    by: GeoIndicators_viewScalarFieldEnum[]
    having?: geoIndicators_viewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeoIndicators_viewCountAggregateInputType | true
    _avg?: GeoIndicators_viewAvgAggregateInputType
    _sum?: GeoIndicators_viewSumAggregateInputType
    _min?: GeoIndicators_viewMinAggregateInputType
    _max?: GeoIndicators_viewMaxAggregateInputType
  }


  export type GeoIndicators_viewGroupByOutputType = {
    rid: number
    PrimaryKey: string | null
    DBKey: string | null
    ProjectKey: string | null
    DateVisited: Date | null
    EcologicalSiteId: string | null
    PercentCoveredByEcoSite: number | null
    Latitude_NAD83: Decimal | null
    Longitude_NAD83: Decimal | null
    LocationStatus: string | null
    LocationType: string | null
    Latitude_NAD83_Actual: number | null
    Longitude_NAD83_Actual: number | null
    BareSoilCover: number | null
    TotalFoliarCover: number | null
    AH_AnnGrassCover: number | null
    AH_ForbCover: number | null
    AH_GrassCover: number | null
    AH_PerenForbCover: number | null
    AH_PerenForbGrassCover: number | null
    AH_PerenGrassCover: number | null
    AH_ShrubCover: number | null
    FH_CyanobacteriaCover: number | null
    FH_DepSoilCover: number | null
    FH_DuffCover: number | null
    FH_EmbLitterCover: number | null
    FH_HerbLitterCover: number | null
    FH_LichenCover: number | null
    FH_MossCover: number | null
    FH_RockCover: number | null
    FH_TotalLitterCover: number | null
    FH_VagrLichenCover: number | null
    FH_WaterCover: number | null
    FH_WoodyLitterCover: number | null
    GapCover_101_200: number | null
    GapCover_200_plus: number | null
    GapCover_25_50: number | null
    GapCover_25_plus: number | null
    GapCover_51_100: number | null
    Hgt_Forb_Avg: number | null
    Hgt_Grass_Avg: number | null
    Hgt_Herbaceous_Avg: number | null
    Hgt_PerenForb_Avg: number | null
    Hgt_PerenForbGrass_Avg: number | null
    Hgt_PerenGrass_Avg: number | null
    Hgt_Woody_Avg: number | null
    RH_AnnualProd: string | null
    RH_BareGround: string | null
    RH_BioticIntegrity: string | null
    RH_CommentsBI: string | null
    RH_CommentsHF: string | null
    RH_CommentsSS: string | null
    RH_Compaction: string | null
    RH_DeadDyingPlantParts: string | null
    RH_FuncSructGroup: string | null
    RH_Gullies: string | null
    RH_HydrologicFunction: string | null
    RH_InvasivePlants: string | null
    RH_LitterAmount: string | null
    RH_LitterMovement: string | null
    RH_PedestalsTerracettes: string | null
    RH_PlantCommunityComp: string | null
    RH_ReprodCapabilityPeren: string | null
    RH_Rills: string | null
    RH_SoilSiteStability: string | null
    RH_SoilSurfLossDeg: string | null
    RH_SoilSurfResisErosion: string | null
    RH_WaterFlowPatterns: string | null
    RH_WindScouredAreas: string | null
    SoilStability_All: number | null
    SoilStability_Protected: number | null
    SoilStability_Unprotected: number | null
    DateLoadedInDb: Date | null
    mlra_name: string | null
    mlrarsym: string | null
    na_l1name: string | null
    na_l2name: string | null
    us_l3name: string | null
    us_l4name: string | null
    State: string | null
    modis_landcover: string | null
    horizontal_flux_total_MD: number | null
    vertical_flux_MD: number | null
    PM2_5_MD: number | null
    PM10_MD: number | null
    _count: GeoIndicators_viewCountAggregateOutputType | null
    _avg: GeoIndicators_viewAvgAggregateOutputType | null
    _sum: GeoIndicators_viewSumAggregateOutputType | null
    _min: GeoIndicators_viewMinAggregateOutputType | null
    _max: GeoIndicators_viewMaxAggregateOutputType | null
  }

  type GetGeoIndicators_viewGroupByPayload<T extends GeoIndicators_viewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeoIndicators_viewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeoIndicators_viewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeoIndicators_viewGroupByOutputType[P]>
            : GetScalarType<T[P], GeoIndicators_viewGroupByOutputType[P]>
        }
      >
    >


  export type geoIndicators_viewSelect = {
    rid?: boolean
    PrimaryKey?: boolean
    DBKey?: boolean
    ProjectKey?: boolean
    DateVisited?: boolean
    EcologicalSiteId?: boolean
    PercentCoveredByEcoSite?: boolean
    Latitude_NAD83?: boolean
    Longitude_NAD83?: boolean
    LocationStatus?: boolean
    LocationType?: boolean
    Latitude_NAD83_Actual?: boolean
    Longitude_NAD83_Actual?: boolean
    BareSoilCover?: boolean
    TotalFoliarCover?: boolean
    AH_AnnGrassCover?: boolean
    AH_ForbCover?: boolean
    AH_GrassCover?: boolean
    AH_PerenForbCover?: boolean
    AH_PerenForbGrassCover?: boolean
    AH_PerenGrassCover?: boolean
    AH_ShrubCover?: boolean
    FH_CyanobacteriaCover?: boolean
    FH_DepSoilCover?: boolean
    FH_DuffCover?: boolean
    FH_EmbLitterCover?: boolean
    FH_HerbLitterCover?: boolean
    FH_LichenCover?: boolean
    FH_MossCover?: boolean
    FH_RockCover?: boolean
    FH_TotalLitterCover?: boolean
    FH_VagrLichenCover?: boolean
    FH_WaterCover?: boolean
    FH_WoodyLitterCover?: boolean
    GapCover_101_200?: boolean
    GapCover_200_plus?: boolean
    GapCover_25_50?: boolean
    GapCover_25_plus?: boolean
    GapCover_51_100?: boolean
    Hgt_Forb_Avg?: boolean
    Hgt_Grass_Avg?: boolean
    Hgt_Herbaceous_Avg?: boolean
    Hgt_PerenForb_Avg?: boolean
    Hgt_PerenForbGrass_Avg?: boolean
    Hgt_PerenGrass_Avg?: boolean
    Hgt_Woody_Avg?: boolean
    RH_AnnualProd?: boolean
    RH_BareGround?: boolean
    RH_BioticIntegrity?: boolean
    RH_CommentsBI?: boolean
    RH_CommentsHF?: boolean
    RH_CommentsSS?: boolean
    RH_Compaction?: boolean
    RH_DeadDyingPlantParts?: boolean
    RH_FuncSructGroup?: boolean
    RH_Gullies?: boolean
    RH_HydrologicFunction?: boolean
    RH_InvasivePlants?: boolean
    RH_LitterAmount?: boolean
    RH_LitterMovement?: boolean
    RH_PedestalsTerracettes?: boolean
    RH_PlantCommunityComp?: boolean
    RH_ReprodCapabilityPeren?: boolean
    RH_Rills?: boolean
    RH_SoilSiteStability?: boolean
    RH_SoilSurfLossDeg?: boolean
    RH_SoilSurfResisErosion?: boolean
    RH_WaterFlowPatterns?: boolean
    RH_WindScouredAreas?: boolean
    SoilStability_All?: boolean
    SoilStability_Protected?: boolean
    SoilStability_Unprotected?: boolean
    DateLoadedInDb?: boolean
    mlra_name?: boolean
    mlrarsym?: boolean
    na_l1name?: boolean
    na_l2name?: boolean
    us_l3name?: boolean
    us_l4name?: boolean
    State?: boolean
    modis_landcover?: boolean
    horizontal_flux_total_MD?: boolean
    vertical_flux_MD?: boolean
    PM2_5_MD?: boolean
    PM10_MD?: boolean
  }


  export type geoIndicators_viewGetPayload<S extends boolean | null | undefined | geoIndicators_viewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? geoIndicators_view :
    S extends undefined ? never :
    S extends { include: any } & (geoIndicators_viewArgs | geoIndicators_viewFindManyArgs)
    ? geoIndicators_view 
    : S extends { select: any } & (geoIndicators_viewArgs | geoIndicators_viewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof geoIndicators_view ? geoIndicators_view[P] : never
  } 
      : geoIndicators_view


  type geoIndicators_viewCountArgs = 
    Omit<geoIndicators_viewFindManyArgs, 'select' | 'include'> & {
      select?: GeoIndicators_viewCountAggregateInputType | true
    }

  export interface geoIndicators_viewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeoIndicators_view that matches the filter.
     * @param {geoIndicators_viewFindUniqueArgs} args - Arguments to find a GeoIndicators_view
     * @example
     * // Get one GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends geoIndicators_viewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, geoIndicators_viewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'geoIndicators_view'> extends True ? Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>> : Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T> | null, null>

    /**
     * Find one GeoIndicators_view that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {geoIndicators_viewFindUniqueOrThrowArgs} args - Arguments to find a GeoIndicators_view
     * @example
     * // Get one GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends geoIndicators_viewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, geoIndicators_viewFindUniqueOrThrowArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Find the first GeoIndicators_view that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicators_viewFindFirstArgs} args - Arguments to find a GeoIndicators_view
     * @example
     * // Get one GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends geoIndicators_viewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, geoIndicators_viewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'geoIndicators_view'> extends True ? Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>> : Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T> | null, null>

    /**
     * Find the first GeoIndicators_view that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicators_viewFindFirstOrThrowArgs} args - Arguments to find a GeoIndicators_view
     * @example
     * // Get one GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends geoIndicators_viewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, geoIndicators_viewFindFirstOrThrowArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Find zero or more GeoIndicators_views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicators_viewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeoIndicators_views
     * const geoIndicators_views = await prisma.geoIndicators_view.findMany()
     * 
     * // Get first 10 GeoIndicators_views
     * const geoIndicators_views = await prisma.geoIndicators_view.findMany({ take: 10 })
     * 
     * // Only select the `rid`
     * const geoIndicators_viewWithRidOnly = await prisma.geoIndicators_view.findMany({ select: { rid: true } })
     * 
    **/
    findMany<T extends geoIndicators_viewFindManyArgs>(
      args?: SelectSubset<T, geoIndicators_viewFindManyArgs>
    ): Prisma.PrismaPromise<Array<geoIndicators_viewGetPayload<T>>>

    /**
     * Create a GeoIndicators_view.
     * @param {geoIndicators_viewCreateArgs} args - Arguments to create a GeoIndicators_view.
     * @example
     * // Create one GeoIndicators_view
     * const GeoIndicators_view = await prisma.geoIndicators_view.create({
     *   data: {
     *     // ... data to create a GeoIndicators_view
     *   }
     * })
     * 
    **/
    create<T extends geoIndicators_viewCreateArgs>(
      args: SelectSubset<T, geoIndicators_viewCreateArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Create many GeoIndicators_views.
     *     @param {geoIndicators_viewCreateManyArgs} args - Arguments to create many GeoIndicators_views.
     *     @example
     *     // Create many GeoIndicators_views
     *     const geoIndicators_view = await prisma.geoIndicators_view.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends geoIndicators_viewCreateManyArgs>(
      args?: SelectSubset<T, geoIndicators_viewCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeoIndicators_view.
     * @param {geoIndicators_viewDeleteArgs} args - Arguments to delete one GeoIndicators_view.
     * @example
     * // Delete one GeoIndicators_view
     * const GeoIndicators_view = await prisma.geoIndicators_view.delete({
     *   where: {
     *     // ... filter to delete one GeoIndicators_view
     *   }
     * })
     * 
    **/
    delete<T extends geoIndicators_viewDeleteArgs>(
      args: SelectSubset<T, geoIndicators_viewDeleteArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Update one GeoIndicators_view.
     * @param {geoIndicators_viewUpdateArgs} args - Arguments to update one GeoIndicators_view.
     * @example
     * // Update one GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends geoIndicators_viewUpdateArgs>(
      args: SelectSubset<T, geoIndicators_viewUpdateArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Delete zero or more GeoIndicators_views.
     * @param {geoIndicators_viewDeleteManyArgs} args - Arguments to filter GeoIndicators_views to delete.
     * @example
     * // Delete a few GeoIndicators_views
     * const { count } = await prisma.geoIndicators_view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends geoIndicators_viewDeleteManyArgs>(
      args?: SelectSubset<T, geoIndicators_viewDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeoIndicators_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicators_viewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeoIndicators_views
     * const geoIndicators_view = await prisma.geoIndicators_view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends geoIndicators_viewUpdateManyArgs>(
      args: SelectSubset<T, geoIndicators_viewUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeoIndicators_view.
     * @param {geoIndicators_viewUpsertArgs} args - Arguments to update or create a GeoIndicators_view.
     * @example
     * // Update or create a GeoIndicators_view
     * const geoIndicators_view = await prisma.geoIndicators_view.upsert({
     *   create: {
     *     // ... data to create a GeoIndicators_view
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeoIndicators_view we want to update
     *   }
     * })
    **/
    upsert<T extends geoIndicators_viewUpsertArgs>(
      args: SelectSubset<T, geoIndicators_viewUpsertArgs>
    ): Prisma__geoIndicators_viewClient<geoIndicators_viewGetPayload<T>>

    /**
     * Count the number of GeoIndicators_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geoIndicators_viewCountArgs} args - Arguments to filter GeoIndicators_views to count.
     * @example
     * // Count the number of GeoIndicators_views
     * const count = await prisma.geoIndicators_view.count({
     *   where: {
     *     // ... the filter for the GeoIndicators_views we want to count
     *   }
     * })
    **/
    count<T extends geoIndicators_viewCountArgs>(
      args?: Subset<T, geoIndicators_viewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeoIndicators_viewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeoIndicators_view.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoIndicators_viewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeoIndicators_viewAggregateArgs>(args: Subset<T, GeoIndicators_viewAggregateArgs>): Prisma.PrismaPromise<GetGeoIndicators_viewAggregateType<T>>

    /**
     * Group by GeoIndicators_view.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoIndicators_viewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeoIndicators_viewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeoIndicators_viewGroupByArgs['orderBy'] }
        : { orderBy?: GeoIndicators_viewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeoIndicators_viewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeoIndicators_viewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for geoIndicators_view.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__geoIndicators_viewClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * geoIndicators_view base type for findUnique actions
   */
  export type geoIndicators_viewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter, which geoIndicators_view to fetch.
     */
    where: geoIndicators_viewWhereUniqueInput
  }

  /**
   * geoIndicators_view findUnique
   */
  export interface geoIndicators_viewFindUniqueArgs extends geoIndicators_viewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoIndicators_view findUniqueOrThrow
   */
  export type geoIndicators_viewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter, which geoIndicators_view to fetch.
     */
    where: geoIndicators_viewWhereUniqueInput
  }


  /**
   * geoIndicators_view base type for findFirst actions
   */
  export type geoIndicators_viewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter, which geoIndicators_view to fetch.
     */
    where?: geoIndicators_viewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators_views to fetch.
     */
    orderBy?: Enumerable<geoIndicators_viewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoIndicators_views.
     */
    cursor?: geoIndicators_viewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoIndicators_views.
     */
    distinct?: Enumerable<GeoIndicators_viewScalarFieldEnum>
  }

  /**
   * geoIndicators_view findFirst
   */
  export interface geoIndicators_viewFindFirstArgs extends geoIndicators_viewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * geoIndicators_view findFirstOrThrow
   */
  export type geoIndicators_viewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter, which geoIndicators_view to fetch.
     */
    where?: geoIndicators_viewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators_views to fetch.
     */
    orderBy?: Enumerable<geoIndicators_viewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geoIndicators_views.
     */
    cursor?: geoIndicators_viewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geoIndicators_views.
     */
    distinct?: Enumerable<GeoIndicators_viewScalarFieldEnum>
  }


  /**
   * geoIndicators_view findMany
   */
  export type geoIndicators_viewFindManyArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter, which geoIndicators_views to fetch.
     */
    where?: geoIndicators_viewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geoIndicators_views to fetch.
     */
    orderBy?: Enumerable<geoIndicators_viewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing geoIndicators_views.
     */
    cursor?: geoIndicators_viewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geoIndicators_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geoIndicators_views.
     */
    skip?: number
    distinct?: Enumerable<GeoIndicators_viewScalarFieldEnum>
  }


  /**
   * geoIndicators_view create
   */
  export type geoIndicators_viewCreateArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * The data needed to create a geoIndicators_view.
     */
    data: XOR<geoIndicators_viewCreateInput, geoIndicators_viewUncheckedCreateInput>
  }


  /**
   * geoIndicators_view createMany
   */
  export type geoIndicators_viewCreateManyArgs = {
    /**
     * The data used to create many geoIndicators_views.
     */
    data: Enumerable<geoIndicators_viewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * geoIndicators_view update
   */
  export type geoIndicators_viewUpdateArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * The data needed to update a geoIndicators_view.
     */
    data: XOR<geoIndicators_viewUpdateInput, geoIndicators_viewUncheckedUpdateInput>
    /**
     * Choose, which geoIndicators_view to update.
     */
    where: geoIndicators_viewWhereUniqueInput
  }


  /**
   * geoIndicators_view updateMany
   */
  export type geoIndicators_viewUpdateManyArgs = {
    /**
     * The data used to update geoIndicators_views.
     */
    data: XOR<geoIndicators_viewUpdateManyMutationInput, geoIndicators_viewUncheckedUpdateManyInput>
    /**
     * Filter which geoIndicators_views to update
     */
    where?: geoIndicators_viewWhereInput
  }


  /**
   * geoIndicators_view upsert
   */
  export type geoIndicators_viewUpsertArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * The filter to search for the geoIndicators_view to update in case it exists.
     */
    where: geoIndicators_viewWhereUniqueInput
    /**
     * In case the geoIndicators_view found by the `where` argument doesn't exist, create a new geoIndicators_view with this data.
     */
    create: XOR<geoIndicators_viewCreateInput, geoIndicators_viewUncheckedCreateInput>
    /**
     * In case the geoIndicators_view was found with the provided `where` argument, update it with this data.
     */
    update: XOR<geoIndicators_viewUpdateInput, geoIndicators_viewUncheckedUpdateInput>
  }


  /**
   * geoIndicators_view delete
   */
  export type geoIndicators_viewDeleteArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
    /**
     * Filter which geoIndicators_view to delete.
     */
    where: geoIndicators_viewWhereUniqueInput
  }


  /**
   * geoIndicators_view deleteMany
   */
  export type geoIndicators_viewDeleteManyArgs = {
    /**
     * Filter which geoIndicators_views to delete
     */
    where?: geoIndicators_viewWhereInput
  }


  /**
   * geoIndicators_view without action
   */
  export type geoIndicators_viewArgs = {
    /**
     * Select specific fields to fetch from the geoIndicators_view
     */
    select?: geoIndicators_viewSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DataGapScalarFieldEnum: {
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
  };

  export type DataGapScalarFieldEnum = (typeof DataGapScalarFieldEnum)[keyof typeof DataGapScalarFieldEnum]


  export const DataHeaderScalarFieldEnum: {
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
  };

  export type DataHeaderScalarFieldEnum = (typeof DataHeaderScalarFieldEnum)[keyof typeof DataHeaderScalarFieldEnum]


  export const DataHeightScalarFieldEnum: {
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
  };

  export type DataHeightScalarFieldEnum = (typeof DataHeightScalarFieldEnum)[keyof typeof DataHeightScalarFieldEnum]


  export const DataLPIScalarFieldEnum: {
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
  };

  export type DataLPIScalarFieldEnum = (typeof DataLPIScalarFieldEnum)[keyof typeof DataLPIScalarFieldEnum]


  export const DataSoilStabilityScalarFieldEnum: {
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
  };

  export type DataSoilStabilityScalarFieldEnum = (typeof DataSoilStabilityScalarFieldEnum)[keyof typeof DataSoilStabilityScalarFieldEnum]


  export const DataSpeciesInventoryScalarFieldEnum: {
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
  };

  export type DataSpeciesInventoryScalarFieldEnum = (typeof DataSpeciesInventoryScalarFieldEnum)[keyof typeof DataSpeciesInventoryScalarFieldEnum]


  export const GeoIndicatorsScalarFieldEnum: {
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
  };

  export type GeoIndicatorsScalarFieldEnum = (typeof GeoIndicatorsScalarFieldEnum)[keyof typeof GeoIndicatorsScalarFieldEnum]


  export const GeoIndicators_viewScalarFieldEnum: {
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
  };

  export type GeoIndicators_viewScalarFieldEnum = (typeof GeoIndicators_viewScalarFieldEnum)[keyof typeof GeoIndicators_viewScalarFieldEnum]


  export const GeoSpeciesScalarFieldEnum: {
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
  };

  export type GeoSpeciesScalarFieldEnum = (typeof GeoSpeciesScalarFieldEnum)[keyof typeof GeoSpeciesScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TblProjectScalarFieldEnum: {
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
  };

  export type TblProjectScalarFieldEnum = (typeof TblProjectScalarFieldEnum)[keyof typeof TblProjectScalarFieldEnum]


  export const TblSchemaScalarFieldEnum: {
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
  };

  export type TblSchemaScalarFieldEnum = (typeof TblSchemaScalarFieldEnum)[keyof typeof TblSchemaScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type dataGapWhereInput = {
    AND?: Enumerable<dataGapWhereInput>
    OR?: Enumerable<dataGapWhereInput>
    NOT?: Enumerable<dataGapWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    RecType?: StringNullableFilter | string | null
    SeqNo?: IntNullableFilter | number | null
    GapStart?: FloatNullableFilter | number | null
    GapEnd?: FloatNullableFilter | number | null
    Gap?: FloatNullableFilter | number | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    DateModified?: DateTimeNullableFilter | Date | string | null
    FormType?: StringNullableFilter | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: FloatNullableFilter | number | null
    GapMin?: FloatNullableFilter | number | null
    GapData?: IntNullableFilter | number | null
    PerennialsCanopy?: StringNullableFilter | string | null
    AnnualGrassesCanopy?: StringNullableFilter | string | null
    AnnualForbsCanopy?: StringNullableFilter | string | null
    OtherCanopy?: StringNullableFilter | string | null
    Notes?: StringNullableFilter | string | null
    NoCanopyGaps?: IntNullableFilter | number | null
    NoBasalGaps?: IntNullableFilter | number | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    PerennialsBasal?: StringNullableFilter | string | null
    AnnualGrassesBasal?: StringNullableFilter | string | null
    AnnualForbsBasal?: StringNullableFilter | string | null
    OtherBasal?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type dataGapOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecType?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormDate?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    PerennialsCanopy?: SortOrder
    AnnualGrassesCanopy?: SortOrder
    AnnualForbsCanopy?: SortOrder
    OtherCanopy?: SortOrder
    Notes?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
    DateLoadedInDb?: SortOrder
    PerennialsBasal?: SortOrder
    AnnualGrassesBasal?: SortOrder
    AnnualForbsBasal?: SortOrder
    OtherBasal?: SortOrder
    source?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type dataGapWhereUniqueInput = {
    rid?: number
    PrimaryKey_GapStart_GapEnd_rid?: dataGapPrimaryKeyGapStartGapEndRidCompoundUniqueInput
  }

  export type dataGapOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecType?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormDate?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    PerennialsCanopy?: SortOrder
    AnnualGrassesCanopy?: SortOrder
    AnnualForbsCanopy?: SortOrder
    OtherCanopy?: SortOrder
    Notes?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
    DateLoadedInDb?: SortOrder
    PerennialsBasal?: SortOrder
    AnnualGrassesBasal?: SortOrder
    AnnualForbsBasal?: SortOrder
    OtherBasal?: SortOrder
    source?: SortOrder
    DateVisited?: SortOrder
    _count?: dataGapCountOrderByAggregateInput
    _avg?: dataGapAvgOrderByAggregateInput
    _max?: dataGapMaxOrderByAggregateInput
    _min?: dataGapMinOrderByAggregateInput
    _sum?: dataGapSumOrderByAggregateInput
  }

  export type dataGapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataGapScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataGapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataGapScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    RecType?: StringNullableWithAggregatesFilter | string | null
    SeqNo?: IntNullableWithAggregatesFilter | number | null
    GapStart?: FloatNullableWithAggregatesFilter | number | null
    GapEnd?: FloatNullableWithAggregatesFilter | number | null
    Gap?: FloatNullableWithAggregatesFilter | number | null
    LineKey?: StringNullableWithAggregatesFilter | string | null
    RecKey?: StringNullableWithAggregatesFilter | string | null
    FormDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateModified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    FormType?: StringNullableWithAggregatesFilter | string | null
    Direction?: StringNullableWithAggregatesFilter | string | null
    Measure?: IntNullableWithAggregatesFilter | number | null
    LineLengthAmount?: FloatNullableWithAggregatesFilter | number | null
    GapMin?: FloatNullableWithAggregatesFilter | number | null
    GapData?: IntNullableWithAggregatesFilter | number | null
    PerennialsCanopy?: StringNullableWithAggregatesFilter | string | null
    AnnualGrassesCanopy?: StringNullableWithAggregatesFilter | string | null
    AnnualForbsCanopy?: StringNullableWithAggregatesFilter | string | null
    OtherCanopy?: StringNullableWithAggregatesFilter | string | null
    Notes?: StringNullableWithAggregatesFilter | string | null
    NoCanopyGaps?: IntNullableWithAggregatesFilter | number | null
    NoBasalGaps?: IntNullableWithAggregatesFilter | number | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    PerennialsBasal?: StringNullableWithAggregatesFilter | string | null
    AnnualGrassesBasal?: StringNullableWithAggregatesFilter | string | null
    AnnualForbsBasal?: StringNullableWithAggregatesFilter | string | null
    OtherBasal?: StringNullableWithAggregatesFilter | string | null
    source?: StringNullableWithAggregatesFilter | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dataHeaderWhereInput = {
    AND?: Enumerable<dataHeaderWhereInput>
    OR?: Enumerable<dataHeaderWhereInput>
    NOT?: Enumerable<dataHeaderWhereInput>
    PrimaryKey?: StringFilter | string
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    Latitude_NAD83?: FloatNullableFilter | number | null
    Longitude_NAD83?: FloatNullableFilter | number | null
    LocationType?: StringNullableFilter | string | null
    EcologicalSiteID?: StringNullableFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableFilter | number | null
    SpeciesKey?: StringNullableFilter | string | null
    PlotID?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    source?: StringNullableFilter | string | null
    rid?: IntFilter | number
    dataGap?: DataGapListRelationFilter
    dataHeight?: DataHeightListRelationFilter
    dataLPI?: DataLPIListRelationFilter
    dataSoilStability?: DataSoilStabilityListRelationFilter
    dataSpeciesInventory?: DataSpeciesInventoryListRelationFilter
    geoIndicators?: XOR<GeoIndicatorsRelationFilter, geoIndicatorsWhereInput> | null
    geoSpecies?: GeoSpeciesListRelationFilter
  }

  export type dataHeaderOrderByWithRelationInput = {
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationType?: SortOrder
    EcologicalSiteID?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    SpeciesKey?: SortOrder
    PlotID?: SortOrder
    DateLoadedInDb?: SortOrder
    source?: SortOrder
    rid?: SortOrder
    dataGap?: dataGapOrderByRelationAggregateInput
    dataHeight?: dataHeightOrderByRelationAggregateInput
    dataLPI?: dataLPIOrderByRelationAggregateInput
    dataSoilStability?: dataSoilStabilityOrderByRelationAggregateInput
    dataSpeciesInventory?: dataSpeciesInventoryOrderByRelationAggregateInput
    geoIndicators?: geoIndicatorsOrderByWithRelationInput
    geoSpecies?: geoSpeciesOrderByRelationAggregateInput
  }

  export type dataHeaderWhereUniqueInput = {
    PrimaryKey?: string
    rid?: number
  }

  export type dataHeaderOrderByWithAggregationInput = {
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationType?: SortOrder
    EcologicalSiteID?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    SpeciesKey?: SortOrder
    PlotID?: SortOrder
    DateLoadedInDb?: SortOrder
    source?: SortOrder
    rid?: SortOrder
    _count?: dataHeaderCountOrderByAggregateInput
    _avg?: dataHeaderAvgOrderByAggregateInput
    _max?: dataHeaderMaxOrderByAggregateInput
    _min?: dataHeaderMinOrderByAggregateInput
    _sum?: dataHeaderSumOrderByAggregateInput
  }

  export type dataHeaderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataHeaderScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataHeaderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataHeaderScalarWhereWithAggregatesInput>
    PrimaryKey?: StringWithAggregatesFilter | string
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
    Latitude_NAD83?: FloatNullableWithAggregatesFilter | number | null
    Longitude_NAD83?: FloatNullableWithAggregatesFilter | number | null
    LocationType?: StringNullableWithAggregatesFilter | string | null
    EcologicalSiteID?: StringNullableWithAggregatesFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableWithAggregatesFilter | number | null
    SpeciesKey?: StringNullableWithAggregatesFilter | string | null
    PlotID?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    source?: StringNullableWithAggregatesFilter | string | null
    rid?: IntWithAggregatesFilter | number
  }

  export type dataHeightWhereInput = {
    AND?: Enumerable<dataHeightWhereInput>
    OR?: Enumerable<dataHeightWhereInput>
    NOT?: Enumerable<dataHeightWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    PointLoc?: FloatNullableFilter | number | null
    PointNbr?: IntNullableFilter | number | null
    RecKey?: StringNullableFilter | string | null
    Height?: FloatNullableFilter | number | null
    Species?: StringNullableFilter | string | null
    Chkbox?: StringNullableFilter | string | null
    type?: StringNullableFilter | string | null
    GrowthHabit_measured?: StringNullableFilter | string | null
    LineKey?: StringNullableFilter | string | null
    DateModified?: DateTimeNullableFilter | Date | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    source?: StringNullableFilter | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: IntNullableFilter | number | null
    SpacingIntervalAmount?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    SpacingType?: StringNullableFilter | string | null
    HeightOption?: StringNullableFilter | string | null
    HeightUOM?: StringNullableFilter | string | null
    ShowCheckbox?: StringNullableFilter | string | null
    CheckboxLabel?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type dataHeightOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    RecKey?: SortOrder
    Height?: SortOrder
    Species?: SortOrder
    Chkbox?: SortOrder
    type?: SortOrder
    GrowthHabit_measured?: SortOrder
    LineKey?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    source?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    HeightOption?: SortOrder
    HeightUOM?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type dataHeightWhereUniqueInput = {
    rid?: number
  }

  export type dataHeightOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    RecKey?: SortOrder
    Height?: SortOrder
    Species?: SortOrder
    Chkbox?: SortOrder
    type?: SortOrder
    GrowthHabit_measured?: SortOrder
    LineKey?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    source?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    HeightOption?: SortOrder
    HeightUOM?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    _count?: dataHeightCountOrderByAggregateInput
    _avg?: dataHeightAvgOrderByAggregateInput
    _max?: dataHeightMaxOrderByAggregateInput
    _min?: dataHeightMinOrderByAggregateInput
    _sum?: dataHeightSumOrderByAggregateInput
  }

  export type dataHeightScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataHeightScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataHeightScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataHeightScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    PointLoc?: FloatNullableWithAggregatesFilter | number | null
    PointNbr?: IntNullableWithAggregatesFilter | number | null
    RecKey?: StringNullableWithAggregatesFilter | string | null
    Height?: FloatNullableWithAggregatesFilter | number | null
    Species?: StringNullableWithAggregatesFilter | string | null
    Chkbox?: StringNullableWithAggregatesFilter | string | null
    type?: StringNullableWithAggregatesFilter | string | null
    GrowthHabit_measured?: StringNullableWithAggregatesFilter | string | null
    LineKey?: StringNullableWithAggregatesFilter | string | null
    DateModified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    FormType?: StringNullableWithAggregatesFilter | string | null
    FormDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    source?: StringNullableWithAggregatesFilter | string | null
    Direction?: StringNullableWithAggregatesFilter | string | null
    Measure?: IntNullableWithAggregatesFilter | number | null
    LineLengthAmount?: IntNullableWithAggregatesFilter | number | null
    SpacingIntervalAmount?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    SpacingType?: StringNullableWithAggregatesFilter | string | null
    HeightOption?: StringNullableWithAggregatesFilter | string | null
    HeightUOM?: StringNullableWithAggregatesFilter | string | null
    ShowCheckbox?: StringNullableWithAggregatesFilter | string | null
    CheckboxLabel?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dataLPIWhereInput = {
    AND?: Enumerable<dataLPIWhereInput>
    OR?: Enumerable<dataLPIWhereInput>
    NOT?: Enumerable<dataLPIWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    layer?: StringNullableFilter | string | null
    code?: StringNullableFilter | string | null
    chckbox?: StringNullableFilter | string | null
    ShrubShape?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: IntNullableFilter | number | null
    SpacingIntervalAmount?: FloatNullableFilter | number | null
    SpacingType?: StringNullableFilter | string | null
    ShowCheckbox?: StringNullableFilter | string | null
    CheckboxLabel?: StringNullableFilter | string | null
    PointLoc?: FloatNullableFilter | number | null
    PointNbr?: IntNullableFilter | number | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type dataLPIOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    layer?: SortOrder
    code?: SortOrder
    chckbox?: SortOrder
    ShrubShape?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type dataLPIWhereUniqueInput = {
    rid?: number
  }

  export type dataLPIOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    layer?: SortOrder
    code?: SortOrder
    chckbox?: SortOrder
    ShrubShape?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    _count?: dataLPICountOrderByAggregateInput
    _avg?: dataLPIAvgOrderByAggregateInput
    _max?: dataLPIMaxOrderByAggregateInput
    _min?: dataLPIMinOrderByAggregateInput
    _sum?: dataLPISumOrderByAggregateInput
  }

  export type dataLPIScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataLPIScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataLPIScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataLPIScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    LineKey?: StringNullableWithAggregatesFilter | string | null
    RecKey?: StringNullableWithAggregatesFilter | string | null
    layer?: StringNullableWithAggregatesFilter | string | null
    code?: StringNullableWithAggregatesFilter | string | null
    chckbox?: StringNullableWithAggregatesFilter | string | null
    ShrubShape?: StringNullableWithAggregatesFilter | string | null
    FormType?: StringNullableWithAggregatesFilter | string | null
    FormDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    Direction?: StringNullableWithAggregatesFilter | string | null
    Measure?: IntNullableWithAggregatesFilter | number | null
    LineLengthAmount?: IntNullableWithAggregatesFilter | number | null
    SpacingIntervalAmount?: FloatNullableWithAggregatesFilter | number | null
    SpacingType?: StringNullableWithAggregatesFilter | string | null
    ShowCheckbox?: StringNullableWithAggregatesFilter | string | null
    CheckboxLabel?: StringNullableWithAggregatesFilter | string | null
    PointLoc?: FloatNullableWithAggregatesFilter | number | null
    PointNbr?: IntNullableWithAggregatesFilter | number | null
    source?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dataSoilStabilityWhereInput = {
    AND?: Enumerable<dataSoilStabilityWhereInput>
    OR?: Enumerable<dataSoilStabilityWhereInput>
    NOT?: Enumerable<dataSoilStabilityWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    LineKey?: StringNullableFilter | string | null
    SoilStabSubSurface?: IntNullableFilter | number | null
    Line?: StringNullableFilter | string | null
    Position?: IntNullableFilter | number | null
    Pos?: StringNullableFilter | string | null
    Veg?: StringNullableFilter | string | null
    Rating?: IntNullableFilter | number | null
    Hydro?: StringNullableFilter | string | null
    Notes?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type dataSoilStabilityOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    LineKey?: SortOrder
    SoilStabSubSurface?: SortOrder
    Line?: SortOrder
    Position?: SortOrder
    Pos?: SortOrder
    Veg?: SortOrder
    Rating?: SortOrder
    Hydro?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type dataSoilStabilityWhereUniqueInput = {
    rid?: number
  }

  export type dataSoilStabilityOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    LineKey?: SortOrder
    SoilStabSubSurface?: SortOrder
    Line?: SortOrder
    Position?: SortOrder
    Pos?: SortOrder
    Veg?: SortOrder
    Rating?: SortOrder
    Hydro?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    _count?: dataSoilStabilityCountOrderByAggregateInput
    _avg?: dataSoilStabilityAvgOrderByAggregateInput
    _max?: dataSoilStabilityMaxOrderByAggregateInput
    _min?: dataSoilStabilityMinOrderByAggregateInput
    _sum?: dataSoilStabilitySumOrderByAggregateInput
  }

  export type dataSoilStabilityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataSoilStabilityScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataSoilStabilityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataSoilStabilityScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    RecKey?: StringNullableWithAggregatesFilter | string | null
    FormType?: StringNullableWithAggregatesFilter | string | null
    FormDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    LineKey?: StringNullableWithAggregatesFilter | string | null
    SoilStabSubSurface?: IntNullableWithAggregatesFilter | number | null
    Line?: StringNullableWithAggregatesFilter | string | null
    Position?: IntNullableWithAggregatesFilter | number | null
    Pos?: StringNullableWithAggregatesFilter | string | null
    Veg?: StringNullableWithAggregatesFilter | string | null
    Rating?: IntNullableWithAggregatesFilter | number | null
    Hydro?: StringNullableWithAggregatesFilter | string | null
    Notes?: StringNullableWithAggregatesFilter | string | null
    source?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dataSpeciesInventoryWhereInput = {
    AND?: Enumerable<dataSpeciesInventoryWhereInput>
    OR?: Enumerable<dataSpeciesInventoryWhereInput>
    NOT?: Enumerable<dataSpeciesInventoryWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    Species?: StringNullableFilter | string | null
    DENSITY?: IntNullableFilter | number | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    SpecRichMethod?: IntNullableFilter | number | null
    SpecRichMeasure?: IntNullableFilter | number | null
    SpecRichNbrSubPlots?: IntNullableFilter | number | null
    SpecRich1Container?: StringNullableFilter | string | null
    SpecRich1Shape?: IntNullableFilter | number | null
    SpecRich1Dim1?: FloatNullableFilter | number | null
    SpecRich1Dim2?: FloatNullableFilter | number | null
    SpecRich1Area?: FloatNullableFilter | number | null
    SpecRich2Container?: StringNullableFilter | string | null
    SpecRich2Shape?: IntNullableFilter | number | null
    SpecRich2Dim1?: FloatNullableFilter | number | null
    SpecRich2Dim2?: FloatNullableFilter | number | null
    SpecRich2Area?: FloatNullableFilter | number | null
    SpecRich3Container?: StringNullableFilter | string | null
    SpecRich3Shape?: IntNullableFilter | number | null
    SpecRich3Dim1?: FloatNullableFilter | number | null
    SpecRich3Dim2?: FloatNullableFilter | number | null
    SpecRich3Area?: FloatNullableFilter | number | null
    SpecRich4Container?: StringNullableFilter | string | null
    SpecRich4Shape?: IntNullableFilter | number | null
    SpecRich4Dim1?: FloatNullableFilter | number | null
    SpecRich4Dim2?: FloatNullableFilter | number | null
    SpecRich4Area?: FloatNullableFilter | number | null
    SpecRich5Container?: StringNullableFilter | string | null
    SpecRich5Shape?: IntNullableFilter | number | null
    SpecRich5Dim1?: FloatNullableFilter | number | null
    SpecRich5Dim2?: FloatNullableFilter | number | null
    SpecRich5Area?: FloatNullableFilter | number | null
    SpecRich6Container?: StringNullableFilter | string | null
    SpecRich6Shape?: IntNullableFilter | number | null
    SpecRich6Dim1?: FloatNullableFilter | number | null
    SpecRich6Dim2?: FloatNullableFilter | number | null
    SpecRich6Area?: FloatNullableFilter | number | null
    Notes?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type dataSpeciesInventoryOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    DENSITY?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Container?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Container?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Container?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Container?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Container?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Container?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type dataSpeciesInventoryWhereUniqueInput = {
    rid?: number
  }

  export type dataSpeciesInventoryOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    DENSITY?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Container?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Container?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Container?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Container?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Container?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Container?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    _count?: dataSpeciesInventoryCountOrderByAggregateInput
    _avg?: dataSpeciesInventoryAvgOrderByAggregateInput
    _max?: dataSpeciesInventoryMaxOrderByAggregateInput
    _min?: dataSpeciesInventoryMinOrderByAggregateInput
    _sum?: dataSpeciesInventorySumOrderByAggregateInput
  }

  export type dataSpeciesInventoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataSpeciesInventoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataSpeciesInventoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataSpeciesInventoryScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    Species?: StringNullableWithAggregatesFilter | string | null
    DENSITY?: IntNullableWithAggregatesFilter | number | null
    LineKey?: StringNullableWithAggregatesFilter | string | null
    RecKey?: StringNullableWithAggregatesFilter | string | null
    FormType?: StringNullableWithAggregatesFilter | string | null
    FormDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    SpecRichMethod?: IntNullableWithAggregatesFilter | number | null
    SpecRichMeasure?: IntNullableWithAggregatesFilter | number | null
    SpecRichNbrSubPlots?: IntNullableWithAggregatesFilter | number | null
    SpecRich1Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich1Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich1Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich1Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich1Area?: FloatNullableWithAggregatesFilter | number | null
    SpecRich2Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich2Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich2Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich2Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich2Area?: FloatNullableWithAggregatesFilter | number | null
    SpecRich3Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich3Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich3Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich3Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich3Area?: FloatNullableWithAggregatesFilter | number | null
    SpecRich4Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich4Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich4Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich4Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich4Area?: FloatNullableWithAggregatesFilter | number | null
    SpecRich5Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich5Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich5Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich5Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich5Area?: FloatNullableWithAggregatesFilter | number | null
    SpecRich6Container?: StringNullableWithAggregatesFilter | string | null
    SpecRich6Shape?: IntNullableWithAggregatesFilter | number | null
    SpecRich6Dim1?: FloatNullableWithAggregatesFilter | number | null
    SpecRich6Dim2?: FloatNullableWithAggregatesFilter | number | null
    SpecRich6Area?: FloatNullableWithAggregatesFilter | number | null
    Notes?: StringNullableWithAggregatesFilter | string | null
    source?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type geoIndicatorsWhereInput = {
    AND?: Enumerable<geoIndicatorsWhereInput>
    OR?: Enumerable<geoIndicatorsWhereInput>
    NOT?: Enumerable<geoIndicatorsWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    EcologicalSiteId?: StringNullableFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableFilter | number | null
    Latitude_NAD83?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: StringNullableFilter | string | null
    LocationType?: StringNullableFilter | string | null
    Latitude_NAD83_Actual?: FloatNullableFilter | number | null
    Longitude_NAD83_Actual?: FloatNullableFilter | number | null
    BareSoilCover?: FloatNullableFilter | number | null
    TotalFoliarCover?: FloatNullableFilter | number | null
    AH_AnnGrassCover?: FloatNullableFilter | number | null
    AH_ForbCover?: FloatNullableFilter | number | null
    AH_GrassCover?: FloatNullableFilter | number | null
    AH_PerenForbCover?: FloatNullableFilter | number | null
    AH_PerenForbGrassCover?: FloatNullableFilter | number | null
    AH_PerenGrassCover?: FloatNullableFilter | number | null
    AH_ShrubCover?: FloatNullableFilter | number | null
    FH_CyanobacteriaCover?: FloatNullableFilter | number | null
    FH_DepSoilCover?: FloatNullableFilter | number | null
    FH_DuffCover?: FloatNullableFilter | number | null
    FH_EmbLitterCover?: FloatNullableFilter | number | null
    FH_HerbLitterCover?: FloatNullableFilter | number | null
    FH_LichenCover?: FloatNullableFilter | number | null
    FH_MossCover?: FloatNullableFilter | number | null
    FH_RockCover?: FloatNullableFilter | number | null
    FH_TotalLitterCover?: FloatNullableFilter | number | null
    FH_VagrLichenCover?: FloatNullableFilter | number | null
    FH_WaterCover?: FloatNullableFilter | number | null
    FH_WoodyLitterCover?: FloatNullableFilter | number | null
    GapCover_101_200?: FloatNullableFilter | number | null
    GapCover_200_plus?: FloatNullableFilter | number | null
    GapCover_25_50?: FloatNullableFilter | number | null
    GapCover_25_plus?: FloatNullableFilter | number | null
    GapCover_51_100?: FloatNullableFilter | number | null
    Hgt_Forb_Avg?: FloatNullableFilter | number | null
    Hgt_Grass_Avg?: FloatNullableFilter | number | null
    Hgt_Herbaceous_Avg?: FloatNullableFilter | number | null
    Hgt_PerenForb_Avg?: FloatNullableFilter | number | null
    Hgt_PerenForbGrass_Avg?: FloatNullableFilter | number | null
    Hgt_PerenGrass_Avg?: FloatNullableFilter | number | null
    Hgt_Woody_Avg?: FloatNullableFilter | number | null
    RH_AnnualProd?: StringNullableFilter | string | null
    RH_BareGround?: StringNullableFilter | string | null
    RH_BioticIntegrity?: StringNullableFilter | string | null
    RH_CommentsBI?: StringNullableFilter | string | null
    RH_CommentsHF?: StringNullableFilter | string | null
    RH_CommentsSS?: StringNullableFilter | string | null
    RH_Compaction?: StringNullableFilter | string | null
    RH_DeadDyingPlantParts?: StringNullableFilter | string | null
    RH_FuncSructGroup?: StringNullableFilter | string | null
    RH_Gullies?: StringNullableFilter | string | null
    RH_HydrologicFunction?: StringNullableFilter | string | null
    RH_InvasivePlants?: StringNullableFilter | string | null
    RH_LitterAmount?: StringNullableFilter | string | null
    RH_LitterMovement?: StringNullableFilter | string | null
    RH_PedestalsTerracettes?: StringNullableFilter | string | null
    RH_PlantCommunityComp?: StringNullableFilter | string | null
    RH_ReprodCapabilityPeren?: StringNullableFilter | string | null
    RH_Rills?: StringNullableFilter | string | null
    RH_SoilSiteStability?: StringNullableFilter | string | null
    RH_SoilSurfLossDeg?: StringNullableFilter | string | null
    RH_SoilSurfResisErosion?: StringNullableFilter | string | null
    RH_WaterFlowPatterns?: StringNullableFilter | string | null
    RH_WindScouredAreas?: StringNullableFilter | string | null
    SoilStability_All?: FloatNullableFilter | number | null
    SoilStability_Protected?: FloatNullableFilter | number | null
    SoilStability_Unprotected?: FloatNullableFilter | number | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    mlra_name?: StringNullableFilter | string | null
    mlrarsym?: StringNullableFilter | string | null
    na_l1name?: StringNullableFilter | string | null
    na_l2name?: StringNullableFilter | string | null
    us_l3name?: StringNullableFilter | string | null
    us_l4name?: StringNullableFilter | string | null
    State?: StringNullableFilter | string | null
    modis_landcover?: StringNullableFilter | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type geoIndicatorsOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type geoIndicatorsWhereUniqueInput = {
    rid?: number
    PrimaryKey?: string
  }

  export type geoIndicatorsOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    _count?: geoIndicatorsCountOrderByAggregateInput
    _avg?: geoIndicatorsAvgOrderByAggregateInput
    _max?: geoIndicatorsMaxOrderByAggregateInput
    _min?: geoIndicatorsMinOrderByAggregateInput
    _sum?: geoIndicatorsSumOrderByAggregateInput
  }

  export type geoIndicatorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<geoIndicatorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<geoIndicatorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<geoIndicatorsScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
    EcologicalSiteId?: StringNullableWithAggregatesFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableWithAggregatesFilter | number | null
    Latitude_NAD83?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: StringNullableWithAggregatesFilter | string | null
    LocationType?: StringNullableWithAggregatesFilter | string | null
    Latitude_NAD83_Actual?: FloatNullableWithAggregatesFilter | number | null
    Longitude_NAD83_Actual?: FloatNullableWithAggregatesFilter | number | null
    BareSoilCover?: FloatNullableWithAggregatesFilter | number | null
    TotalFoliarCover?: FloatNullableWithAggregatesFilter | number | null
    AH_AnnGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_ForbCover?: FloatNullableWithAggregatesFilter | number | null
    AH_GrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenForbCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenForbGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_ShrubCover?: FloatNullableWithAggregatesFilter | number | null
    FH_CyanobacteriaCover?: FloatNullableWithAggregatesFilter | number | null
    FH_DepSoilCover?: FloatNullableWithAggregatesFilter | number | null
    FH_DuffCover?: FloatNullableWithAggregatesFilter | number | null
    FH_EmbLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_HerbLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_LichenCover?: FloatNullableWithAggregatesFilter | number | null
    FH_MossCover?: FloatNullableWithAggregatesFilter | number | null
    FH_RockCover?: FloatNullableWithAggregatesFilter | number | null
    FH_TotalLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_VagrLichenCover?: FloatNullableWithAggregatesFilter | number | null
    FH_WaterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_WoodyLitterCover?: FloatNullableWithAggregatesFilter | number | null
    GapCover_101_200?: FloatNullableWithAggregatesFilter | number | null
    GapCover_200_plus?: FloatNullableWithAggregatesFilter | number | null
    GapCover_25_50?: FloatNullableWithAggregatesFilter | number | null
    GapCover_25_plus?: FloatNullableWithAggregatesFilter | number | null
    GapCover_51_100?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Forb_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Grass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Herbaceous_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenForb_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenForbGrass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenGrass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Woody_Avg?: FloatNullableWithAggregatesFilter | number | null
    RH_AnnualProd?: StringNullableWithAggregatesFilter | string | null
    RH_BareGround?: StringNullableWithAggregatesFilter | string | null
    RH_BioticIntegrity?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsBI?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsHF?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsSS?: StringNullableWithAggregatesFilter | string | null
    RH_Compaction?: StringNullableWithAggregatesFilter | string | null
    RH_DeadDyingPlantParts?: StringNullableWithAggregatesFilter | string | null
    RH_FuncSructGroup?: StringNullableWithAggregatesFilter | string | null
    RH_Gullies?: StringNullableWithAggregatesFilter | string | null
    RH_HydrologicFunction?: StringNullableWithAggregatesFilter | string | null
    RH_InvasivePlants?: StringNullableWithAggregatesFilter | string | null
    RH_LitterAmount?: StringNullableWithAggregatesFilter | string | null
    RH_LitterMovement?: StringNullableWithAggregatesFilter | string | null
    RH_PedestalsTerracettes?: StringNullableWithAggregatesFilter | string | null
    RH_PlantCommunityComp?: StringNullableWithAggregatesFilter | string | null
    RH_ReprodCapabilityPeren?: StringNullableWithAggregatesFilter | string | null
    RH_Rills?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSiteStability?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSurfLossDeg?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSurfResisErosion?: StringNullableWithAggregatesFilter | string | null
    RH_WaterFlowPatterns?: StringNullableWithAggregatesFilter | string | null
    RH_WindScouredAreas?: StringNullableWithAggregatesFilter | string | null
    SoilStability_All?: FloatNullableWithAggregatesFilter | number | null
    SoilStability_Protected?: FloatNullableWithAggregatesFilter | number | null
    SoilStability_Unprotected?: FloatNullableWithAggregatesFilter | number | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    mlra_name?: StringNullableWithAggregatesFilter | string | null
    mlrarsym?: StringNullableWithAggregatesFilter | string | null
    na_l1name?: StringNullableWithAggregatesFilter | string | null
    na_l2name?: StringNullableWithAggregatesFilter | string | null
    us_l3name?: StringNullableWithAggregatesFilter | string | null
    us_l4name?: StringNullableWithAggregatesFilter | string | null
    State?: StringNullableWithAggregatesFilter | string | null
    modis_landcover?: StringNullableWithAggregatesFilter | string | null
  }

  export type geoSpeciesWhereInput = {
    AND?: Enumerable<geoSpeciesWhereInput>
    OR?: Enumerable<geoSpeciesWhereInput>
    NOT?: Enumerable<geoSpeciesWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    Species?: StringNullableFilter | string | null
    AH_SpeciesCover?: FloatNullableFilter | number | null
    AH_SpeciesCover_n?: IntNullableFilter | number | null
    Hgt_Species_Avg?: FloatNullableFilter | number | null
    Hgt_Species_Avg_n?: IntNullableFilter | number | null
    Duration?: StringNullableFilter | string | null
    GrowthHabit?: StringNullableFilter | string | null
    GrowthHabitSub?: StringNullableFilter | string | null
    SpeciesKey?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    dataHeader?: XOR<DataHeaderRelationFilter, dataHeaderWhereInput> | null
  }

  export type geoSpeciesOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
    Duration?: SortOrder
    GrowthHabit?: SortOrder
    GrowthHabitSub?: SortOrder
    SpeciesKey?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    dataHeader?: dataHeaderOrderByWithRelationInput
  }

  export type geoSpeciesWhereUniqueInput = {
    rid?: number
  }

  export type geoSpeciesOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
    Duration?: SortOrder
    GrowthHabit?: SortOrder
    GrowthHabitSub?: SortOrder
    SpeciesKey?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
    _count?: geoSpeciesCountOrderByAggregateInput
    _avg?: geoSpeciesAvgOrderByAggregateInput
    _max?: geoSpeciesMaxOrderByAggregateInput
    _min?: geoSpeciesMinOrderByAggregateInput
    _sum?: geoSpeciesSumOrderByAggregateInput
  }

  export type geoSpeciesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<geoSpeciesScalarWhereWithAggregatesInput>
    OR?: Enumerable<geoSpeciesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<geoSpeciesScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    Species?: StringNullableWithAggregatesFilter | string | null
    AH_SpeciesCover?: FloatNullableWithAggregatesFilter | number | null
    AH_SpeciesCover_n?: IntNullableWithAggregatesFilter | number | null
    Hgt_Species_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Species_Avg_n?: IntNullableWithAggregatesFilter | number | null
    Duration?: StringNullableWithAggregatesFilter | string | null
    GrowthHabit?: StringNullableWithAggregatesFilter | string | null
    GrowthHabitSub?: StringNullableWithAggregatesFilter | string | null
    SpeciesKey?: StringNullableWithAggregatesFilter | string | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type tblProjectWhereInput = {
    AND?: Enumerable<tblProjectWhereInput>
    OR?: Enumerable<tblProjectWhereInput>
    NOT?: Enumerable<tblProjectWhereInput>
    project_key?: StringFilter | string
    project_name?: StringNullableFilter | string | null
    project_description?: StringNullableFilter | string | null
    project_website?: StringNullableFilter | string | null
    data_use_agreement?: StringNullableFilter | string | null
    curator_PersonName?: StringNullableFilter | string | null
    curator_organization?: StringNullableFilter | string | null
    curator_email?: StringNullableFilter | string | null
    author_PersonName?: StringNullableFilter | string | null
    author_email?: StringNullableFilter | string | null
    author_orcid_id?: StringNullableFilter | string | null
    addit_contact_person?: StringNullableFilter | string | null
    addit_contact_email?: StringNullableFilter | string | null
    bibliographical_reference?: StringNullableFilter | string | null
    data_doi?: StringNullableFilter | string | null
  }

  export type tblProjectOrderByWithRelationInput = {
    project_key?: SortOrder
    project_name?: SortOrder
    project_description?: SortOrder
    project_website?: SortOrder
    data_use_agreement?: SortOrder
    curator_PersonName?: SortOrder
    curator_organization?: SortOrder
    curator_email?: SortOrder
    author_PersonName?: SortOrder
    author_email?: SortOrder
    author_orcid_id?: SortOrder
    addit_contact_person?: SortOrder
    addit_contact_email?: SortOrder
    bibliographical_reference?: SortOrder
    data_doi?: SortOrder
  }

  export type tblProjectWhereUniqueInput = {
    project_key?: string
  }

  export type tblProjectOrderByWithAggregationInput = {
    project_key?: SortOrder
    project_name?: SortOrder
    project_description?: SortOrder
    project_website?: SortOrder
    data_use_agreement?: SortOrder
    curator_PersonName?: SortOrder
    curator_organization?: SortOrder
    curator_email?: SortOrder
    author_PersonName?: SortOrder
    author_email?: SortOrder
    author_orcid_id?: SortOrder
    addit_contact_person?: SortOrder
    addit_contact_email?: SortOrder
    bibliographical_reference?: SortOrder
    data_doi?: SortOrder
    _count?: tblProjectCountOrderByAggregateInput
    _max?: tblProjectMaxOrderByAggregateInput
    _min?: tblProjectMinOrderByAggregateInput
  }

  export type tblProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tblProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<tblProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tblProjectScalarWhereWithAggregatesInput>
    project_key?: StringWithAggregatesFilter | string
    project_name?: StringNullableWithAggregatesFilter | string | null
    project_description?: StringNullableWithAggregatesFilter | string | null
    project_website?: StringNullableWithAggregatesFilter | string | null
    data_use_agreement?: StringNullableWithAggregatesFilter | string | null
    curator_PersonName?: StringNullableWithAggregatesFilter | string | null
    curator_organization?: StringNullableWithAggregatesFilter | string | null
    curator_email?: StringNullableWithAggregatesFilter | string | null
    author_PersonName?: StringNullableWithAggregatesFilter | string | null
    author_email?: StringNullableWithAggregatesFilter | string | null
    author_orcid_id?: StringNullableWithAggregatesFilter | string | null
    addit_contact_person?: StringNullableWithAggregatesFilter | string | null
    addit_contact_email?: StringNullableWithAggregatesFilter | string | null
    bibliographical_reference?: StringNullableWithAggregatesFilter | string | null
    data_doi?: StringNullableWithAggregatesFilter | string | null
  }

  export type tblSchemaWhereInput = {
    AND?: Enumerable<tblSchemaWhereInput>
    OR?: Enumerable<tblSchemaWhereInput>
    NOT?: Enumerable<tblSchemaWhereInput>
    rid?: IntFilter | number
    Order?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Table?: StringNullableFilter | string | null
    Field?: StringNullableFilter | string | null
    Alias?: StringNullableFilter | string | null
    Description?: StringNullableFilter | string | null
    DataType?: StringNullableFilter | string | null
    Length?: StringNullableFilter | string | null
    DatatypeNotes?: StringNullableFilter | string | null
    Min?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Max?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Unit?: StringNullableFilter | string | null
    SigFig?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Version?: StringNullableFilter | string | null
    Uploaded?: DateTimeNullableFilter | Date | string | null
  }

  export type tblSchemaOrderByWithRelationInput = {
    rid?: SortOrder
    Order?: SortOrder
    Table?: SortOrder
    Field?: SortOrder
    Alias?: SortOrder
    Description?: SortOrder
    DataType?: SortOrder
    Length?: SortOrder
    DatatypeNotes?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    Unit?: SortOrder
    SigFig?: SortOrder
    Version?: SortOrder
    Uploaded?: SortOrder
  }

  export type tblSchemaWhereUniqueInput = {
    rid?: number
  }

  export type tblSchemaOrderByWithAggregationInput = {
    rid?: SortOrder
    Order?: SortOrder
    Table?: SortOrder
    Field?: SortOrder
    Alias?: SortOrder
    Description?: SortOrder
    DataType?: SortOrder
    Length?: SortOrder
    DatatypeNotes?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    Unit?: SortOrder
    SigFig?: SortOrder
    Version?: SortOrder
    Uploaded?: SortOrder
    _count?: tblSchemaCountOrderByAggregateInput
    _avg?: tblSchemaAvgOrderByAggregateInput
    _max?: tblSchemaMaxOrderByAggregateInput
    _min?: tblSchemaMinOrderByAggregateInput
    _sum?: tblSchemaSumOrderByAggregateInput
  }

  export type tblSchemaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tblSchemaScalarWhereWithAggregatesInput>
    OR?: Enumerable<tblSchemaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tblSchemaScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    Order?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Table?: StringNullableWithAggregatesFilter | string | null
    Field?: StringNullableWithAggregatesFilter | string | null
    Alias?: StringNullableWithAggregatesFilter | string | null
    Description?: StringNullableWithAggregatesFilter | string | null
    DataType?: StringNullableWithAggregatesFilter | string | null
    Length?: StringNullableWithAggregatesFilter | string | null
    DatatypeNotes?: StringNullableWithAggregatesFilter | string | null
    Min?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Max?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Unit?: StringNullableWithAggregatesFilter | string | null
    SigFig?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Version?: StringNullableWithAggregatesFilter | string | null
    Uploaded?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type geoIndicators_viewWhereInput = {
    AND?: Enumerable<geoIndicators_viewWhereInput>
    OR?: Enumerable<geoIndicators_viewWhereInput>
    NOT?: Enumerable<geoIndicators_viewWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
    EcologicalSiteId?: StringNullableFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableFilter | number | null
    Latitude_NAD83?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: StringNullableFilter | string | null
    LocationType?: StringNullableFilter | string | null
    Latitude_NAD83_Actual?: FloatNullableFilter | number | null
    Longitude_NAD83_Actual?: FloatNullableFilter | number | null
    BareSoilCover?: FloatNullableFilter | number | null
    TotalFoliarCover?: FloatNullableFilter | number | null
    AH_AnnGrassCover?: FloatNullableFilter | number | null
    AH_ForbCover?: FloatNullableFilter | number | null
    AH_GrassCover?: FloatNullableFilter | number | null
    AH_PerenForbCover?: FloatNullableFilter | number | null
    AH_PerenForbGrassCover?: FloatNullableFilter | number | null
    AH_PerenGrassCover?: FloatNullableFilter | number | null
    AH_ShrubCover?: FloatNullableFilter | number | null
    FH_CyanobacteriaCover?: FloatNullableFilter | number | null
    FH_DepSoilCover?: FloatNullableFilter | number | null
    FH_DuffCover?: FloatNullableFilter | number | null
    FH_EmbLitterCover?: FloatNullableFilter | number | null
    FH_HerbLitterCover?: FloatNullableFilter | number | null
    FH_LichenCover?: FloatNullableFilter | number | null
    FH_MossCover?: FloatNullableFilter | number | null
    FH_RockCover?: FloatNullableFilter | number | null
    FH_TotalLitterCover?: FloatNullableFilter | number | null
    FH_VagrLichenCover?: FloatNullableFilter | number | null
    FH_WaterCover?: FloatNullableFilter | number | null
    FH_WoodyLitterCover?: FloatNullableFilter | number | null
    GapCover_101_200?: FloatNullableFilter | number | null
    GapCover_200_plus?: FloatNullableFilter | number | null
    GapCover_25_50?: FloatNullableFilter | number | null
    GapCover_25_plus?: FloatNullableFilter | number | null
    GapCover_51_100?: FloatNullableFilter | number | null
    Hgt_Forb_Avg?: FloatNullableFilter | number | null
    Hgt_Grass_Avg?: FloatNullableFilter | number | null
    Hgt_Herbaceous_Avg?: FloatNullableFilter | number | null
    Hgt_PerenForb_Avg?: FloatNullableFilter | number | null
    Hgt_PerenForbGrass_Avg?: FloatNullableFilter | number | null
    Hgt_PerenGrass_Avg?: FloatNullableFilter | number | null
    Hgt_Woody_Avg?: FloatNullableFilter | number | null
    RH_AnnualProd?: StringNullableFilter | string | null
    RH_BareGround?: StringNullableFilter | string | null
    RH_BioticIntegrity?: StringNullableFilter | string | null
    RH_CommentsBI?: StringNullableFilter | string | null
    RH_CommentsHF?: StringNullableFilter | string | null
    RH_CommentsSS?: StringNullableFilter | string | null
    RH_Compaction?: StringNullableFilter | string | null
    RH_DeadDyingPlantParts?: StringNullableFilter | string | null
    RH_FuncSructGroup?: StringNullableFilter | string | null
    RH_Gullies?: StringNullableFilter | string | null
    RH_HydrologicFunction?: StringNullableFilter | string | null
    RH_InvasivePlants?: StringNullableFilter | string | null
    RH_LitterAmount?: StringNullableFilter | string | null
    RH_LitterMovement?: StringNullableFilter | string | null
    RH_PedestalsTerracettes?: StringNullableFilter | string | null
    RH_PlantCommunityComp?: StringNullableFilter | string | null
    RH_ReprodCapabilityPeren?: StringNullableFilter | string | null
    RH_Rills?: StringNullableFilter | string | null
    RH_SoilSiteStability?: StringNullableFilter | string | null
    RH_SoilSurfLossDeg?: StringNullableFilter | string | null
    RH_SoilSurfResisErosion?: StringNullableFilter | string | null
    RH_WaterFlowPatterns?: StringNullableFilter | string | null
    RH_WindScouredAreas?: StringNullableFilter | string | null
    SoilStability_All?: FloatNullableFilter | number | null
    SoilStability_Protected?: FloatNullableFilter | number | null
    SoilStability_Unprotected?: FloatNullableFilter | number | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    mlra_name?: StringNullableFilter | string | null
    mlrarsym?: StringNullableFilter | string | null
    na_l1name?: StringNullableFilter | string | null
    na_l2name?: StringNullableFilter | string | null
    us_l3name?: StringNullableFilter | string | null
    us_l4name?: StringNullableFilter | string | null
    State?: StringNullableFilter | string | null
    modis_landcover?: StringNullableFilter | string | null
    horizontal_flux_total_MD?: FloatNullableFilter | number | null
    vertical_flux_MD?: FloatNullableFilter | number | null
    PM2_5_MD?: FloatNullableFilter | number | null
    PM10_MD?: FloatNullableFilter | number | null
  }

  export type geoIndicators_viewOrderByWithRelationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type geoIndicators_viewWhereUniqueInput = {
    rid?: number
  }

  export type geoIndicators_viewOrderByWithAggregationInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
    _count?: geoIndicators_viewCountOrderByAggregateInput
    _avg?: geoIndicators_viewAvgOrderByAggregateInput
    _max?: geoIndicators_viewMaxOrderByAggregateInput
    _min?: geoIndicators_viewMinOrderByAggregateInput
    _sum?: geoIndicators_viewSumOrderByAggregateInput
  }

  export type geoIndicators_viewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<geoIndicators_viewScalarWhereWithAggregatesInput>
    OR?: Enumerable<geoIndicators_viewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<geoIndicators_viewScalarWhereWithAggregatesInput>
    rid?: IntWithAggregatesFilter | number
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    DBKey?: StringNullableWithAggregatesFilter | string | null
    ProjectKey?: StringNullableWithAggregatesFilter | string | null
    DateVisited?: DateTimeNullableWithAggregatesFilter | Date | string | null
    EcologicalSiteId?: StringNullableWithAggregatesFilter | string | null
    PercentCoveredByEcoSite?: FloatNullableWithAggregatesFilter | number | null
    Latitude_NAD83?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: StringNullableWithAggregatesFilter | string | null
    LocationType?: StringNullableWithAggregatesFilter | string | null
    Latitude_NAD83_Actual?: FloatNullableWithAggregatesFilter | number | null
    Longitude_NAD83_Actual?: FloatNullableWithAggregatesFilter | number | null
    BareSoilCover?: FloatNullableWithAggregatesFilter | number | null
    TotalFoliarCover?: FloatNullableWithAggregatesFilter | number | null
    AH_AnnGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_ForbCover?: FloatNullableWithAggregatesFilter | number | null
    AH_GrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenForbCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenForbGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_PerenGrassCover?: FloatNullableWithAggregatesFilter | number | null
    AH_ShrubCover?: FloatNullableWithAggregatesFilter | number | null
    FH_CyanobacteriaCover?: FloatNullableWithAggregatesFilter | number | null
    FH_DepSoilCover?: FloatNullableWithAggregatesFilter | number | null
    FH_DuffCover?: FloatNullableWithAggregatesFilter | number | null
    FH_EmbLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_HerbLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_LichenCover?: FloatNullableWithAggregatesFilter | number | null
    FH_MossCover?: FloatNullableWithAggregatesFilter | number | null
    FH_RockCover?: FloatNullableWithAggregatesFilter | number | null
    FH_TotalLitterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_VagrLichenCover?: FloatNullableWithAggregatesFilter | number | null
    FH_WaterCover?: FloatNullableWithAggregatesFilter | number | null
    FH_WoodyLitterCover?: FloatNullableWithAggregatesFilter | number | null
    GapCover_101_200?: FloatNullableWithAggregatesFilter | number | null
    GapCover_200_plus?: FloatNullableWithAggregatesFilter | number | null
    GapCover_25_50?: FloatNullableWithAggregatesFilter | number | null
    GapCover_25_plus?: FloatNullableWithAggregatesFilter | number | null
    GapCover_51_100?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Forb_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Grass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Herbaceous_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenForb_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenForbGrass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_PerenGrass_Avg?: FloatNullableWithAggregatesFilter | number | null
    Hgt_Woody_Avg?: FloatNullableWithAggregatesFilter | number | null
    RH_AnnualProd?: StringNullableWithAggregatesFilter | string | null
    RH_BareGround?: StringNullableWithAggregatesFilter | string | null
    RH_BioticIntegrity?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsBI?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsHF?: StringNullableWithAggregatesFilter | string | null
    RH_CommentsSS?: StringNullableWithAggregatesFilter | string | null
    RH_Compaction?: StringNullableWithAggregatesFilter | string | null
    RH_DeadDyingPlantParts?: StringNullableWithAggregatesFilter | string | null
    RH_FuncSructGroup?: StringNullableWithAggregatesFilter | string | null
    RH_Gullies?: StringNullableWithAggregatesFilter | string | null
    RH_HydrologicFunction?: StringNullableWithAggregatesFilter | string | null
    RH_InvasivePlants?: StringNullableWithAggregatesFilter | string | null
    RH_LitterAmount?: StringNullableWithAggregatesFilter | string | null
    RH_LitterMovement?: StringNullableWithAggregatesFilter | string | null
    RH_PedestalsTerracettes?: StringNullableWithAggregatesFilter | string | null
    RH_PlantCommunityComp?: StringNullableWithAggregatesFilter | string | null
    RH_ReprodCapabilityPeren?: StringNullableWithAggregatesFilter | string | null
    RH_Rills?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSiteStability?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSurfLossDeg?: StringNullableWithAggregatesFilter | string | null
    RH_SoilSurfResisErosion?: StringNullableWithAggregatesFilter | string | null
    RH_WaterFlowPatterns?: StringNullableWithAggregatesFilter | string | null
    RH_WindScouredAreas?: StringNullableWithAggregatesFilter | string | null
    SoilStability_All?: FloatNullableWithAggregatesFilter | number | null
    SoilStability_Protected?: FloatNullableWithAggregatesFilter | number | null
    SoilStability_Unprotected?: FloatNullableWithAggregatesFilter | number | null
    DateLoadedInDb?: DateTimeNullableWithAggregatesFilter | Date | string | null
    mlra_name?: StringNullableWithAggregatesFilter | string | null
    mlrarsym?: StringNullableWithAggregatesFilter | string | null
    na_l1name?: StringNullableWithAggregatesFilter | string | null
    na_l2name?: StringNullableWithAggregatesFilter | string | null
    us_l3name?: StringNullableWithAggregatesFilter | string | null
    us_l4name?: StringNullableWithAggregatesFilter | string | null
    State?: StringNullableWithAggregatesFilter | string | null
    modis_landcover?: StringNullableWithAggregatesFilter | string | null
    horizontal_flux_total_MD?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_MD?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_MD?: FloatNullableWithAggregatesFilter | number | null
    PM10_MD?: FloatNullableWithAggregatesFilter | number | null
  }

  export type dataGapCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutDataGapInput
  }

  export type dataGapUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
  }

  export type dataGapUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutDataGapNestedInput
  }

  export type dataGapUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataGapCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
  }

  export type dataGapUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataGapUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeaderCreateInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUpdateInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateManyInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
  }

  export type dataHeaderUpdateManyMutationInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataHeaderUncheckedUpdateManyInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
  }

  export type dataHeightCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutDataHeightInput
  }

  export type dataHeightUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataHeightUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutDataHeightNestedInput
  }

  export type dataHeightUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeightCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataHeightUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeightUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPICreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutDataLPIInput
  }

  export type dataLPIUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataLPIUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutDataLPINestedInput
  }

  export type dataLPIUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPICreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataLPIUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPIUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutDataSoilStabilityInput
  }

  export type dataSoilStabilityUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSoilStabilityUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutDataSoilStabilityNestedInput
  }

  export type dataSoilStabilityUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSoilStabilityUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutDataSpeciesInventoryInput
  }

  export type dataSpeciesInventoryUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSpeciesInventoryUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutDataSpeciesInventoryNestedInput
  }

  export type dataSpeciesInventoryUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSpeciesInventoryUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoIndicatorsCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutGeoIndicatorsInput
  }

  export type geoIndicatorsUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
  }

  export type geoIndicatorsUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
    dataHeader?: dataHeaderUpdateOneWithoutGeoIndicatorsNestedInput
  }

  export type geoIndicatorsUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type geoIndicatorsCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
  }

  export type geoIndicatorsUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type geoIndicatorsUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type geoSpeciesCreateInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
    dataHeader?: dataHeaderCreateNestedOneWithoutGeoSpeciesInput
  }

  export type geoSpeciesUncheckedCreateInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type geoSpeciesUpdateInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataHeader?: dataHeaderUpdateOneWithoutGeoSpeciesNestedInput
  }

  export type geoSpeciesUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoSpeciesCreateManyInput = {
    rid?: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type geoSpeciesUpdateManyMutationInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoSpeciesUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblProjectCreateInput = {
    project_key: string
    project_name?: string | null
    project_description?: string | null
    project_website?: string | null
    data_use_agreement?: string | null
    curator_PersonName?: string | null
    curator_organization?: string | null
    curator_email?: string | null
    author_PersonName?: string | null
    author_email?: string | null
    author_orcid_id?: string | null
    addit_contact_person?: string | null
    addit_contact_email?: string | null
    bibliographical_reference?: string | null
    data_doi?: string | null
  }

  export type tblProjectUncheckedCreateInput = {
    project_key: string
    project_name?: string | null
    project_description?: string | null
    project_website?: string | null
    data_use_agreement?: string | null
    curator_PersonName?: string | null
    curator_organization?: string | null
    curator_email?: string | null
    author_PersonName?: string | null
    author_email?: string | null
    author_orcid_id?: string | null
    addit_contact_person?: string | null
    addit_contact_email?: string | null
    bibliographical_reference?: string | null
    data_doi?: string | null
  }

  export type tblProjectUpdateInput = {
    project_key?: StringFieldUpdateOperationsInput | string
    project_name?: NullableStringFieldUpdateOperationsInput | string | null
    project_description?: NullableStringFieldUpdateOperationsInput | string | null
    project_website?: NullableStringFieldUpdateOperationsInput | string | null
    data_use_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    curator_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    curator_organization?: NullableStringFieldUpdateOperationsInput | string | null
    curator_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_orcid_id?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    bibliographical_reference?: NullableStringFieldUpdateOperationsInput | string | null
    data_doi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblProjectUncheckedUpdateInput = {
    project_key?: StringFieldUpdateOperationsInput | string
    project_name?: NullableStringFieldUpdateOperationsInput | string | null
    project_description?: NullableStringFieldUpdateOperationsInput | string | null
    project_website?: NullableStringFieldUpdateOperationsInput | string | null
    data_use_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    curator_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    curator_organization?: NullableStringFieldUpdateOperationsInput | string | null
    curator_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_orcid_id?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    bibliographical_reference?: NullableStringFieldUpdateOperationsInput | string | null
    data_doi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblProjectCreateManyInput = {
    project_key: string
    project_name?: string | null
    project_description?: string | null
    project_website?: string | null
    data_use_agreement?: string | null
    curator_PersonName?: string | null
    curator_organization?: string | null
    curator_email?: string | null
    author_PersonName?: string | null
    author_email?: string | null
    author_orcid_id?: string | null
    addit_contact_person?: string | null
    addit_contact_email?: string | null
    bibliographical_reference?: string | null
    data_doi?: string | null
  }

  export type tblProjectUpdateManyMutationInput = {
    project_key?: StringFieldUpdateOperationsInput | string
    project_name?: NullableStringFieldUpdateOperationsInput | string | null
    project_description?: NullableStringFieldUpdateOperationsInput | string | null
    project_website?: NullableStringFieldUpdateOperationsInput | string | null
    data_use_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    curator_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    curator_organization?: NullableStringFieldUpdateOperationsInput | string | null
    curator_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_orcid_id?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    bibliographical_reference?: NullableStringFieldUpdateOperationsInput | string | null
    data_doi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblProjectUncheckedUpdateManyInput = {
    project_key?: StringFieldUpdateOperationsInput | string
    project_name?: NullableStringFieldUpdateOperationsInput | string | null
    project_description?: NullableStringFieldUpdateOperationsInput | string | null
    project_website?: NullableStringFieldUpdateOperationsInput | string | null
    data_use_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    curator_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    curator_organization?: NullableStringFieldUpdateOperationsInput | string | null
    curator_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_PersonName?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    author_orcid_id?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    addit_contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    bibliographical_reference?: NullableStringFieldUpdateOperationsInput | string | null
    data_doi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblSchemaCreateInput = {
    Order?: Decimal | DecimalJsLike | number | string | null
    Table?: string | null
    Field?: string | null
    Alias?: string | null
    Description?: string | null
    DataType?: string | null
    Length?: string | null
    DatatypeNotes?: string | null
    Min?: Decimal | DecimalJsLike | number | string | null
    Max?: Decimal | DecimalJsLike | number | string | null
    Unit?: string | null
    SigFig?: Decimal | DecimalJsLike | number | string | null
    Version?: string | null
    Uploaded?: Date | string | null
  }

  export type tblSchemaUncheckedCreateInput = {
    rid?: number
    Order?: Decimal | DecimalJsLike | number | string | null
    Table?: string | null
    Field?: string | null
    Alias?: string | null
    Description?: string | null
    DataType?: string | null
    Length?: string | null
    DatatypeNotes?: string | null
    Min?: Decimal | DecimalJsLike | number | string | null
    Max?: Decimal | DecimalJsLike | number | string | null
    Unit?: string | null
    SigFig?: Decimal | DecimalJsLike | number | string | null
    Version?: string | null
    Uploaded?: Date | string | null
  }

  export type tblSchemaUpdateInput = {
    Order?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Table?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    Alias?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DataType?: NullableStringFieldUpdateOperationsInput | string | null
    Length?: NullableStringFieldUpdateOperationsInput | string | null
    DatatypeNotes?: NullableStringFieldUpdateOperationsInput | string | null
    Min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Unit?: NullableStringFieldUpdateOperationsInput | string | null
    SigFig?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Version?: NullableStringFieldUpdateOperationsInput | string | null
    Uploaded?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblSchemaUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    Order?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Table?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    Alias?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DataType?: NullableStringFieldUpdateOperationsInput | string | null
    Length?: NullableStringFieldUpdateOperationsInput | string | null
    DatatypeNotes?: NullableStringFieldUpdateOperationsInput | string | null
    Min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Unit?: NullableStringFieldUpdateOperationsInput | string | null
    SigFig?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Version?: NullableStringFieldUpdateOperationsInput | string | null
    Uploaded?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblSchemaCreateManyInput = {
    rid?: number
    Order?: Decimal | DecimalJsLike | number | string | null
    Table?: string | null
    Field?: string | null
    Alias?: string | null
    Description?: string | null
    DataType?: string | null
    Length?: string | null
    DatatypeNotes?: string | null
    Min?: Decimal | DecimalJsLike | number | string | null
    Max?: Decimal | DecimalJsLike | number | string | null
    Unit?: string | null
    SigFig?: Decimal | DecimalJsLike | number | string | null
    Version?: string | null
    Uploaded?: Date | string | null
  }

  export type tblSchemaUpdateManyMutationInput = {
    Order?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Table?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    Alias?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DataType?: NullableStringFieldUpdateOperationsInput | string | null
    Length?: NullableStringFieldUpdateOperationsInput | string | null
    DatatypeNotes?: NullableStringFieldUpdateOperationsInput | string | null
    Min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Unit?: NullableStringFieldUpdateOperationsInput | string | null
    SigFig?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Version?: NullableStringFieldUpdateOperationsInput | string | null
    Uploaded?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblSchemaUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    Order?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Table?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    Alias?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DataType?: NullableStringFieldUpdateOperationsInput | string | null
    Length?: NullableStringFieldUpdateOperationsInput | string | null
    DatatypeNotes?: NullableStringFieldUpdateOperationsInput | string | null
    Min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Unit?: NullableStringFieldUpdateOperationsInput | string | null
    SigFig?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Version?: NullableStringFieldUpdateOperationsInput | string | null
    Uploaded?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoIndicators_viewCreateInput = {
    rid: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
    horizontal_flux_total_MD?: number | null
    vertical_flux_MD?: number | null
    PM2_5_MD?: number | null
    PM10_MD?: number | null
  }

  export type geoIndicators_viewUncheckedCreateInput = {
    rid: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
    horizontal_flux_total_MD?: number | null
    vertical_flux_MD?: number | null
    PM2_5_MD?: number | null
    PM10_MD?: number | null
  }

  export type geoIndicators_viewUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type geoIndicators_viewUncheckedUpdateInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type geoIndicators_viewCreateManyInput = {
    rid: number
    PrimaryKey?: string | null
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
    horizontal_flux_total_MD?: number | null
    vertical_flux_MD?: number | null
    PM2_5_MD?: number | null
    PM10_MD?: number | null
  }

  export type geoIndicators_viewUpdateManyMutationInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type geoIndicators_viewUncheckedUpdateManyInput = {
    rid?: IntFieldUpdateOperationsInput | number
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DataHeaderRelationFilter = {
    is?: dataHeaderWhereInput | null
    isNot?: dataHeaderWhereInput | null
  }

  export type dataGapPrimaryKeyGapStartGapEndRidCompoundUniqueInput = {
    PrimaryKey: string
    GapStart: number
    GapEnd: number
    rid: number
  }

  export type dataGapCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecType?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormDate?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    PerennialsCanopy?: SortOrder
    AnnualGrassesCanopy?: SortOrder
    AnnualForbsCanopy?: SortOrder
    OtherCanopy?: SortOrder
    Notes?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
    DateLoadedInDb?: SortOrder
    PerennialsBasal?: SortOrder
    AnnualGrassesBasal?: SortOrder
    AnnualForbsBasal?: SortOrder
    OtherBasal?: SortOrder
    source?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataGapAvgOrderByAggregateInput = {
    rid?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
  }

  export type dataGapMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecType?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormDate?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    PerennialsCanopy?: SortOrder
    AnnualGrassesCanopy?: SortOrder
    AnnualForbsCanopy?: SortOrder
    OtherCanopy?: SortOrder
    Notes?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
    DateLoadedInDb?: SortOrder
    PerennialsBasal?: SortOrder
    AnnualGrassesBasal?: SortOrder
    AnnualForbsBasal?: SortOrder
    OtherBasal?: SortOrder
    source?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataGapMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecType?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormDate?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    PerennialsCanopy?: SortOrder
    AnnualGrassesCanopy?: SortOrder
    AnnualForbsCanopy?: SortOrder
    OtherCanopy?: SortOrder
    Notes?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
    DateLoadedInDb?: SortOrder
    PerennialsBasal?: SortOrder
    AnnualGrassesBasal?: SortOrder
    AnnualForbsBasal?: SortOrder
    OtherBasal?: SortOrder
    source?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataGapSumOrderByAggregateInput = {
    rid?: SortOrder
    SeqNo?: SortOrder
    GapStart?: SortOrder
    GapEnd?: SortOrder
    Gap?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    GapMin?: SortOrder
    GapData?: SortOrder
    NoCanopyGaps?: SortOrder
    NoBasalGaps?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DataGapListRelationFilter = {
    every?: dataGapWhereInput
    some?: dataGapWhereInput
    none?: dataGapWhereInput
  }

  export type DataHeightListRelationFilter = {
    every?: dataHeightWhereInput
    some?: dataHeightWhereInput
    none?: dataHeightWhereInput
  }

  export type DataLPIListRelationFilter = {
    every?: dataLPIWhereInput
    some?: dataLPIWhereInput
    none?: dataLPIWhereInput
  }

  export type DataSoilStabilityListRelationFilter = {
    every?: dataSoilStabilityWhereInput
    some?: dataSoilStabilityWhereInput
    none?: dataSoilStabilityWhereInput
  }

  export type DataSpeciesInventoryListRelationFilter = {
    every?: dataSpeciesInventoryWhereInput
    some?: dataSpeciesInventoryWhereInput
    none?: dataSpeciesInventoryWhereInput
  }

  export type GeoIndicatorsRelationFilter = {
    is?: geoIndicatorsWhereInput | null
    isNot?: geoIndicatorsWhereInput | null
  }

  export type GeoSpeciesListRelationFilter = {
    every?: geoSpeciesWhereInput
    some?: geoSpeciesWhereInput
    none?: geoSpeciesWhereInput
  }

  export type dataGapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataHeightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataLPIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataSoilStabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataSpeciesInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type geoSpeciesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataHeaderCountOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationType?: SortOrder
    EcologicalSiteID?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    SpeciesKey?: SortOrder
    PlotID?: SortOrder
    DateLoadedInDb?: SortOrder
    source?: SortOrder
    rid?: SortOrder
  }

  export type dataHeaderAvgOrderByAggregateInput = {
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    rid?: SortOrder
  }

  export type dataHeaderMaxOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationType?: SortOrder
    EcologicalSiteID?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    SpeciesKey?: SortOrder
    PlotID?: SortOrder
    DateLoadedInDb?: SortOrder
    source?: SortOrder
    rid?: SortOrder
  }

  export type dataHeaderMinOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationType?: SortOrder
    EcologicalSiteID?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    SpeciesKey?: SortOrder
    PlotID?: SortOrder
    DateLoadedInDb?: SortOrder
    source?: SortOrder
    rid?: SortOrder
  }

  export type dataHeaderSumOrderByAggregateInput = {
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    rid?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type dataHeightCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    RecKey?: SortOrder
    Height?: SortOrder
    Species?: SortOrder
    Chkbox?: SortOrder
    type?: SortOrder
    GrowthHabit_measured?: SortOrder
    LineKey?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    source?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    HeightOption?: SortOrder
    HeightUOM?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataHeightAvgOrderByAggregateInput = {
    rid?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    Height?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
  }

  export type dataHeightMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    RecKey?: SortOrder
    Height?: SortOrder
    Species?: SortOrder
    Chkbox?: SortOrder
    type?: SortOrder
    GrowthHabit_measured?: SortOrder
    LineKey?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    source?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    HeightOption?: SortOrder
    HeightUOM?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataHeightMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    RecKey?: SortOrder
    Height?: SortOrder
    Species?: SortOrder
    Chkbox?: SortOrder
    type?: SortOrder
    GrowthHabit_measured?: SortOrder
    LineKey?: SortOrder
    DateModified?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    source?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    HeightOption?: SortOrder
    HeightUOM?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataHeightSumOrderByAggregateInput = {
    rid?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    Height?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type dataLPICountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    layer?: SortOrder
    code?: SortOrder
    chckbox?: SortOrder
    ShrubShape?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataLPIAvgOrderByAggregateInput = {
    rid?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
  }

  export type dataLPIMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    layer?: SortOrder
    code?: SortOrder
    chckbox?: SortOrder
    ShrubShape?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataLPIMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    layer?: SortOrder
    code?: SortOrder
    chckbox?: SortOrder
    ShrubShape?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    Direction?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    SpacingType?: SortOrder
    ShowCheckbox?: SortOrder
    CheckboxLabel?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataLPISumOrderByAggregateInput = {
    rid?: SortOrder
    Measure?: SortOrder
    LineLengthAmount?: SortOrder
    SpacingIntervalAmount?: SortOrder
    PointLoc?: SortOrder
    PointNbr?: SortOrder
  }

  export type dataSoilStabilityCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    LineKey?: SortOrder
    SoilStabSubSurface?: SortOrder
    Line?: SortOrder
    Position?: SortOrder
    Pos?: SortOrder
    Veg?: SortOrder
    Rating?: SortOrder
    Hydro?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSoilStabilityAvgOrderByAggregateInput = {
    rid?: SortOrder
    SoilStabSubSurface?: SortOrder
    Position?: SortOrder
    Rating?: SortOrder
  }

  export type dataSoilStabilityMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    LineKey?: SortOrder
    SoilStabSubSurface?: SortOrder
    Line?: SortOrder
    Position?: SortOrder
    Pos?: SortOrder
    Veg?: SortOrder
    Rating?: SortOrder
    Hydro?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSoilStabilityMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    LineKey?: SortOrder
    SoilStabSubSurface?: SortOrder
    Line?: SortOrder
    Position?: SortOrder
    Pos?: SortOrder
    Veg?: SortOrder
    Rating?: SortOrder
    Hydro?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSoilStabilitySumOrderByAggregateInput = {
    rid?: SortOrder
    SoilStabSubSurface?: SortOrder
    Position?: SortOrder
    Rating?: SortOrder
  }

  export type dataSpeciesInventoryCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    DENSITY?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Container?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Container?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Container?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Container?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Container?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Container?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSpeciesInventoryAvgOrderByAggregateInput = {
    rid?: SortOrder
    DENSITY?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
  }

  export type dataSpeciesInventoryMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    DENSITY?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Container?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Container?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Container?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Container?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Container?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Container?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSpeciesInventoryMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    DENSITY?: SortOrder
    LineKey?: SortOrder
    RecKey?: SortOrder
    FormType?: SortOrder
    FormDate?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Container?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Container?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Container?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Container?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Container?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Container?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
    Notes?: SortOrder
    source?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type dataSpeciesInventorySumOrderByAggregateInput = {
    rid?: SortOrder
    DENSITY?: SortOrder
    SpecRichMethod?: SortOrder
    SpecRichMeasure?: SortOrder
    SpecRichNbrSubPlots?: SortOrder
    SpecRich1Shape?: SortOrder
    SpecRich1Dim1?: SortOrder
    SpecRich1Dim2?: SortOrder
    SpecRich1Area?: SortOrder
    SpecRich2Shape?: SortOrder
    SpecRich2Dim1?: SortOrder
    SpecRich2Dim2?: SortOrder
    SpecRich2Area?: SortOrder
    SpecRich3Shape?: SortOrder
    SpecRich3Dim1?: SortOrder
    SpecRich3Dim2?: SortOrder
    SpecRich3Area?: SortOrder
    SpecRich4Shape?: SortOrder
    SpecRich4Dim1?: SortOrder
    SpecRich4Dim2?: SortOrder
    SpecRich4Area?: SortOrder
    SpecRich5Shape?: SortOrder
    SpecRich5Dim1?: SortOrder
    SpecRich5Dim2?: SortOrder
    SpecRich5Area?: SortOrder
    SpecRich6Shape?: SortOrder
    SpecRich6Dim1?: SortOrder
    SpecRich6Dim2?: SortOrder
    SpecRich6Area?: SortOrder
  }

  export type geoIndicatorsCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
  }

  export type geoIndicatorsAvgOrderByAggregateInput = {
    rid?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
  }

  export type geoIndicatorsMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
  }

  export type geoIndicatorsMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
  }

  export type geoIndicatorsSumOrderByAggregateInput = {
    rid?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
  }

  export type geoSpeciesCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
    Duration?: SortOrder
    GrowthHabit?: SortOrder
    GrowthHabitSub?: SortOrder
    SpeciesKey?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type geoSpeciesAvgOrderByAggregateInput = {
    rid?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
  }

  export type geoSpeciesMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
    Duration?: SortOrder
    GrowthHabit?: SortOrder
    GrowthHabitSub?: SortOrder
    SpeciesKey?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type geoSpeciesMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    Species?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
    Duration?: SortOrder
    GrowthHabit?: SortOrder
    GrowthHabitSub?: SortOrder
    SpeciesKey?: SortOrder
    DateLoadedInDb?: SortOrder
    DateVisited?: SortOrder
  }

  export type geoSpeciesSumOrderByAggregateInput = {
    rid?: SortOrder
    AH_SpeciesCover?: SortOrder
    AH_SpeciesCover_n?: SortOrder
    Hgt_Species_Avg?: SortOrder
    Hgt_Species_Avg_n?: SortOrder
  }

  export type tblProjectCountOrderByAggregateInput = {
    project_key?: SortOrder
    project_name?: SortOrder
    project_description?: SortOrder
    project_website?: SortOrder
    data_use_agreement?: SortOrder
    curator_PersonName?: SortOrder
    curator_organization?: SortOrder
    curator_email?: SortOrder
    author_PersonName?: SortOrder
    author_email?: SortOrder
    author_orcid_id?: SortOrder
    addit_contact_person?: SortOrder
    addit_contact_email?: SortOrder
    bibliographical_reference?: SortOrder
    data_doi?: SortOrder
  }

  export type tblProjectMaxOrderByAggregateInput = {
    project_key?: SortOrder
    project_name?: SortOrder
    project_description?: SortOrder
    project_website?: SortOrder
    data_use_agreement?: SortOrder
    curator_PersonName?: SortOrder
    curator_organization?: SortOrder
    curator_email?: SortOrder
    author_PersonName?: SortOrder
    author_email?: SortOrder
    author_orcid_id?: SortOrder
    addit_contact_person?: SortOrder
    addit_contact_email?: SortOrder
    bibliographical_reference?: SortOrder
    data_doi?: SortOrder
  }

  export type tblProjectMinOrderByAggregateInput = {
    project_key?: SortOrder
    project_name?: SortOrder
    project_description?: SortOrder
    project_website?: SortOrder
    data_use_agreement?: SortOrder
    curator_PersonName?: SortOrder
    curator_organization?: SortOrder
    curator_email?: SortOrder
    author_PersonName?: SortOrder
    author_email?: SortOrder
    author_orcid_id?: SortOrder
    addit_contact_person?: SortOrder
    addit_contact_email?: SortOrder
    bibliographical_reference?: SortOrder
    data_doi?: SortOrder
  }

  export type tblSchemaCountOrderByAggregateInput = {
    rid?: SortOrder
    Order?: SortOrder
    Table?: SortOrder
    Field?: SortOrder
    Alias?: SortOrder
    Description?: SortOrder
    DataType?: SortOrder
    Length?: SortOrder
    DatatypeNotes?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    Unit?: SortOrder
    SigFig?: SortOrder
    Version?: SortOrder
    Uploaded?: SortOrder
  }

  export type tblSchemaAvgOrderByAggregateInput = {
    rid?: SortOrder
    Order?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    SigFig?: SortOrder
  }

  export type tblSchemaMaxOrderByAggregateInput = {
    rid?: SortOrder
    Order?: SortOrder
    Table?: SortOrder
    Field?: SortOrder
    Alias?: SortOrder
    Description?: SortOrder
    DataType?: SortOrder
    Length?: SortOrder
    DatatypeNotes?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    Unit?: SortOrder
    SigFig?: SortOrder
    Version?: SortOrder
    Uploaded?: SortOrder
  }

  export type tblSchemaMinOrderByAggregateInput = {
    rid?: SortOrder
    Order?: SortOrder
    Table?: SortOrder
    Field?: SortOrder
    Alias?: SortOrder
    Description?: SortOrder
    DataType?: SortOrder
    Length?: SortOrder
    DatatypeNotes?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    Unit?: SortOrder
    SigFig?: SortOrder
    Version?: SortOrder
    Uploaded?: SortOrder
  }

  export type tblSchemaSumOrderByAggregateInput = {
    rid?: SortOrder
    Order?: SortOrder
    Min?: SortOrder
    Max?: SortOrder
    SigFig?: SortOrder
  }

  export type geoIndicators_viewCountOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type geoIndicators_viewAvgOrderByAggregateInput = {
    rid?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type geoIndicators_viewMaxOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type geoIndicators_viewMinOrderByAggregateInput = {
    rid?: SortOrder
    PrimaryKey?: SortOrder
    DBKey?: SortOrder
    ProjectKey?: SortOrder
    DateVisited?: SortOrder
    EcologicalSiteId?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    LocationStatus?: SortOrder
    LocationType?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    RH_AnnualProd?: SortOrder
    RH_BareGround?: SortOrder
    RH_BioticIntegrity?: SortOrder
    RH_CommentsBI?: SortOrder
    RH_CommentsHF?: SortOrder
    RH_CommentsSS?: SortOrder
    RH_Compaction?: SortOrder
    RH_DeadDyingPlantParts?: SortOrder
    RH_FuncSructGroup?: SortOrder
    RH_Gullies?: SortOrder
    RH_HydrologicFunction?: SortOrder
    RH_InvasivePlants?: SortOrder
    RH_LitterAmount?: SortOrder
    RH_LitterMovement?: SortOrder
    RH_PedestalsTerracettes?: SortOrder
    RH_PlantCommunityComp?: SortOrder
    RH_ReprodCapabilityPeren?: SortOrder
    RH_Rills?: SortOrder
    RH_SoilSiteStability?: SortOrder
    RH_SoilSurfLossDeg?: SortOrder
    RH_SoilSurfResisErosion?: SortOrder
    RH_WaterFlowPatterns?: SortOrder
    RH_WindScouredAreas?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    DateLoadedInDb?: SortOrder
    mlra_name?: SortOrder
    mlrarsym?: SortOrder
    na_l1name?: SortOrder
    na_l2name?: SortOrder
    us_l3name?: SortOrder
    us_l4name?: SortOrder
    State?: SortOrder
    modis_landcover?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type geoIndicators_viewSumOrderByAggregateInput = {
    rid?: SortOrder
    PercentCoveredByEcoSite?: SortOrder
    Latitude_NAD83?: SortOrder
    Longitude_NAD83?: SortOrder
    Latitude_NAD83_Actual?: SortOrder
    Longitude_NAD83_Actual?: SortOrder
    BareSoilCover?: SortOrder
    TotalFoliarCover?: SortOrder
    AH_AnnGrassCover?: SortOrder
    AH_ForbCover?: SortOrder
    AH_GrassCover?: SortOrder
    AH_PerenForbCover?: SortOrder
    AH_PerenForbGrassCover?: SortOrder
    AH_PerenGrassCover?: SortOrder
    AH_ShrubCover?: SortOrder
    FH_CyanobacteriaCover?: SortOrder
    FH_DepSoilCover?: SortOrder
    FH_DuffCover?: SortOrder
    FH_EmbLitterCover?: SortOrder
    FH_HerbLitterCover?: SortOrder
    FH_LichenCover?: SortOrder
    FH_MossCover?: SortOrder
    FH_RockCover?: SortOrder
    FH_TotalLitterCover?: SortOrder
    FH_VagrLichenCover?: SortOrder
    FH_WaterCover?: SortOrder
    FH_WoodyLitterCover?: SortOrder
    GapCover_101_200?: SortOrder
    GapCover_200_plus?: SortOrder
    GapCover_25_50?: SortOrder
    GapCover_25_plus?: SortOrder
    GapCover_51_100?: SortOrder
    Hgt_Forb_Avg?: SortOrder
    Hgt_Grass_Avg?: SortOrder
    Hgt_Herbaceous_Avg?: SortOrder
    Hgt_PerenForb_Avg?: SortOrder
    Hgt_PerenForbGrass_Avg?: SortOrder
    Hgt_PerenGrass_Avg?: SortOrder
    Hgt_Woody_Avg?: SortOrder
    SoilStability_All?: SortOrder
    SoilStability_Protected?: SortOrder
    SoilStability_Unprotected?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    vertical_flux_MD?: SortOrder
    PM2_5_MD?: SortOrder
    PM10_MD?: SortOrder
  }

  export type dataHeaderCreateNestedOneWithoutDataGapInput = {
    create?: XOR<dataHeaderCreateWithoutDataGapInput, dataHeaderUncheckedCreateWithoutDataGapInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataGapInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type dataHeaderUpdateOneWithoutDataGapNestedInput = {
    create?: XOR<dataHeaderCreateWithoutDataGapInput, dataHeaderUncheckedCreateWithoutDataGapInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataGapInput
    upsert?: dataHeaderUpsertWithoutDataGapInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutDataGapInput, dataHeaderUncheckedUpdateWithoutDataGapInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dataGapCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataGapCreateWithoutDataHeaderInput>, Enumerable<dataGapUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataGapCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataGapCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataGapWhereUniqueInput>
  }

  export type dataHeightCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataHeightCreateWithoutDataHeaderInput>, Enumerable<dataHeightUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataHeightCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataHeightCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataHeightWhereUniqueInput>
  }

  export type dataLPICreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataLPICreateWithoutDataHeaderInput>, Enumerable<dataLPIUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataLPICreateOrConnectWithoutDataHeaderInput>
    createMany?: dataLPICreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataLPIWhereUniqueInput>
  }

  export type dataSoilStabilityCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataSoilStabilityCreateWithoutDataHeaderInput>, Enumerable<dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSoilStabilityCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataSoilStabilityCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataSoilStabilityWhereUniqueInput>
  }

  export type dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataSpeciesInventoryCreateWithoutDataHeaderInput>, Enumerable<dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSpeciesInventoryCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataSpeciesInventoryCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
  }

  export type geoIndicatorsCreateNestedOneWithoutDataHeaderInput = {
    create?: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
    connectOrCreate?: geoIndicatorsCreateOrConnectWithoutDataHeaderInput
    connect?: geoIndicatorsWhereUniqueInput
  }

  export type geoSpeciesCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<geoSpeciesCreateWithoutDataHeaderInput>, Enumerable<geoSpeciesUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<geoSpeciesCreateOrConnectWithoutDataHeaderInput>
    createMany?: geoSpeciesCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<geoSpeciesWhereUniqueInput>
  }

  export type dataGapUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataGapCreateWithoutDataHeaderInput>, Enumerable<dataGapUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataGapCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataGapCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataGapWhereUniqueInput>
  }

  export type dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataHeightCreateWithoutDataHeaderInput>, Enumerable<dataHeightUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataHeightCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataHeightCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataHeightWhereUniqueInput>
  }

  export type dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataLPICreateWithoutDataHeaderInput>, Enumerable<dataLPIUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataLPICreateOrConnectWithoutDataHeaderInput>
    createMany?: dataLPICreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataLPIWhereUniqueInput>
  }

  export type dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataSoilStabilityCreateWithoutDataHeaderInput>, Enumerable<dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSoilStabilityCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataSoilStabilityCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataSoilStabilityWhereUniqueInput>
  }

  export type dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<dataSpeciesInventoryCreateWithoutDataHeaderInput>, Enumerable<dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSpeciesInventoryCreateOrConnectWithoutDataHeaderInput>
    createMany?: dataSpeciesInventoryCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
  }

  export type geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput = {
    create?: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
    connectOrCreate?: geoIndicatorsCreateOrConnectWithoutDataHeaderInput
    connect?: geoIndicatorsWhereUniqueInput
  }

  export type geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput = {
    create?: XOR<Enumerable<geoSpeciesCreateWithoutDataHeaderInput>, Enumerable<geoSpeciesUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<geoSpeciesCreateOrConnectWithoutDataHeaderInput>
    createMany?: geoSpeciesCreateManyDataHeaderInputEnvelope
    connect?: Enumerable<geoSpeciesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type dataGapUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataGapCreateWithoutDataHeaderInput>, Enumerable<dataGapUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataGapCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataGapUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataGapCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataGapWhereUniqueInput>
    disconnect?: Enumerable<dataGapWhereUniqueInput>
    delete?: Enumerable<dataGapWhereUniqueInput>
    connect?: Enumerable<dataGapWhereUniqueInput>
    update?: Enumerable<dataGapUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataGapUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataGapScalarWhereInput>
  }

  export type dataHeightUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataHeightCreateWithoutDataHeaderInput>, Enumerable<dataHeightUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataHeightCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataHeightUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataHeightCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataHeightWhereUniqueInput>
    disconnect?: Enumerable<dataHeightWhereUniqueInput>
    delete?: Enumerable<dataHeightWhereUniqueInput>
    connect?: Enumerable<dataHeightWhereUniqueInput>
    update?: Enumerable<dataHeightUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataHeightUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataHeightScalarWhereInput>
  }

  export type dataLPIUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataLPICreateWithoutDataHeaderInput>, Enumerable<dataLPIUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataLPICreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataLPIUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataLPICreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataLPIWhereUniqueInput>
    disconnect?: Enumerable<dataLPIWhereUniqueInput>
    delete?: Enumerable<dataLPIWhereUniqueInput>
    connect?: Enumerable<dataLPIWhereUniqueInput>
    update?: Enumerable<dataLPIUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataLPIUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataLPIScalarWhereInput>
  }

  export type dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataSoilStabilityCreateWithoutDataHeaderInput>, Enumerable<dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSoilStabilityCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataSoilStabilityUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataSoilStabilityCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataSoilStabilityWhereUniqueInput>
    disconnect?: Enumerable<dataSoilStabilityWhereUniqueInput>
    delete?: Enumerable<dataSoilStabilityWhereUniqueInput>
    connect?: Enumerable<dataSoilStabilityWhereUniqueInput>
    update?: Enumerable<dataSoilStabilityUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataSoilStabilityUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataSoilStabilityScalarWhereInput>
  }

  export type dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataSpeciesInventoryCreateWithoutDataHeaderInput>, Enumerable<dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSpeciesInventoryCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataSpeciesInventoryUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataSpeciesInventoryCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    disconnect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    delete?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    connect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    update?: Enumerable<dataSpeciesInventoryUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataSpeciesInventoryUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataSpeciesInventoryScalarWhereInput>
  }

  export type geoIndicatorsUpdateOneWithoutDataHeaderNestedInput = {
    create?: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
    connectOrCreate?: geoIndicatorsCreateOrConnectWithoutDataHeaderInput
    upsert?: geoIndicatorsUpsertWithoutDataHeaderInput
    disconnect?: boolean
    delete?: boolean
    connect?: geoIndicatorsWhereUniqueInput
    update?: XOR<geoIndicatorsUpdateWithoutDataHeaderInput, geoIndicatorsUncheckedUpdateWithoutDataHeaderInput>
  }

  export type geoSpeciesUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<geoSpeciesCreateWithoutDataHeaderInput>, Enumerable<geoSpeciesUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<geoSpeciesCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<geoSpeciesUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: geoSpeciesCreateManyDataHeaderInputEnvelope
    set?: Enumerable<geoSpeciesWhereUniqueInput>
    disconnect?: Enumerable<geoSpeciesWhereUniqueInput>
    delete?: Enumerable<geoSpeciesWhereUniqueInput>
    connect?: Enumerable<geoSpeciesWhereUniqueInput>
    update?: Enumerable<geoSpeciesUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<geoSpeciesUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<geoSpeciesScalarWhereInput>
  }

  export type dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataGapCreateWithoutDataHeaderInput>, Enumerable<dataGapUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataGapCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataGapUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataGapCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataGapWhereUniqueInput>
    disconnect?: Enumerable<dataGapWhereUniqueInput>
    delete?: Enumerable<dataGapWhereUniqueInput>
    connect?: Enumerable<dataGapWhereUniqueInput>
    update?: Enumerable<dataGapUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataGapUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataGapScalarWhereInput>
  }

  export type dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataHeightCreateWithoutDataHeaderInput>, Enumerable<dataHeightUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataHeightCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataHeightUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataHeightCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataHeightWhereUniqueInput>
    disconnect?: Enumerable<dataHeightWhereUniqueInput>
    delete?: Enumerable<dataHeightWhereUniqueInput>
    connect?: Enumerable<dataHeightWhereUniqueInput>
    update?: Enumerable<dataHeightUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataHeightUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataHeightScalarWhereInput>
  }

  export type dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataLPICreateWithoutDataHeaderInput>, Enumerable<dataLPIUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataLPICreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataLPIUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataLPICreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataLPIWhereUniqueInput>
    disconnect?: Enumerable<dataLPIWhereUniqueInput>
    delete?: Enumerable<dataLPIWhereUniqueInput>
    connect?: Enumerable<dataLPIWhereUniqueInput>
    update?: Enumerable<dataLPIUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataLPIUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataLPIScalarWhereInput>
  }

  export type dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataSoilStabilityCreateWithoutDataHeaderInput>, Enumerable<dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSoilStabilityCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataSoilStabilityUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataSoilStabilityCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataSoilStabilityWhereUniqueInput>
    disconnect?: Enumerable<dataSoilStabilityWhereUniqueInput>
    delete?: Enumerable<dataSoilStabilityWhereUniqueInput>
    connect?: Enumerable<dataSoilStabilityWhereUniqueInput>
    update?: Enumerable<dataSoilStabilityUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataSoilStabilityUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataSoilStabilityScalarWhereInput>
  }

  export type dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<dataSpeciesInventoryCreateWithoutDataHeaderInput>, Enumerable<dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<dataSpeciesInventoryCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<dataSpeciesInventoryUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: dataSpeciesInventoryCreateManyDataHeaderInputEnvelope
    set?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    disconnect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    delete?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    connect?: Enumerable<dataSpeciesInventoryWhereUniqueInput>
    update?: Enumerable<dataSpeciesInventoryUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<dataSpeciesInventoryUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<dataSpeciesInventoryScalarWhereInput>
  }

  export type geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput = {
    create?: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
    connectOrCreate?: geoIndicatorsCreateOrConnectWithoutDataHeaderInput
    upsert?: geoIndicatorsUpsertWithoutDataHeaderInput
    disconnect?: boolean
    delete?: boolean
    connect?: geoIndicatorsWhereUniqueInput
    update?: XOR<geoIndicatorsUpdateWithoutDataHeaderInput, geoIndicatorsUncheckedUpdateWithoutDataHeaderInput>
  }

  export type geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput = {
    create?: XOR<Enumerable<geoSpeciesCreateWithoutDataHeaderInput>, Enumerable<geoSpeciesUncheckedCreateWithoutDataHeaderInput>>
    connectOrCreate?: Enumerable<geoSpeciesCreateOrConnectWithoutDataHeaderInput>
    upsert?: Enumerable<geoSpeciesUpsertWithWhereUniqueWithoutDataHeaderInput>
    createMany?: geoSpeciesCreateManyDataHeaderInputEnvelope
    set?: Enumerable<geoSpeciesWhereUniqueInput>
    disconnect?: Enumerable<geoSpeciesWhereUniqueInput>
    delete?: Enumerable<geoSpeciesWhereUniqueInput>
    connect?: Enumerable<geoSpeciesWhereUniqueInput>
    update?: Enumerable<geoSpeciesUpdateWithWhereUniqueWithoutDataHeaderInput>
    updateMany?: Enumerable<geoSpeciesUpdateManyWithWhereWithoutDataHeaderInput>
    deleteMany?: Enumerable<geoSpeciesScalarWhereInput>
  }

  export type dataHeaderCreateNestedOneWithoutDataHeightInput = {
    create?: XOR<dataHeaderCreateWithoutDataHeightInput, dataHeaderUncheckedCreateWithoutDataHeightInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataHeightInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dataHeaderUpdateOneWithoutDataHeightNestedInput = {
    create?: XOR<dataHeaderCreateWithoutDataHeightInput, dataHeaderUncheckedCreateWithoutDataHeightInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataHeightInput
    upsert?: dataHeaderUpsertWithoutDataHeightInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutDataHeightInput, dataHeaderUncheckedUpdateWithoutDataHeightInput>
  }

  export type dataHeaderCreateNestedOneWithoutDataLPIInput = {
    create?: XOR<dataHeaderCreateWithoutDataLPIInput, dataHeaderUncheckedCreateWithoutDataLPIInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataLPIInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type dataHeaderUpdateOneWithoutDataLPINestedInput = {
    create?: XOR<dataHeaderCreateWithoutDataLPIInput, dataHeaderUncheckedCreateWithoutDataLPIInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataLPIInput
    upsert?: dataHeaderUpsertWithoutDataLPIInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutDataLPIInput, dataHeaderUncheckedUpdateWithoutDataLPIInput>
  }

  export type dataHeaderCreateNestedOneWithoutDataSoilStabilityInput = {
    create?: XOR<dataHeaderCreateWithoutDataSoilStabilityInput, dataHeaderUncheckedCreateWithoutDataSoilStabilityInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataSoilStabilityInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type dataHeaderUpdateOneWithoutDataSoilStabilityNestedInput = {
    create?: XOR<dataHeaderCreateWithoutDataSoilStabilityInput, dataHeaderUncheckedCreateWithoutDataSoilStabilityInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataSoilStabilityInput
    upsert?: dataHeaderUpsertWithoutDataSoilStabilityInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutDataSoilStabilityInput, dataHeaderUncheckedUpdateWithoutDataSoilStabilityInput>
  }

  export type dataHeaderCreateNestedOneWithoutDataSpeciesInventoryInput = {
    create?: XOR<dataHeaderCreateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedCreateWithoutDataSpeciesInventoryInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataSpeciesInventoryInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type dataHeaderUpdateOneWithoutDataSpeciesInventoryNestedInput = {
    create?: XOR<dataHeaderCreateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedCreateWithoutDataSpeciesInventoryInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutDataSpeciesInventoryInput
    upsert?: dataHeaderUpsertWithoutDataSpeciesInventoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedUpdateWithoutDataSpeciesInventoryInput>
  }

  export type dataHeaderCreateNestedOneWithoutGeoIndicatorsInput = {
    create?: XOR<dataHeaderCreateWithoutGeoIndicatorsInput, dataHeaderUncheckedCreateWithoutGeoIndicatorsInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutGeoIndicatorsInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type dataHeaderUpdateOneWithoutGeoIndicatorsNestedInput = {
    create?: XOR<dataHeaderCreateWithoutGeoIndicatorsInput, dataHeaderUncheckedCreateWithoutGeoIndicatorsInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutGeoIndicatorsInput
    upsert?: dataHeaderUpsertWithoutGeoIndicatorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutGeoIndicatorsInput, dataHeaderUncheckedUpdateWithoutGeoIndicatorsInput>
  }

  export type dataHeaderCreateNestedOneWithoutGeoSpeciesInput = {
    create?: XOR<dataHeaderCreateWithoutGeoSpeciesInput, dataHeaderUncheckedCreateWithoutGeoSpeciesInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutGeoSpeciesInput
    connect?: dataHeaderWhereUniqueInput
  }

  export type dataHeaderUpdateOneWithoutGeoSpeciesNestedInput = {
    create?: XOR<dataHeaderCreateWithoutGeoSpeciesInput, dataHeaderUncheckedCreateWithoutGeoSpeciesInput>
    connectOrCreate?: dataHeaderCreateOrConnectWithoutGeoSpeciesInput
    upsert?: dataHeaderUpsertWithoutGeoSpeciesInput
    disconnect?: boolean
    delete?: boolean
    connect?: dataHeaderWhereUniqueInput
    update?: XOR<dataHeaderUpdateWithoutGeoSpeciesInput, dataHeaderUncheckedUpdateWithoutGeoSpeciesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type dataHeaderCreateWithoutDataGapInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutDataGapInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutDataGapInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutDataGapInput, dataHeaderUncheckedCreateWithoutDataGapInput>
  }

  export type dataHeaderUpsertWithoutDataGapInput = {
    update: XOR<dataHeaderUpdateWithoutDataGapInput, dataHeaderUncheckedUpdateWithoutDataGapInput>
    create: XOR<dataHeaderCreateWithoutDataGapInput, dataHeaderUncheckedCreateWithoutDataGapInput>
  }

  export type dataHeaderUpdateWithoutDataGapInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutDataGapInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataGapCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
  }

  export type dataGapUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
  }

  export type dataGapCreateOrConnectWithoutDataHeaderInput = {
    where: dataGapWhereUniqueInput
    create: XOR<dataGapCreateWithoutDataHeaderInput, dataGapUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataGapCreateManyDataHeaderInputEnvelope = {
    data: Enumerable<dataGapCreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type dataHeightCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataHeightUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataHeightCreateOrConnectWithoutDataHeaderInput = {
    where: dataHeightWhereUniqueInput
    create: XOR<dataHeightCreateWithoutDataHeaderInput, dataHeightUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataHeightCreateManyDataHeaderInputEnvelope = {
    data: Enumerable<dataHeightCreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type dataLPICreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataLPIUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataLPICreateOrConnectWithoutDataHeaderInput = {
    where: dataLPIWhereUniqueInput
    create: XOR<dataLPICreateWithoutDataHeaderInput, dataLPIUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataLPICreateManyDataHeaderInputEnvelope = {
    data: Enumerable<dataLPICreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type dataSoilStabilityCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSoilStabilityUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSoilStabilityCreateOrConnectWithoutDataHeaderInput = {
    where: dataSoilStabilityWhereUniqueInput
    create: XOR<dataSoilStabilityCreateWithoutDataHeaderInput, dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataSoilStabilityCreateManyDataHeaderInputEnvelope = {
    data: Enumerable<dataSoilStabilityCreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type dataSpeciesInventoryCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSpeciesInventoryCreateOrConnectWithoutDataHeaderInput = {
    where: dataSpeciesInventoryWhereUniqueInput
    create: XOR<dataSpeciesInventoryCreateWithoutDataHeaderInput, dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataSpeciesInventoryCreateManyDataHeaderInputEnvelope = {
    data: Enumerable<dataSpeciesInventoryCreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type geoIndicatorsCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
  }

  export type geoIndicatorsUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    EcologicalSiteId?: string | null
    PercentCoveredByEcoSite?: number | null
    Latitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: Decimal | DecimalJsLike | number | string | null
    LocationStatus?: string | null
    LocationType?: string | null
    Latitude_NAD83_Actual?: number | null
    Longitude_NAD83_Actual?: number | null
    BareSoilCover?: number | null
    TotalFoliarCover?: number | null
    AH_AnnGrassCover?: number | null
    AH_ForbCover?: number | null
    AH_GrassCover?: number | null
    AH_PerenForbCover?: number | null
    AH_PerenForbGrassCover?: number | null
    AH_PerenGrassCover?: number | null
    AH_ShrubCover?: number | null
    FH_CyanobacteriaCover?: number | null
    FH_DepSoilCover?: number | null
    FH_DuffCover?: number | null
    FH_EmbLitterCover?: number | null
    FH_HerbLitterCover?: number | null
    FH_LichenCover?: number | null
    FH_MossCover?: number | null
    FH_RockCover?: number | null
    FH_TotalLitterCover?: number | null
    FH_VagrLichenCover?: number | null
    FH_WaterCover?: number | null
    FH_WoodyLitterCover?: number | null
    GapCover_101_200?: number | null
    GapCover_200_plus?: number | null
    GapCover_25_50?: number | null
    GapCover_25_plus?: number | null
    GapCover_51_100?: number | null
    Hgt_Forb_Avg?: number | null
    Hgt_Grass_Avg?: number | null
    Hgt_Herbaceous_Avg?: number | null
    Hgt_PerenForb_Avg?: number | null
    Hgt_PerenForbGrass_Avg?: number | null
    Hgt_PerenGrass_Avg?: number | null
    Hgt_Woody_Avg?: number | null
    RH_AnnualProd?: string | null
    RH_BareGround?: string | null
    RH_BioticIntegrity?: string | null
    RH_CommentsBI?: string | null
    RH_CommentsHF?: string | null
    RH_CommentsSS?: string | null
    RH_Compaction?: string | null
    RH_DeadDyingPlantParts?: string | null
    RH_FuncSructGroup?: string | null
    RH_Gullies?: string | null
    RH_HydrologicFunction?: string | null
    RH_InvasivePlants?: string | null
    RH_LitterAmount?: string | null
    RH_LitterMovement?: string | null
    RH_PedestalsTerracettes?: string | null
    RH_PlantCommunityComp?: string | null
    RH_ReprodCapabilityPeren?: string | null
    RH_Rills?: string | null
    RH_SoilSiteStability?: string | null
    RH_SoilSurfLossDeg?: string | null
    RH_SoilSurfResisErosion?: string | null
    RH_WaterFlowPatterns?: string | null
    RH_WindScouredAreas?: string | null
    SoilStability_All?: number | null
    SoilStability_Protected?: number | null
    SoilStability_Unprotected?: number | null
    DateLoadedInDb?: Date | string | null
    mlra_name?: string | null
    mlrarsym?: string | null
    na_l1name?: string | null
    na_l2name?: string | null
    us_l3name?: string | null
    us_l4name?: string | null
    State?: string | null
    modis_landcover?: string | null
  }

  export type geoIndicatorsCreateOrConnectWithoutDataHeaderInput = {
    where: geoIndicatorsWhereUniqueInput
    create: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
  }

  export type geoSpeciesCreateWithoutDataHeaderInput = {
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type geoSpeciesUncheckedCreateWithoutDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type geoSpeciesCreateOrConnectWithoutDataHeaderInput = {
    where: geoSpeciesWhereUniqueInput
    create: XOR<geoSpeciesCreateWithoutDataHeaderInput, geoSpeciesUncheckedCreateWithoutDataHeaderInput>
  }

  export type geoSpeciesCreateManyDataHeaderInputEnvelope = {
    data: Enumerable<geoSpeciesCreateManyDataHeaderInput>
    skipDuplicates?: boolean
  }

  export type dataGapUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: dataGapWhereUniqueInput
    update: XOR<dataGapUpdateWithoutDataHeaderInput, dataGapUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<dataGapCreateWithoutDataHeaderInput, dataGapUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataGapUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: dataGapWhereUniqueInput
    data: XOR<dataGapUpdateWithoutDataHeaderInput, dataGapUncheckedUpdateWithoutDataHeaderInput>
  }

  export type dataGapUpdateManyWithWhereWithoutDataHeaderInput = {
    where: dataGapScalarWhereInput
    data: XOR<dataGapUpdateManyMutationInput, dataGapUncheckedUpdateManyWithoutDataGapInput>
  }

  export type dataGapScalarWhereInput = {
    AND?: Enumerable<dataGapScalarWhereInput>
    OR?: Enumerable<dataGapScalarWhereInput>
    NOT?: Enumerable<dataGapScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    RecType?: StringNullableFilter | string | null
    SeqNo?: IntNullableFilter | number | null
    GapStart?: FloatNullableFilter | number | null
    GapEnd?: FloatNullableFilter | number | null
    Gap?: FloatNullableFilter | number | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    DateModified?: DateTimeNullableFilter | Date | string | null
    FormType?: StringNullableFilter | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: FloatNullableFilter | number | null
    GapMin?: FloatNullableFilter | number | null
    GapData?: IntNullableFilter | number | null
    PerennialsCanopy?: StringNullableFilter | string | null
    AnnualGrassesCanopy?: StringNullableFilter | string | null
    AnnualForbsCanopy?: StringNullableFilter | string | null
    OtherCanopy?: StringNullableFilter | string | null
    Notes?: StringNullableFilter | string | null
    NoCanopyGaps?: IntNullableFilter | number | null
    NoBasalGaps?: IntNullableFilter | number | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    PerennialsBasal?: StringNullableFilter | string | null
    AnnualGrassesBasal?: StringNullableFilter | string | null
    AnnualForbsBasal?: StringNullableFilter | string | null
    OtherBasal?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type dataHeightUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: dataHeightWhereUniqueInput
    update: XOR<dataHeightUpdateWithoutDataHeaderInput, dataHeightUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<dataHeightCreateWithoutDataHeaderInput, dataHeightUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataHeightUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: dataHeightWhereUniqueInput
    data: XOR<dataHeightUpdateWithoutDataHeaderInput, dataHeightUncheckedUpdateWithoutDataHeaderInput>
  }

  export type dataHeightUpdateManyWithWhereWithoutDataHeaderInput = {
    where: dataHeightScalarWhereInput
    data: XOR<dataHeightUpdateManyMutationInput, dataHeightUncheckedUpdateManyWithoutDataHeightInput>
  }

  export type dataHeightScalarWhereInput = {
    AND?: Enumerable<dataHeightScalarWhereInput>
    OR?: Enumerable<dataHeightScalarWhereInput>
    NOT?: Enumerable<dataHeightScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    PointLoc?: FloatNullableFilter | number | null
    PointNbr?: IntNullableFilter | number | null
    RecKey?: StringNullableFilter | string | null
    Height?: FloatNullableFilter | number | null
    Species?: StringNullableFilter | string | null
    Chkbox?: StringNullableFilter | string | null
    type?: StringNullableFilter | string | null
    GrowthHabit_measured?: StringNullableFilter | string | null
    LineKey?: StringNullableFilter | string | null
    DateModified?: DateTimeNullableFilter | Date | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    source?: StringNullableFilter | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: IntNullableFilter | number | null
    SpacingIntervalAmount?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    SpacingType?: StringNullableFilter | string | null
    HeightOption?: StringNullableFilter | string | null
    HeightUOM?: StringNullableFilter | string | null
    ShowCheckbox?: StringNullableFilter | string | null
    CheckboxLabel?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type dataLPIUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: dataLPIWhereUniqueInput
    update: XOR<dataLPIUpdateWithoutDataHeaderInput, dataLPIUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<dataLPICreateWithoutDataHeaderInput, dataLPIUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataLPIUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: dataLPIWhereUniqueInput
    data: XOR<dataLPIUpdateWithoutDataHeaderInput, dataLPIUncheckedUpdateWithoutDataHeaderInput>
  }

  export type dataLPIUpdateManyWithWhereWithoutDataHeaderInput = {
    where: dataLPIScalarWhereInput
    data: XOR<dataLPIUpdateManyMutationInput, dataLPIUncheckedUpdateManyWithoutDataLPIInput>
  }

  export type dataLPIScalarWhereInput = {
    AND?: Enumerable<dataLPIScalarWhereInput>
    OR?: Enumerable<dataLPIScalarWhereInput>
    NOT?: Enumerable<dataLPIScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    layer?: StringNullableFilter | string | null
    code?: StringNullableFilter | string | null
    chckbox?: StringNullableFilter | string | null
    ShrubShape?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    Direction?: StringNullableFilter | string | null
    Measure?: IntNullableFilter | number | null
    LineLengthAmount?: IntNullableFilter | number | null
    SpacingIntervalAmount?: FloatNullableFilter | number | null
    SpacingType?: StringNullableFilter | string | null
    ShowCheckbox?: StringNullableFilter | string | null
    CheckboxLabel?: StringNullableFilter | string | null
    PointLoc?: FloatNullableFilter | number | null
    PointNbr?: IntNullableFilter | number | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type dataSoilStabilityUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: dataSoilStabilityWhereUniqueInput
    update: XOR<dataSoilStabilityUpdateWithoutDataHeaderInput, dataSoilStabilityUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<dataSoilStabilityCreateWithoutDataHeaderInput, dataSoilStabilityUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataSoilStabilityUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: dataSoilStabilityWhereUniqueInput
    data: XOR<dataSoilStabilityUpdateWithoutDataHeaderInput, dataSoilStabilityUncheckedUpdateWithoutDataHeaderInput>
  }

  export type dataSoilStabilityUpdateManyWithWhereWithoutDataHeaderInput = {
    where: dataSoilStabilityScalarWhereInput
    data: XOR<dataSoilStabilityUpdateManyMutationInput, dataSoilStabilityUncheckedUpdateManyWithoutDataSoilStabilityInput>
  }

  export type dataSoilStabilityScalarWhereInput = {
    AND?: Enumerable<dataSoilStabilityScalarWhereInput>
    OR?: Enumerable<dataSoilStabilityScalarWhereInput>
    NOT?: Enumerable<dataSoilStabilityScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    LineKey?: StringNullableFilter | string | null
    SoilStabSubSurface?: IntNullableFilter | number | null
    Line?: StringNullableFilter | string | null
    Position?: IntNullableFilter | number | null
    Pos?: StringNullableFilter | string | null
    Veg?: StringNullableFilter | string | null
    Rating?: IntNullableFilter | number | null
    Hydro?: StringNullableFilter | string | null
    Notes?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type dataSpeciesInventoryUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: dataSpeciesInventoryWhereUniqueInput
    update: XOR<dataSpeciesInventoryUpdateWithoutDataHeaderInput, dataSpeciesInventoryUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<dataSpeciesInventoryCreateWithoutDataHeaderInput, dataSpeciesInventoryUncheckedCreateWithoutDataHeaderInput>
  }

  export type dataSpeciesInventoryUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: dataSpeciesInventoryWhereUniqueInput
    data: XOR<dataSpeciesInventoryUpdateWithoutDataHeaderInput, dataSpeciesInventoryUncheckedUpdateWithoutDataHeaderInput>
  }

  export type dataSpeciesInventoryUpdateManyWithWhereWithoutDataHeaderInput = {
    where: dataSpeciesInventoryScalarWhereInput
    data: XOR<dataSpeciesInventoryUpdateManyMutationInput, dataSpeciesInventoryUncheckedUpdateManyWithoutDataSpeciesInventoryInput>
  }

  export type dataSpeciesInventoryScalarWhereInput = {
    AND?: Enumerable<dataSpeciesInventoryScalarWhereInput>
    OR?: Enumerable<dataSpeciesInventoryScalarWhereInput>
    NOT?: Enumerable<dataSpeciesInventoryScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    Species?: StringNullableFilter | string | null
    DENSITY?: IntNullableFilter | number | null
    LineKey?: StringNullableFilter | string | null
    RecKey?: StringNullableFilter | string | null
    FormType?: StringNullableFilter | string | null
    FormDate?: DateTimeNullableFilter | Date | string | null
    SpecRichMethod?: IntNullableFilter | number | null
    SpecRichMeasure?: IntNullableFilter | number | null
    SpecRichNbrSubPlots?: IntNullableFilter | number | null
    SpecRich1Container?: StringNullableFilter | string | null
    SpecRich1Shape?: IntNullableFilter | number | null
    SpecRich1Dim1?: FloatNullableFilter | number | null
    SpecRich1Dim2?: FloatNullableFilter | number | null
    SpecRich1Area?: FloatNullableFilter | number | null
    SpecRich2Container?: StringNullableFilter | string | null
    SpecRich2Shape?: IntNullableFilter | number | null
    SpecRich2Dim1?: FloatNullableFilter | number | null
    SpecRich2Dim2?: FloatNullableFilter | number | null
    SpecRich2Area?: FloatNullableFilter | number | null
    SpecRich3Container?: StringNullableFilter | string | null
    SpecRich3Shape?: IntNullableFilter | number | null
    SpecRich3Dim1?: FloatNullableFilter | number | null
    SpecRich3Dim2?: FloatNullableFilter | number | null
    SpecRich3Area?: FloatNullableFilter | number | null
    SpecRich4Container?: StringNullableFilter | string | null
    SpecRich4Shape?: IntNullableFilter | number | null
    SpecRich4Dim1?: FloatNullableFilter | number | null
    SpecRich4Dim2?: FloatNullableFilter | number | null
    SpecRich4Area?: FloatNullableFilter | number | null
    SpecRich5Container?: StringNullableFilter | string | null
    SpecRich5Shape?: IntNullableFilter | number | null
    SpecRich5Dim1?: FloatNullableFilter | number | null
    SpecRich5Dim2?: FloatNullableFilter | number | null
    SpecRich5Area?: FloatNullableFilter | number | null
    SpecRich6Container?: StringNullableFilter | string | null
    SpecRich6Shape?: IntNullableFilter | number | null
    SpecRich6Dim1?: FloatNullableFilter | number | null
    SpecRich6Dim2?: FloatNullableFilter | number | null
    SpecRich6Area?: FloatNullableFilter | number | null
    Notes?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type geoIndicatorsUpsertWithoutDataHeaderInput = {
    update: XOR<geoIndicatorsUpdateWithoutDataHeaderInput, geoIndicatorsUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<geoIndicatorsCreateWithoutDataHeaderInput, geoIndicatorsUncheckedCreateWithoutDataHeaderInput>
  }

  export type geoIndicatorsUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type geoIndicatorsUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EcologicalSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    Latitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Longitude_NAD83?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LocationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    Latitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83_Actual?: NullableFloatFieldUpdateOperationsInput | number | null
    BareSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFoliarCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_AnnGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_GrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenForbGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_PerenGrassCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_ShrubCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_CyanobacteriaCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DepSoilCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_DuffCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_EmbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_HerbLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_LichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_MossCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_RockCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_TotalLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_VagrLichenCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WaterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    FH_WoodyLitterCover?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_101_200?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_200_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_50?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_25_plus?: NullableFloatFieldUpdateOperationsInput | number | null
    GapCover_51_100?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Forb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Grass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Herbaceous_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForb_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenForbGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_PerenGrass_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Woody_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    RH_AnnualProd?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BareGround?: NullableStringFieldUpdateOperationsInput | string | null
    RH_BioticIntegrity?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsBI?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsHF?: NullableStringFieldUpdateOperationsInput | string | null
    RH_CommentsSS?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Compaction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_DeadDyingPlantParts?: NullableStringFieldUpdateOperationsInput | string | null
    RH_FuncSructGroup?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Gullies?: NullableStringFieldUpdateOperationsInput | string | null
    RH_HydrologicFunction?: NullableStringFieldUpdateOperationsInput | string | null
    RH_InvasivePlants?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterAmount?: NullableStringFieldUpdateOperationsInput | string | null
    RH_LitterMovement?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PedestalsTerracettes?: NullableStringFieldUpdateOperationsInput | string | null
    RH_PlantCommunityComp?: NullableStringFieldUpdateOperationsInput | string | null
    RH_ReprodCapabilityPeren?: NullableStringFieldUpdateOperationsInput | string | null
    RH_Rills?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSiteStability?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfLossDeg?: NullableStringFieldUpdateOperationsInput | string | null
    RH_SoilSurfResisErosion?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WaterFlowPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    RH_WindScouredAreas?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStability_All?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Protected?: NullableFloatFieldUpdateOperationsInput | number | null
    SoilStability_Unprotected?: NullableFloatFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mlra_name?: NullableStringFieldUpdateOperationsInput | string | null
    mlrarsym?: NullableStringFieldUpdateOperationsInput | string | null
    na_l1name?: NullableStringFieldUpdateOperationsInput | string | null
    na_l2name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l3name?: NullableStringFieldUpdateOperationsInput | string | null
    us_l4name?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    modis_landcover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type geoSpeciesUpsertWithWhereUniqueWithoutDataHeaderInput = {
    where: geoSpeciesWhereUniqueInput
    update: XOR<geoSpeciesUpdateWithoutDataHeaderInput, geoSpeciesUncheckedUpdateWithoutDataHeaderInput>
    create: XOR<geoSpeciesCreateWithoutDataHeaderInput, geoSpeciesUncheckedCreateWithoutDataHeaderInput>
  }

  export type geoSpeciesUpdateWithWhereUniqueWithoutDataHeaderInput = {
    where: geoSpeciesWhereUniqueInput
    data: XOR<geoSpeciesUpdateWithoutDataHeaderInput, geoSpeciesUncheckedUpdateWithoutDataHeaderInput>
  }

  export type geoSpeciesUpdateManyWithWhereWithoutDataHeaderInput = {
    where: geoSpeciesScalarWhereInput
    data: XOR<geoSpeciesUpdateManyMutationInput, geoSpeciesUncheckedUpdateManyWithoutGeoSpeciesInput>
  }

  export type geoSpeciesScalarWhereInput = {
    AND?: Enumerable<geoSpeciesScalarWhereInput>
    OR?: Enumerable<geoSpeciesScalarWhereInput>
    NOT?: Enumerable<geoSpeciesScalarWhereInput>
    rid?: IntFilter | number
    PrimaryKey?: StringNullableFilter | string | null
    DBKey?: StringNullableFilter | string | null
    ProjectKey?: StringNullableFilter | string | null
    Species?: StringNullableFilter | string | null
    AH_SpeciesCover?: FloatNullableFilter | number | null
    AH_SpeciesCover_n?: IntNullableFilter | number | null
    Hgt_Species_Avg?: FloatNullableFilter | number | null
    Hgt_Species_Avg_n?: IntNullableFilter | number | null
    Duration?: StringNullableFilter | string | null
    GrowthHabit?: StringNullableFilter | string | null
    GrowthHabitSub?: StringNullableFilter | string | null
    SpeciesKey?: StringNullableFilter | string | null
    DateLoadedInDb?: DateTimeNullableFilter | Date | string | null
    DateVisited?: DateTimeNullableFilter | Date | string | null
  }

  export type dataHeaderCreateWithoutDataHeightInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutDataHeightInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutDataHeightInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutDataHeightInput, dataHeaderUncheckedCreateWithoutDataHeightInput>
  }

  export type dataHeaderUpsertWithoutDataHeightInput = {
    update: XOR<dataHeaderUpdateWithoutDataHeightInput, dataHeaderUncheckedUpdateWithoutDataHeightInput>
    create: XOR<dataHeaderCreateWithoutDataHeightInput, dataHeaderUncheckedCreateWithoutDataHeightInput>
  }

  export type dataHeaderUpdateWithoutDataHeightInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutDataHeightInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateWithoutDataLPIInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutDataLPIInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutDataLPIInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutDataLPIInput, dataHeaderUncheckedCreateWithoutDataLPIInput>
  }

  export type dataHeaderUpsertWithoutDataLPIInput = {
    update: XOR<dataHeaderUpdateWithoutDataLPIInput, dataHeaderUncheckedUpdateWithoutDataLPIInput>
    create: XOR<dataHeaderCreateWithoutDataLPIInput, dataHeaderUncheckedCreateWithoutDataLPIInput>
  }

  export type dataHeaderUpdateWithoutDataLPIInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutDataLPIInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateWithoutDataSoilStabilityInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutDataSoilStabilityInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutDataSoilStabilityInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutDataSoilStabilityInput, dataHeaderUncheckedCreateWithoutDataSoilStabilityInput>
  }

  export type dataHeaderUpsertWithoutDataSoilStabilityInput = {
    update: XOR<dataHeaderUpdateWithoutDataSoilStabilityInput, dataHeaderUncheckedUpdateWithoutDataSoilStabilityInput>
    create: XOR<dataHeaderCreateWithoutDataSoilStabilityInput, dataHeaderUncheckedCreateWithoutDataSoilStabilityInput>
  }

  export type dataHeaderUpdateWithoutDataSoilStabilityInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutDataSoilStabilityInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateWithoutDataSpeciesInventoryInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutDataSpeciesInventoryInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutDataSpeciesInventoryInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedCreateWithoutDataSpeciesInventoryInput>
  }

  export type dataHeaderUpsertWithoutDataSpeciesInventoryInput = {
    update: XOR<dataHeaderUpdateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedUpdateWithoutDataSpeciesInventoryInput>
    create: XOR<dataHeaderCreateWithoutDataSpeciesInventoryInput, dataHeaderUncheckedCreateWithoutDataSpeciesInventoryInput>
  }

  export type dataHeaderUpdateWithoutDataSpeciesInventoryInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutDataSpeciesInventoryInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateWithoutGeoIndicatorsInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoSpecies?: geoSpeciesCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutGeoIndicatorsInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoSpecies?: geoSpeciesUncheckedCreateNestedManyWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutGeoIndicatorsInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutGeoIndicatorsInput, dataHeaderUncheckedCreateWithoutGeoIndicatorsInput>
  }

  export type dataHeaderUpsertWithoutGeoIndicatorsInput = {
    update: XOR<dataHeaderUpdateWithoutGeoIndicatorsInput, dataHeaderUncheckedUpdateWithoutGeoIndicatorsInput>
    create: XOR<dataHeaderCreateWithoutGeoIndicatorsInput, dataHeaderUncheckedCreateWithoutGeoIndicatorsInput>
  }

  export type dataHeaderUpdateWithoutGeoIndicatorsInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutGeoIndicatorsInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoSpecies?: geoSpeciesUncheckedUpdateManyWithoutDataHeaderNestedInput
  }

  export type dataHeaderCreateWithoutGeoSpeciesInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPICreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsCreateNestedOneWithoutDataHeaderInput
  }

  export type dataHeaderUncheckedCreateWithoutGeoSpeciesInput = {
    PrimaryKey: string
    DBKey?: string | null
    ProjectKey?: string | null
    DateVisited?: Date | string | null
    Latitude_NAD83?: number | null
    Longitude_NAD83?: number | null
    LocationType?: string | null
    EcologicalSiteID?: string | null
    PercentCoveredByEcoSite?: number | null
    SpeciesKey?: string | null
    PlotID?: string | null
    DateLoadedInDb?: Date | string | null
    source?: string | null
    rid?: number
    dataGap?: dataGapUncheckedCreateNestedManyWithoutDataHeaderInput
    dataHeight?: dataHeightUncheckedCreateNestedManyWithoutDataHeaderInput
    dataLPI?: dataLPIUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSoilStability?: dataSoilStabilityUncheckedCreateNestedManyWithoutDataHeaderInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedCreateNestedManyWithoutDataHeaderInput
    geoIndicators?: geoIndicatorsUncheckedCreateNestedOneWithoutDataHeaderInput
  }

  export type dataHeaderCreateOrConnectWithoutGeoSpeciesInput = {
    where: dataHeaderWhereUniqueInput
    create: XOR<dataHeaderCreateWithoutGeoSpeciesInput, dataHeaderUncheckedCreateWithoutGeoSpeciesInput>
  }

  export type dataHeaderUpsertWithoutGeoSpeciesInput = {
    update: XOR<dataHeaderUpdateWithoutGeoSpeciesInput, dataHeaderUncheckedUpdateWithoutGeoSpeciesInput>
    create: XOR<dataHeaderCreateWithoutGeoSpeciesInput, dataHeaderUncheckedCreateWithoutGeoSpeciesInput>
  }

  export type dataHeaderUpdateWithoutGeoSpeciesInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    dataGap?: dataGapUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUpdateOneWithoutDataHeaderNestedInput
  }

  export type dataHeaderUncheckedUpdateWithoutGeoSpeciesInput = {
    PrimaryKey?: StringFieldUpdateOperationsInput | string
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Latitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    Longitude_NAD83?: NullableFloatFieldUpdateOperationsInput | number | null
    LocationType?: NullableStringFieldUpdateOperationsInput | string | null
    EcologicalSiteID?: NullableStringFieldUpdateOperationsInput | string | null
    PercentCoveredByEcoSite?: NullableFloatFieldUpdateOperationsInput | number | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    PlotID?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
    dataGap?: dataGapUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataHeight?: dataHeightUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataLPI?: dataLPIUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSoilStability?: dataSoilStabilityUncheckedUpdateManyWithoutDataHeaderNestedInput
    dataSpeciesInventory?: dataSpeciesInventoryUncheckedUpdateManyWithoutDataHeaderNestedInput
    geoIndicators?: geoIndicatorsUncheckedUpdateOneWithoutDataHeaderNestedInput
  }

  export type dataGapCreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    RecType?: string | null
    SeqNo?: number | null
    GapStart?: number | null
    GapEnd?: number | null
    Gap?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormDate?: Date | string | null
    DateModified?: Date | string | null
    FormType?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    GapMin?: number | null
    GapData?: number | null
    PerennialsCanopy?: string | null
    AnnualGrassesCanopy?: string | null
    AnnualForbsCanopy?: string | null
    OtherCanopy?: string | null
    Notes?: string | null
    NoCanopyGaps?: number | null
    NoBasalGaps?: number | null
    DateLoadedInDb?: Date | string | null
    PerennialsBasal?: string | null
    AnnualGrassesBasal?: string | null
    AnnualForbsBasal?: string | null
    OtherBasal?: string | null
    source?: string | null
    DateVisited?: Date | string | null
  }

  export type dataHeightCreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    RecKey?: string | null
    Height?: number | null
    Species?: string | null
    Chkbox?: string | null
    type?: string | null
    GrowthHabit_measured?: string | null
    LineKey?: string | null
    DateModified?: Date | string | null
    FormType?: string | null
    FormDate?: Date | string | null
    source?: string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: Decimal | DecimalJsLike | number | string | null
    SpacingType?: string | null
    HeightOption?: string | null
    HeightUOM?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataLPICreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    LineKey?: string | null
    RecKey?: string | null
    layer?: string | null
    code?: string | null
    chckbox?: string | null
    ShrubShape?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    Direction?: string | null
    Measure?: number | null
    LineLengthAmount?: number | null
    SpacingIntervalAmount?: number | null
    SpacingType?: string | null
    ShowCheckbox?: string | null
    CheckboxLabel?: string | null
    PointLoc?: number | null
    PointNbr?: number | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSoilStabilityCreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    LineKey?: string | null
    SoilStabSubSurface?: number | null
    Line?: string | null
    Position?: number | null
    Pos?: string | null
    Veg?: string | null
    Rating?: number | null
    Hydro?: string | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataSpeciesInventoryCreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    DENSITY?: number | null
    LineKey?: string | null
    RecKey?: string | null
    FormType?: string | null
    FormDate?: Date | string | null
    SpecRichMethod?: number | null
    SpecRichMeasure?: number | null
    SpecRichNbrSubPlots?: number | null
    SpecRich1Container?: string | null
    SpecRich1Shape?: number | null
    SpecRich1Dim1?: number | null
    SpecRich1Dim2?: number | null
    SpecRich1Area?: number | null
    SpecRich2Container?: string | null
    SpecRich2Shape?: number | null
    SpecRich2Dim1?: number | null
    SpecRich2Dim2?: number | null
    SpecRich2Area?: number | null
    SpecRich3Container?: string | null
    SpecRich3Shape?: number | null
    SpecRich3Dim1?: number | null
    SpecRich3Dim2?: number | null
    SpecRich3Area?: number | null
    SpecRich4Container?: string | null
    SpecRich4Shape?: number | null
    SpecRich4Dim1?: number | null
    SpecRich4Dim2?: number | null
    SpecRich4Area?: number | null
    SpecRich5Container?: string | null
    SpecRich5Shape?: number | null
    SpecRich5Dim1?: number | null
    SpecRich5Dim2?: number | null
    SpecRich5Area?: number | null
    SpecRich6Container?: string | null
    SpecRich6Shape?: number | null
    SpecRich6Dim1?: number | null
    SpecRich6Dim2?: number | null
    SpecRich6Area?: number | null
    Notes?: string | null
    source?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type geoSpeciesCreateManyDataHeaderInput = {
    rid?: number
    DBKey?: string | null
    ProjectKey?: string | null
    Species?: string | null
    AH_SpeciesCover?: number | null
    AH_SpeciesCover_n?: number | null
    Hgt_Species_Avg?: number | null
    Hgt_Species_Avg_n?: number | null
    Duration?: string | null
    GrowthHabit?: string | null
    GrowthHabitSub?: string | null
    SpeciesKey?: string | null
    DateLoadedInDb?: Date | string | null
    DateVisited?: Date | string | null
  }

  export type dataGapUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataGapUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataGapUncheckedUpdateManyWithoutDataGapInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecType?: NullableStringFieldUpdateOperationsInput | string | null
    SeqNo?: NullableIntFieldUpdateOperationsInput | number | null
    GapStart?: NullableFloatFieldUpdateOperationsInput | number | null
    GapEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    Gap?: NullableFloatFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    GapMin?: NullableFloatFieldUpdateOperationsInput | number | null
    GapData?: NullableIntFieldUpdateOperationsInput | number | null
    PerennialsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    OtherCanopy?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    NoCanopyGaps?: NullableIntFieldUpdateOperationsInput | number | null
    NoBasalGaps?: NullableIntFieldUpdateOperationsInput | number | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PerennialsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualGrassesBasal?: NullableStringFieldUpdateOperationsInput | string | null
    AnnualForbsBasal?: NullableStringFieldUpdateOperationsInput | string | null
    OtherBasal?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeightUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeightUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataHeightUncheckedUpdateManyWithoutDataHeightInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    Height?: NullableFloatFieldUpdateOperationsInput | number | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    Chkbox?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit_measured?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    HeightOption?: NullableStringFieldUpdateOperationsInput | string | null
    HeightUOM?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPIUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPIUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataLPIUncheckedUpdateManyWithoutDataLPIInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    chckbox?: NullableStringFieldUpdateOperationsInput | string | null
    ShrubShape?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Direction?: NullableStringFieldUpdateOperationsInput | string | null
    Measure?: NullableIntFieldUpdateOperationsInput | number | null
    LineLengthAmount?: NullableIntFieldUpdateOperationsInput | number | null
    SpacingIntervalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    SpacingType?: NullableStringFieldUpdateOperationsInput | string | null
    ShowCheckbox?: NullableStringFieldUpdateOperationsInput | string | null
    CheckboxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    PointLoc?: NullableFloatFieldUpdateOperationsInput | number | null
    PointNbr?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSoilStabilityUncheckedUpdateManyWithoutDataSoilStabilityInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    SoilStabSubSurface?: NullableIntFieldUpdateOperationsInput | number | null
    Line?: NullableStringFieldUpdateOperationsInput | string | null
    Position?: NullableIntFieldUpdateOperationsInput | number | null
    Pos?: NullableStringFieldUpdateOperationsInput | string | null
    Veg?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Hydro?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dataSpeciesInventoryUncheckedUpdateManyWithoutDataSpeciesInventoryInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    DENSITY?: NullableIntFieldUpdateOperationsInput | number | null
    LineKey?: NullableStringFieldUpdateOperationsInput | string | null
    RecKey?: NullableStringFieldUpdateOperationsInput | string | null
    FormType?: NullableStringFieldUpdateOperationsInput | string | null
    FormDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecRichMethod?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichMeasure?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRichNbrSubPlots?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich1Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich1Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich1Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich2Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich2Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich2Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich3Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich3Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich3Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich4Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich4Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich4Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich5Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich5Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich5Area?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Container?: NullableStringFieldUpdateOperationsInput | string | null
    SpecRich6Shape?: NullableIntFieldUpdateOperationsInput | number | null
    SpecRich6Dim1?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Dim2?: NullableFloatFieldUpdateOperationsInput | number | null
    SpecRich6Area?: NullableFloatFieldUpdateOperationsInput | number | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoSpeciesUpdateWithoutDataHeaderInput = {
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoSpeciesUncheckedUpdateWithoutDataHeaderInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type geoSpeciesUncheckedUpdateManyWithoutGeoSpeciesInput = {
    rid?: IntFieldUpdateOperationsInput | number
    DBKey?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    Species?: NullableStringFieldUpdateOperationsInput | string | null
    AH_SpeciesCover?: NullableFloatFieldUpdateOperationsInput | number | null
    AH_SpeciesCover_n?: NullableIntFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg?: NullableFloatFieldUpdateOperationsInput | number | null
    Hgt_Species_Avg_n?: NullableIntFieldUpdateOperationsInput | number | null
    Duration?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    GrowthHabitSub?: NullableStringFieldUpdateOperationsInput | string | null
    SpeciesKey?: NullableStringFieldUpdateOperationsInput | string | null
    DateLoadedInDb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateVisited?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}