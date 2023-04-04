
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
 * Model aero_runs
 * 
 */
export type aero_runs = {
  parameter_set: number | null
  likelihood: number | null
  horizontal_flux_total: number | null
  vertical_flux: number | null
  PM1: number | null
  PM2_5: number | null
  PM10: number | null
  PrimaryKey: string | null
  rid: number
}

/**
 * Model aero_summary
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type aero_summary = {
  PrimaryKey: string | null
  horizontal_flux_total_LPI: number | null
  horizontal_flux_total_UPI: number | null
  horizontal_flux_total_MD: number | null
  horizontal_flux_total_MN: number | null
  horizontal_flux_total_STD: number | null
  vertical_flux_LPI: number | null
  vertical_flux_UPI: number | null
  vertical_flux_MD: number | null
  vertical_flux_MN: number | null
  vertical_flux_STD: number | null
  PM1_LPI: number | null
  PM1_UPI: number | null
  PM1_MD: number | null
  PM1_MN: number | null
  PM1_STD: number | null
  PM2_5_LPI: number | null
  PM2_5_UPI: number | null
  PM2_5_MD: number | null
  PM2_5_MN: number | null
  PM2_5_STD: number | null
  PM10_LPI: number | null
  PM10_UPI: number | null
  PM10_MD: number | null
  PM10_MN: number | null
  PM10_STD: number | null
  rid: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Aero_runs
 * const aero_runs = await prisma.aero_runs.findMany()
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
   * // Fetch zero or more Aero_runs
   * const aero_runs = await prisma.aero_runs.findMany()
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
   * `prisma.aero_runs`: Exposes CRUD operations for the **aero_runs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aero_runs
    * const aero_runs = await prisma.aero_runs.findMany()
    * ```
    */
  get aero_runs(): Prisma.aero_runsDelegate<GlobalReject>;

  /**
   * `prisma.aero_summary`: Exposes CRUD operations for the **aero_summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aero_summaries
    * const aero_summaries = await prisma.aero_summary.findMany()
    * ```
    */
  get aero_summary(): Prisma.aero_summaryDelegate<GlobalReject>;
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
    aero_runs: 'aero_runs',
    aero_summary: 'aero_summary'
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
   * Models
   */

  /**
   * Model aero_runs
   */


  export type AggregateAero_runs = {
    _count: Aero_runsCountAggregateOutputType | null
    _avg: Aero_runsAvgAggregateOutputType | null
    _sum: Aero_runsSumAggregateOutputType | null
    _min: Aero_runsMinAggregateOutputType | null
    _max: Aero_runsMaxAggregateOutputType | null
  }

  export type Aero_runsAvgAggregateOutputType = {
    parameter_set: number | null
    likelihood: number | null
    horizontal_flux_total: number | null
    vertical_flux: number | null
    PM1: number | null
    PM2_5: number | null
    PM10: number | null
    rid: number | null
  }

  export type Aero_runsSumAggregateOutputType = {
    parameter_set: number | null
    likelihood: number | null
    horizontal_flux_total: number | null
    vertical_flux: number | null
    PM1: number | null
    PM2_5: number | null
    PM10: number | null
    rid: number | null
  }

  export type Aero_runsMinAggregateOutputType = {
    parameter_set: number | null
    likelihood: number | null
    horizontal_flux_total: number | null
    vertical_flux: number | null
    PM1: number | null
    PM2_5: number | null
    PM10: number | null
    PrimaryKey: string | null
    rid: number | null
  }

  export type Aero_runsMaxAggregateOutputType = {
    parameter_set: number | null
    likelihood: number | null
    horizontal_flux_total: number | null
    vertical_flux: number | null
    PM1: number | null
    PM2_5: number | null
    PM10: number | null
    PrimaryKey: string | null
    rid: number | null
  }

  export type Aero_runsCountAggregateOutputType = {
    parameter_set: number
    likelihood: number
    horizontal_flux_total: number
    vertical_flux: number
    PM1: number
    PM2_5: number
    PM10: number
    PrimaryKey: number
    rid: number
    _all: number
  }


  export type Aero_runsAvgAggregateInputType = {
    parameter_set?: true
    likelihood?: true
    horizontal_flux_total?: true
    vertical_flux?: true
    PM1?: true
    PM2_5?: true
    PM10?: true
    rid?: true
  }

  export type Aero_runsSumAggregateInputType = {
    parameter_set?: true
    likelihood?: true
    horizontal_flux_total?: true
    vertical_flux?: true
    PM1?: true
    PM2_5?: true
    PM10?: true
    rid?: true
  }

  export type Aero_runsMinAggregateInputType = {
    parameter_set?: true
    likelihood?: true
    horizontal_flux_total?: true
    vertical_flux?: true
    PM1?: true
    PM2_5?: true
    PM10?: true
    PrimaryKey?: true
    rid?: true
  }

  export type Aero_runsMaxAggregateInputType = {
    parameter_set?: true
    likelihood?: true
    horizontal_flux_total?: true
    vertical_flux?: true
    PM1?: true
    PM2_5?: true
    PM10?: true
    PrimaryKey?: true
    rid?: true
  }

  export type Aero_runsCountAggregateInputType = {
    parameter_set?: true
    likelihood?: true
    horizontal_flux_total?: true
    vertical_flux?: true
    PM1?: true
    PM2_5?: true
    PM10?: true
    PrimaryKey?: true
    rid?: true
    _all?: true
  }

  export type Aero_runsAggregateArgs = {
    /**
     * Filter which aero_runs to aggregate.
     */
    where?: aero_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_runs to fetch.
     */
    orderBy?: Enumerable<aero_runsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aero_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aero_runs
    **/
    _count?: true | Aero_runsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Aero_runsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Aero_runsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aero_runsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aero_runsMaxAggregateInputType
  }

  export type GetAero_runsAggregateType<T extends Aero_runsAggregateArgs> = {
        [P in keyof T & keyof AggregateAero_runs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAero_runs[P]>
      : GetScalarType<T[P], AggregateAero_runs[P]>
  }




  export type Aero_runsGroupByArgs = {
    where?: aero_runsWhereInput
    orderBy?: Enumerable<aero_runsOrderByWithAggregationInput>
    by: Aero_runsScalarFieldEnum[]
    having?: aero_runsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aero_runsCountAggregateInputType | true
    _avg?: Aero_runsAvgAggregateInputType
    _sum?: Aero_runsSumAggregateInputType
    _min?: Aero_runsMinAggregateInputType
    _max?: Aero_runsMaxAggregateInputType
  }


  export type Aero_runsGroupByOutputType = {
    parameter_set: number | null
    likelihood: number | null
    horizontal_flux_total: number | null
    vertical_flux: number | null
    PM1: number | null
    PM2_5: number | null
    PM10: number | null
    PrimaryKey: string | null
    rid: number
    _count: Aero_runsCountAggregateOutputType | null
    _avg: Aero_runsAvgAggregateOutputType | null
    _sum: Aero_runsSumAggregateOutputType | null
    _min: Aero_runsMinAggregateOutputType | null
    _max: Aero_runsMaxAggregateOutputType | null
  }

  type GetAero_runsGroupByPayload<T extends Aero_runsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Aero_runsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aero_runsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aero_runsGroupByOutputType[P]>
            : GetScalarType<T[P], Aero_runsGroupByOutputType[P]>
        }
      >
    >


  export type aero_runsSelect = {
    parameter_set?: boolean
    likelihood?: boolean
    horizontal_flux_total?: boolean
    vertical_flux?: boolean
    PM1?: boolean
    PM2_5?: boolean
    PM10?: boolean
    PrimaryKey?: boolean
    rid?: boolean
  }


  export type aero_runsGetPayload<S extends boolean | null | undefined | aero_runsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aero_runs :
    S extends undefined ? never :
    S extends { include: any } & (aero_runsArgs | aero_runsFindManyArgs)
    ? aero_runs 
    : S extends { select: any } & (aero_runsArgs | aero_runsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof aero_runs ? aero_runs[P] : never
  } 
      : aero_runs


  type aero_runsCountArgs = 
    Omit<aero_runsFindManyArgs, 'select' | 'include'> & {
      select?: Aero_runsCountAggregateInputType | true
    }

  export interface aero_runsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Aero_runs that matches the filter.
     * @param {aero_runsFindUniqueArgs} args - Arguments to find a Aero_runs
     * @example
     * // Get one Aero_runs
     * const aero_runs = await prisma.aero_runs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aero_runsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, aero_runsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aero_runs'> extends True ? Prisma__aero_runsClient<aero_runsGetPayload<T>> : Prisma__aero_runsClient<aero_runsGetPayload<T> | null, null>

    /**
     * Find one Aero_runs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aero_runsFindUniqueOrThrowArgs} args - Arguments to find a Aero_runs
     * @example
     * // Get one Aero_runs
     * const aero_runs = await prisma.aero_runs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aero_runsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, aero_runsFindUniqueOrThrowArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Find the first Aero_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_runsFindFirstArgs} args - Arguments to find a Aero_runs
     * @example
     * // Get one Aero_runs
     * const aero_runs = await prisma.aero_runs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aero_runsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, aero_runsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aero_runs'> extends True ? Prisma__aero_runsClient<aero_runsGetPayload<T>> : Prisma__aero_runsClient<aero_runsGetPayload<T> | null, null>

    /**
     * Find the first Aero_runs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_runsFindFirstOrThrowArgs} args - Arguments to find a Aero_runs
     * @example
     * // Get one Aero_runs
     * const aero_runs = await prisma.aero_runs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aero_runsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, aero_runsFindFirstOrThrowArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Find zero or more Aero_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_runsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aero_runs
     * const aero_runs = await prisma.aero_runs.findMany()
     * 
     * // Get first 10 Aero_runs
     * const aero_runs = await prisma.aero_runs.findMany({ take: 10 })
     * 
     * // Only select the `parameter_set`
     * const aero_runsWithParameter_setOnly = await prisma.aero_runs.findMany({ select: { parameter_set: true } })
     * 
    **/
    findMany<T extends aero_runsFindManyArgs>(
      args?: SelectSubset<T, aero_runsFindManyArgs>
    ): Prisma.PrismaPromise<Array<aero_runsGetPayload<T>>>

    /**
     * Create a Aero_runs.
     * @param {aero_runsCreateArgs} args - Arguments to create a Aero_runs.
     * @example
     * // Create one Aero_runs
     * const Aero_runs = await prisma.aero_runs.create({
     *   data: {
     *     // ... data to create a Aero_runs
     *   }
     * })
     * 
    **/
    create<T extends aero_runsCreateArgs>(
      args: SelectSubset<T, aero_runsCreateArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Create many Aero_runs.
     *     @param {aero_runsCreateManyArgs} args - Arguments to create many Aero_runs.
     *     @example
     *     // Create many Aero_runs
     *     const aero_runs = await prisma.aero_runs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aero_runsCreateManyArgs>(
      args?: SelectSubset<T, aero_runsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aero_runs.
     * @param {aero_runsDeleteArgs} args - Arguments to delete one Aero_runs.
     * @example
     * // Delete one Aero_runs
     * const Aero_runs = await prisma.aero_runs.delete({
     *   where: {
     *     // ... filter to delete one Aero_runs
     *   }
     * })
     * 
    **/
    delete<T extends aero_runsDeleteArgs>(
      args: SelectSubset<T, aero_runsDeleteArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Update one Aero_runs.
     * @param {aero_runsUpdateArgs} args - Arguments to update one Aero_runs.
     * @example
     * // Update one Aero_runs
     * const aero_runs = await prisma.aero_runs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aero_runsUpdateArgs>(
      args: SelectSubset<T, aero_runsUpdateArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Delete zero or more Aero_runs.
     * @param {aero_runsDeleteManyArgs} args - Arguments to filter Aero_runs to delete.
     * @example
     * // Delete a few Aero_runs
     * const { count } = await prisma.aero_runs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aero_runsDeleteManyArgs>(
      args?: SelectSubset<T, aero_runsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aero_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_runsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aero_runs
     * const aero_runs = await prisma.aero_runs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aero_runsUpdateManyArgs>(
      args: SelectSubset<T, aero_runsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aero_runs.
     * @param {aero_runsUpsertArgs} args - Arguments to update or create a Aero_runs.
     * @example
     * // Update or create a Aero_runs
     * const aero_runs = await prisma.aero_runs.upsert({
     *   create: {
     *     // ... data to create a Aero_runs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aero_runs we want to update
     *   }
     * })
    **/
    upsert<T extends aero_runsUpsertArgs>(
      args: SelectSubset<T, aero_runsUpsertArgs>
    ): Prisma__aero_runsClient<aero_runsGetPayload<T>>

    /**
     * Count the number of Aero_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_runsCountArgs} args - Arguments to filter Aero_runs to count.
     * @example
     * // Count the number of Aero_runs
     * const count = await prisma.aero_runs.count({
     *   where: {
     *     // ... the filter for the Aero_runs we want to count
     *   }
     * })
    **/
    count<T extends aero_runsCountArgs>(
      args?: Subset<T, aero_runsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aero_runsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aero_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aero_runsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aero_runsAggregateArgs>(args: Subset<T, Aero_runsAggregateArgs>): Prisma.PrismaPromise<GetAero_runsAggregateType<T>>

    /**
     * Group by Aero_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aero_runsGroupByArgs} args - Group by arguments.
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
      T extends Aero_runsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Aero_runsGroupByArgs['orderBy'] }
        : { orderBy?: Aero_runsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Aero_runsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAero_runsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aero_runs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__aero_runsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * aero_runs base type for findUnique actions
   */
  export type aero_runsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter, which aero_runs to fetch.
     */
    where: aero_runsWhereUniqueInput
  }

  /**
   * aero_runs findUnique
   */
  export interface aero_runsFindUniqueArgs extends aero_runsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aero_runs findUniqueOrThrow
   */
  export type aero_runsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter, which aero_runs to fetch.
     */
    where: aero_runsWhereUniqueInput
  }


  /**
   * aero_runs base type for findFirst actions
   */
  export type aero_runsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter, which aero_runs to fetch.
     */
    where?: aero_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_runs to fetch.
     */
    orderBy?: Enumerable<aero_runsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aero_runs.
     */
    cursor?: aero_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aero_runs.
     */
    distinct?: Enumerable<Aero_runsScalarFieldEnum>
  }

  /**
   * aero_runs findFirst
   */
  export interface aero_runsFindFirstArgs extends aero_runsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aero_runs findFirstOrThrow
   */
  export type aero_runsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter, which aero_runs to fetch.
     */
    where?: aero_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_runs to fetch.
     */
    orderBy?: Enumerable<aero_runsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aero_runs.
     */
    cursor?: aero_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aero_runs.
     */
    distinct?: Enumerable<Aero_runsScalarFieldEnum>
  }


  /**
   * aero_runs findMany
   */
  export type aero_runsFindManyArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter, which aero_runs to fetch.
     */
    where?: aero_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_runs to fetch.
     */
    orderBy?: Enumerable<aero_runsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aero_runs.
     */
    cursor?: aero_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_runs.
     */
    skip?: number
    distinct?: Enumerable<Aero_runsScalarFieldEnum>
  }


  /**
   * aero_runs create
   */
  export type aero_runsCreateArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * The data needed to create a aero_runs.
     */
    data: XOR<aero_runsCreateInput, aero_runsUncheckedCreateInput>
  }


  /**
   * aero_runs createMany
   */
  export type aero_runsCreateManyArgs = {
    /**
     * The data used to create many aero_runs.
     */
    data: Enumerable<aero_runsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * aero_runs update
   */
  export type aero_runsUpdateArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * The data needed to update a aero_runs.
     */
    data: XOR<aero_runsUpdateInput, aero_runsUncheckedUpdateInput>
    /**
     * Choose, which aero_runs to update.
     */
    where: aero_runsWhereUniqueInput
  }


  /**
   * aero_runs updateMany
   */
  export type aero_runsUpdateManyArgs = {
    /**
     * The data used to update aero_runs.
     */
    data: XOR<aero_runsUpdateManyMutationInput, aero_runsUncheckedUpdateManyInput>
    /**
     * Filter which aero_runs to update
     */
    where?: aero_runsWhereInput
  }


  /**
   * aero_runs upsert
   */
  export type aero_runsUpsertArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * The filter to search for the aero_runs to update in case it exists.
     */
    where: aero_runsWhereUniqueInput
    /**
     * In case the aero_runs found by the `where` argument doesn't exist, create a new aero_runs with this data.
     */
    create: XOR<aero_runsCreateInput, aero_runsUncheckedCreateInput>
    /**
     * In case the aero_runs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aero_runsUpdateInput, aero_runsUncheckedUpdateInput>
  }


  /**
   * aero_runs delete
   */
  export type aero_runsDeleteArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
    /**
     * Filter which aero_runs to delete.
     */
    where: aero_runsWhereUniqueInput
  }


  /**
   * aero_runs deleteMany
   */
  export type aero_runsDeleteManyArgs = {
    /**
     * Filter which aero_runs to delete
     */
    where?: aero_runsWhereInput
  }


  /**
   * aero_runs without action
   */
  export type aero_runsArgs = {
    /**
     * Select specific fields to fetch from the aero_runs
     */
    select?: aero_runsSelect | null
  }



  /**
   * Model aero_summary
   */


  export type AggregateAero_summary = {
    _count: Aero_summaryCountAggregateOutputType | null
    _avg: Aero_summaryAvgAggregateOutputType | null
    _sum: Aero_summarySumAggregateOutputType | null
    _min: Aero_summaryMinAggregateOutputType | null
    _max: Aero_summaryMaxAggregateOutputType | null
  }

  export type Aero_summaryAvgAggregateOutputType = {
    horizontal_flux_total_LPI: number | null
    horizontal_flux_total_UPI: number | null
    horizontal_flux_total_MD: number | null
    horizontal_flux_total_MN: number | null
    horizontal_flux_total_STD: number | null
    vertical_flux_LPI: number | null
    vertical_flux_UPI: number | null
    vertical_flux_MD: number | null
    vertical_flux_MN: number | null
    vertical_flux_STD: number | null
    PM1_LPI: number | null
    PM1_UPI: number | null
    PM1_MD: number | null
    PM1_MN: number | null
    PM1_STD: number | null
    PM2_5_LPI: number | null
    PM2_5_UPI: number | null
    PM2_5_MD: number | null
    PM2_5_MN: number | null
    PM2_5_STD: number | null
    PM10_LPI: number | null
    PM10_UPI: number | null
    PM10_MD: number | null
    PM10_MN: number | null
    PM10_STD: number | null
    rid: number | null
  }

  export type Aero_summarySumAggregateOutputType = {
    horizontal_flux_total_LPI: number | null
    horizontal_flux_total_UPI: number | null
    horizontal_flux_total_MD: number | null
    horizontal_flux_total_MN: number | null
    horizontal_flux_total_STD: number | null
    vertical_flux_LPI: number | null
    vertical_flux_UPI: number | null
    vertical_flux_MD: number | null
    vertical_flux_MN: number | null
    vertical_flux_STD: number | null
    PM1_LPI: number | null
    PM1_UPI: number | null
    PM1_MD: number | null
    PM1_MN: number | null
    PM1_STD: number | null
    PM2_5_LPI: number | null
    PM2_5_UPI: number | null
    PM2_5_MD: number | null
    PM2_5_MN: number | null
    PM2_5_STD: number | null
    PM10_LPI: number | null
    PM10_UPI: number | null
    PM10_MD: number | null
    PM10_MN: number | null
    PM10_STD: number | null
    rid: number | null
  }

  export type Aero_summaryMinAggregateOutputType = {
    PrimaryKey: string | null
    horizontal_flux_total_LPI: number | null
    horizontal_flux_total_UPI: number | null
    horizontal_flux_total_MD: number | null
    horizontal_flux_total_MN: number | null
    horizontal_flux_total_STD: number | null
    vertical_flux_LPI: number | null
    vertical_flux_UPI: number | null
    vertical_flux_MD: number | null
    vertical_flux_MN: number | null
    vertical_flux_STD: number | null
    PM1_LPI: number | null
    PM1_UPI: number | null
    PM1_MD: number | null
    PM1_MN: number | null
    PM1_STD: number | null
    PM2_5_LPI: number | null
    PM2_5_UPI: number | null
    PM2_5_MD: number | null
    PM2_5_MN: number | null
    PM2_5_STD: number | null
    PM10_LPI: number | null
    PM10_UPI: number | null
    PM10_MD: number | null
    PM10_MN: number | null
    PM10_STD: number | null
    rid: number | null
  }

  export type Aero_summaryMaxAggregateOutputType = {
    PrimaryKey: string | null
    horizontal_flux_total_LPI: number | null
    horizontal_flux_total_UPI: number | null
    horizontal_flux_total_MD: number | null
    horizontal_flux_total_MN: number | null
    horizontal_flux_total_STD: number | null
    vertical_flux_LPI: number | null
    vertical_flux_UPI: number | null
    vertical_flux_MD: number | null
    vertical_flux_MN: number | null
    vertical_flux_STD: number | null
    PM1_LPI: number | null
    PM1_UPI: number | null
    PM1_MD: number | null
    PM1_MN: number | null
    PM1_STD: number | null
    PM2_5_LPI: number | null
    PM2_5_UPI: number | null
    PM2_5_MD: number | null
    PM2_5_MN: number | null
    PM2_5_STD: number | null
    PM10_LPI: number | null
    PM10_UPI: number | null
    PM10_MD: number | null
    PM10_MN: number | null
    PM10_STD: number | null
    rid: number | null
  }

  export type Aero_summaryCountAggregateOutputType = {
    PrimaryKey: number
    horizontal_flux_total_LPI: number
    horizontal_flux_total_UPI: number
    horizontal_flux_total_MD: number
    horizontal_flux_total_MN: number
    horizontal_flux_total_STD: number
    vertical_flux_LPI: number
    vertical_flux_UPI: number
    vertical_flux_MD: number
    vertical_flux_MN: number
    vertical_flux_STD: number
    PM1_LPI: number
    PM1_UPI: number
    PM1_MD: number
    PM1_MN: number
    PM1_STD: number
    PM2_5_LPI: number
    PM2_5_UPI: number
    PM2_5_MD: number
    PM2_5_MN: number
    PM2_5_STD: number
    PM10_LPI: number
    PM10_UPI: number
    PM10_MD: number
    PM10_MN: number
    PM10_STD: number
    rid: number
    _all: number
  }


  export type Aero_summaryAvgAggregateInputType = {
    horizontal_flux_total_LPI?: true
    horizontal_flux_total_UPI?: true
    horizontal_flux_total_MD?: true
    horizontal_flux_total_MN?: true
    horizontal_flux_total_STD?: true
    vertical_flux_LPI?: true
    vertical_flux_UPI?: true
    vertical_flux_MD?: true
    vertical_flux_MN?: true
    vertical_flux_STD?: true
    PM1_LPI?: true
    PM1_UPI?: true
    PM1_MD?: true
    PM1_MN?: true
    PM1_STD?: true
    PM2_5_LPI?: true
    PM2_5_UPI?: true
    PM2_5_MD?: true
    PM2_5_MN?: true
    PM2_5_STD?: true
    PM10_LPI?: true
    PM10_UPI?: true
    PM10_MD?: true
    PM10_MN?: true
    PM10_STD?: true
    rid?: true
  }

  export type Aero_summarySumAggregateInputType = {
    horizontal_flux_total_LPI?: true
    horizontal_flux_total_UPI?: true
    horizontal_flux_total_MD?: true
    horizontal_flux_total_MN?: true
    horizontal_flux_total_STD?: true
    vertical_flux_LPI?: true
    vertical_flux_UPI?: true
    vertical_flux_MD?: true
    vertical_flux_MN?: true
    vertical_flux_STD?: true
    PM1_LPI?: true
    PM1_UPI?: true
    PM1_MD?: true
    PM1_MN?: true
    PM1_STD?: true
    PM2_5_LPI?: true
    PM2_5_UPI?: true
    PM2_5_MD?: true
    PM2_5_MN?: true
    PM2_5_STD?: true
    PM10_LPI?: true
    PM10_UPI?: true
    PM10_MD?: true
    PM10_MN?: true
    PM10_STD?: true
    rid?: true
  }

  export type Aero_summaryMinAggregateInputType = {
    PrimaryKey?: true
    horizontal_flux_total_LPI?: true
    horizontal_flux_total_UPI?: true
    horizontal_flux_total_MD?: true
    horizontal_flux_total_MN?: true
    horizontal_flux_total_STD?: true
    vertical_flux_LPI?: true
    vertical_flux_UPI?: true
    vertical_flux_MD?: true
    vertical_flux_MN?: true
    vertical_flux_STD?: true
    PM1_LPI?: true
    PM1_UPI?: true
    PM1_MD?: true
    PM1_MN?: true
    PM1_STD?: true
    PM2_5_LPI?: true
    PM2_5_UPI?: true
    PM2_5_MD?: true
    PM2_5_MN?: true
    PM2_5_STD?: true
    PM10_LPI?: true
    PM10_UPI?: true
    PM10_MD?: true
    PM10_MN?: true
    PM10_STD?: true
    rid?: true
  }

  export type Aero_summaryMaxAggregateInputType = {
    PrimaryKey?: true
    horizontal_flux_total_LPI?: true
    horizontal_flux_total_UPI?: true
    horizontal_flux_total_MD?: true
    horizontal_flux_total_MN?: true
    horizontal_flux_total_STD?: true
    vertical_flux_LPI?: true
    vertical_flux_UPI?: true
    vertical_flux_MD?: true
    vertical_flux_MN?: true
    vertical_flux_STD?: true
    PM1_LPI?: true
    PM1_UPI?: true
    PM1_MD?: true
    PM1_MN?: true
    PM1_STD?: true
    PM2_5_LPI?: true
    PM2_5_UPI?: true
    PM2_5_MD?: true
    PM2_5_MN?: true
    PM2_5_STD?: true
    PM10_LPI?: true
    PM10_UPI?: true
    PM10_MD?: true
    PM10_MN?: true
    PM10_STD?: true
    rid?: true
  }

  export type Aero_summaryCountAggregateInputType = {
    PrimaryKey?: true
    horizontal_flux_total_LPI?: true
    horizontal_flux_total_UPI?: true
    horizontal_flux_total_MD?: true
    horizontal_flux_total_MN?: true
    horizontal_flux_total_STD?: true
    vertical_flux_LPI?: true
    vertical_flux_UPI?: true
    vertical_flux_MD?: true
    vertical_flux_MN?: true
    vertical_flux_STD?: true
    PM1_LPI?: true
    PM1_UPI?: true
    PM1_MD?: true
    PM1_MN?: true
    PM1_STD?: true
    PM2_5_LPI?: true
    PM2_5_UPI?: true
    PM2_5_MD?: true
    PM2_5_MN?: true
    PM2_5_STD?: true
    PM10_LPI?: true
    PM10_UPI?: true
    PM10_MD?: true
    PM10_MN?: true
    PM10_STD?: true
    rid?: true
    _all?: true
  }

  export type Aero_summaryAggregateArgs = {
    /**
     * Filter which aero_summary to aggregate.
     */
    where?: aero_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_summaries to fetch.
     */
    orderBy?: Enumerable<aero_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aero_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aero_summaries
    **/
    _count?: true | Aero_summaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Aero_summaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Aero_summarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aero_summaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aero_summaryMaxAggregateInputType
  }

  export type GetAero_summaryAggregateType<T extends Aero_summaryAggregateArgs> = {
        [P in keyof T & keyof AggregateAero_summary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAero_summary[P]>
      : GetScalarType<T[P], AggregateAero_summary[P]>
  }




  export type Aero_summaryGroupByArgs = {
    where?: aero_summaryWhereInput
    orderBy?: Enumerable<aero_summaryOrderByWithAggregationInput>
    by: Aero_summaryScalarFieldEnum[]
    having?: aero_summaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aero_summaryCountAggregateInputType | true
    _avg?: Aero_summaryAvgAggregateInputType
    _sum?: Aero_summarySumAggregateInputType
    _min?: Aero_summaryMinAggregateInputType
    _max?: Aero_summaryMaxAggregateInputType
  }


  export type Aero_summaryGroupByOutputType = {
    PrimaryKey: string | null
    horizontal_flux_total_LPI: number | null
    horizontal_flux_total_UPI: number | null
    horizontal_flux_total_MD: number | null
    horizontal_flux_total_MN: number | null
    horizontal_flux_total_STD: number | null
    vertical_flux_LPI: number | null
    vertical_flux_UPI: number | null
    vertical_flux_MD: number | null
    vertical_flux_MN: number | null
    vertical_flux_STD: number | null
    PM1_LPI: number | null
    PM1_UPI: number | null
    PM1_MD: number | null
    PM1_MN: number | null
    PM1_STD: number | null
    PM2_5_LPI: number | null
    PM2_5_UPI: number | null
    PM2_5_MD: number | null
    PM2_5_MN: number | null
    PM2_5_STD: number | null
    PM10_LPI: number | null
    PM10_UPI: number | null
    PM10_MD: number | null
    PM10_MN: number | null
    PM10_STD: number | null
    rid: number
    _count: Aero_summaryCountAggregateOutputType | null
    _avg: Aero_summaryAvgAggregateOutputType | null
    _sum: Aero_summarySumAggregateOutputType | null
    _min: Aero_summaryMinAggregateOutputType | null
    _max: Aero_summaryMaxAggregateOutputType | null
  }

  type GetAero_summaryGroupByPayload<T extends Aero_summaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Aero_summaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aero_summaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aero_summaryGroupByOutputType[P]>
            : GetScalarType<T[P], Aero_summaryGroupByOutputType[P]>
        }
      >
    >


  export type aero_summarySelect = {
    PrimaryKey?: boolean
    horizontal_flux_total_LPI?: boolean
    horizontal_flux_total_UPI?: boolean
    horizontal_flux_total_MD?: boolean
    horizontal_flux_total_MN?: boolean
    horizontal_flux_total_STD?: boolean
    vertical_flux_LPI?: boolean
    vertical_flux_UPI?: boolean
    vertical_flux_MD?: boolean
    vertical_flux_MN?: boolean
    vertical_flux_STD?: boolean
    PM1_LPI?: boolean
    PM1_UPI?: boolean
    PM1_MD?: boolean
    PM1_MN?: boolean
    PM1_STD?: boolean
    PM2_5_LPI?: boolean
    PM2_5_UPI?: boolean
    PM2_5_MD?: boolean
    PM2_5_MN?: boolean
    PM2_5_STD?: boolean
    PM10_LPI?: boolean
    PM10_UPI?: boolean
    PM10_MD?: boolean
    PM10_MN?: boolean
    PM10_STD?: boolean
    rid?: boolean
  }


  export type aero_summaryGetPayload<S extends boolean | null | undefined | aero_summaryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aero_summary :
    S extends undefined ? never :
    S extends { include: any } & (aero_summaryArgs | aero_summaryFindManyArgs)
    ? aero_summary 
    : S extends { select: any } & (aero_summaryArgs | aero_summaryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof aero_summary ? aero_summary[P] : never
  } 
      : aero_summary


  type aero_summaryCountArgs = 
    Omit<aero_summaryFindManyArgs, 'select' | 'include'> & {
      select?: Aero_summaryCountAggregateInputType | true
    }

  export interface aero_summaryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Aero_summary that matches the filter.
     * @param {aero_summaryFindUniqueArgs} args - Arguments to find a Aero_summary
     * @example
     * // Get one Aero_summary
     * const aero_summary = await prisma.aero_summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aero_summaryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, aero_summaryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aero_summary'> extends True ? Prisma__aero_summaryClient<aero_summaryGetPayload<T>> : Prisma__aero_summaryClient<aero_summaryGetPayload<T> | null, null>

    /**
     * Find one Aero_summary that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aero_summaryFindUniqueOrThrowArgs} args - Arguments to find a Aero_summary
     * @example
     * // Get one Aero_summary
     * const aero_summary = await prisma.aero_summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aero_summaryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, aero_summaryFindUniqueOrThrowArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Find the first Aero_summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_summaryFindFirstArgs} args - Arguments to find a Aero_summary
     * @example
     * // Get one Aero_summary
     * const aero_summary = await prisma.aero_summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aero_summaryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, aero_summaryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aero_summary'> extends True ? Prisma__aero_summaryClient<aero_summaryGetPayload<T>> : Prisma__aero_summaryClient<aero_summaryGetPayload<T> | null, null>

    /**
     * Find the first Aero_summary that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_summaryFindFirstOrThrowArgs} args - Arguments to find a Aero_summary
     * @example
     * // Get one Aero_summary
     * const aero_summary = await prisma.aero_summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aero_summaryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, aero_summaryFindFirstOrThrowArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Find zero or more Aero_summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_summaryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aero_summaries
     * const aero_summaries = await prisma.aero_summary.findMany()
     * 
     * // Get first 10 Aero_summaries
     * const aero_summaries = await prisma.aero_summary.findMany({ take: 10 })
     * 
     * // Only select the `PrimaryKey`
     * const aero_summaryWithPrimaryKeyOnly = await prisma.aero_summary.findMany({ select: { PrimaryKey: true } })
     * 
    **/
    findMany<T extends aero_summaryFindManyArgs>(
      args?: SelectSubset<T, aero_summaryFindManyArgs>
    ): Prisma.PrismaPromise<Array<aero_summaryGetPayload<T>>>

    /**
     * Create a Aero_summary.
     * @param {aero_summaryCreateArgs} args - Arguments to create a Aero_summary.
     * @example
     * // Create one Aero_summary
     * const Aero_summary = await prisma.aero_summary.create({
     *   data: {
     *     // ... data to create a Aero_summary
     *   }
     * })
     * 
    **/
    create<T extends aero_summaryCreateArgs>(
      args: SelectSubset<T, aero_summaryCreateArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Create many Aero_summaries.
     *     @param {aero_summaryCreateManyArgs} args - Arguments to create many Aero_summaries.
     *     @example
     *     // Create many Aero_summaries
     *     const aero_summary = await prisma.aero_summary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aero_summaryCreateManyArgs>(
      args?: SelectSubset<T, aero_summaryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aero_summary.
     * @param {aero_summaryDeleteArgs} args - Arguments to delete one Aero_summary.
     * @example
     * // Delete one Aero_summary
     * const Aero_summary = await prisma.aero_summary.delete({
     *   where: {
     *     // ... filter to delete one Aero_summary
     *   }
     * })
     * 
    **/
    delete<T extends aero_summaryDeleteArgs>(
      args: SelectSubset<T, aero_summaryDeleteArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Update one Aero_summary.
     * @param {aero_summaryUpdateArgs} args - Arguments to update one Aero_summary.
     * @example
     * // Update one Aero_summary
     * const aero_summary = await prisma.aero_summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aero_summaryUpdateArgs>(
      args: SelectSubset<T, aero_summaryUpdateArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Delete zero or more Aero_summaries.
     * @param {aero_summaryDeleteManyArgs} args - Arguments to filter Aero_summaries to delete.
     * @example
     * // Delete a few Aero_summaries
     * const { count } = await prisma.aero_summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aero_summaryDeleteManyArgs>(
      args?: SelectSubset<T, aero_summaryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aero_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_summaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aero_summaries
     * const aero_summary = await prisma.aero_summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aero_summaryUpdateManyArgs>(
      args: SelectSubset<T, aero_summaryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aero_summary.
     * @param {aero_summaryUpsertArgs} args - Arguments to update or create a Aero_summary.
     * @example
     * // Update or create a Aero_summary
     * const aero_summary = await prisma.aero_summary.upsert({
     *   create: {
     *     // ... data to create a Aero_summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aero_summary we want to update
     *   }
     * })
    **/
    upsert<T extends aero_summaryUpsertArgs>(
      args: SelectSubset<T, aero_summaryUpsertArgs>
    ): Prisma__aero_summaryClient<aero_summaryGetPayload<T>>

    /**
     * Count the number of Aero_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aero_summaryCountArgs} args - Arguments to filter Aero_summaries to count.
     * @example
     * // Count the number of Aero_summaries
     * const count = await prisma.aero_summary.count({
     *   where: {
     *     // ... the filter for the Aero_summaries we want to count
     *   }
     * })
    **/
    count<T extends aero_summaryCountArgs>(
      args?: Subset<T, aero_summaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aero_summaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aero_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aero_summaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aero_summaryAggregateArgs>(args: Subset<T, Aero_summaryAggregateArgs>): Prisma.PrismaPromise<GetAero_summaryAggregateType<T>>

    /**
     * Group by Aero_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aero_summaryGroupByArgs} args - Group by arguments.
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
      T extends Aero_summaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Aero_summaryGroupByArgs['orderBy'] }
        : { orderBy?: Aero_summaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Aero_summaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAero_summaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aero_summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__aero_summaryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * aero_summary base type for findUnique actions
   */
  export type aero_summaryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter, which aero_summary to fetch.
     */
    where: aero_summaryWhereUniqueInput
  }

  /**
   * aero_summary findUnique
   */
  export interface aero_summaryFindUniqueArgs extends aero_summaryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aero_summary findUniqueOrThrow
   */
  export type aero_summaryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter, which aero_summary to fetch.
     */
    where: aero_summaryWhereUniqueInput
  }


  /**
   * aero_summary base type for findFirst actions
   */
  export type aero_summaryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter, which aero_summary to fetch.
     */
    where?: aero_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_summaries to fetch.
     */
    orderBy?: Enumerable<aero_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aero_summaries.
     */
    cursor?: aero_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aero_summaries.
     */
    distinct?: Enumerable<Aero_summaryScalarFieldEnum>
  }

  /**
   * aero_summary findFirst
   */
  export interface aero_summaryFindFirstArgs extends aero_summaryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aero_summary findFirstOrThrow
   */
  export type aero_summaryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter, which aero_summary to fetch.
     */
    where?: aero_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_summaries to fetch.
     */
    orderBy?: Enumerable<aero_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aero_summaries.
     */
    cursor?: aero_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aero_summaries.
     */
    distinct?: Enumerable<Aero_summaryScalarFieldEnum>
  }


  /**
   * aero_summary findMany
   */
  export type aero_summaryFindManyArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter, which aero_summaries to fetch.
     */
    where?: aero_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aero_summaries to fetch.
     */
    orderBy?: Enumerable<aero_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aero_summaries.
     */
    cursor?: aero_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aero_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aero_summaries.
     */
    skip?: number
    distinct?: Enumerable<Aero_summaryScalarFieldEnum>
  }


  /**
   * aero_summary create
   */
  export type aero_summaryCreateArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * The data needed to create a aero_summary.
     */
    data: XOR<aero_summaryCreateInput, aero_summaryUncheckedCreateInput>
  }


  /**
   * aero_summary createMany
   */
  export type aero_summaryCreateManyArgs = {
    /**
     * The data used to create many aero_summaries.
     */
    data: Enumerable<aero_summaryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * aero_summary update
   */
  export type aero_summaryUpdateArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * The data needed to update a aero_summary.
     */
    data: XOR<aero_summaryUpdateInput, aero_summaryUncheckedUpdateInput>
    /**
     * Choose, which aero_summary to update.
     */
    where: aero_summaryWhereUniqueInput
  }


  /**
   * aero_summary updateMany
   */
  export type aero_summaryUpdateManyArgs = {
    /**
     * The data used to update aero_summaries.
     */
    data: XOR<aero_summaryUpdateManyMutationInput, aero_summaryUncheckedUpdateManyInput>
    /**
     * Filter which aero_summaries to update
     */
    where?: aero_summaryWhereInput
  }


  /**
   * aero_summary upsert
   */
  export type aero_summaryUpsertArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * The filter to search for the aero_summary to update in case it exists.
     */
    where: aero_summaryWhereUniqueInput
    /**
     * In case the aero_summary found by the `where` argument doesn't exist, create a new aero_summary with this data.
     */
    create: XOR<aero_summaryCreateInput, aero_summaryUncheckedCreateInput>
    /**
     * In case the aero_summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aero_summaryUpdateInput, aero_summaryUncheckedUpdateInput>
  }


  /**
   * aero_summary delete
   */
  export type aero_summaryDeleteArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
    /**
     * Filter which aero_summary to delete.
     */
    where: aero_summaryWhereUniqueInput
  }


  /**
   * aero_summary deleteMany
   */
  export type aero_summaryDeleteManyArgs = {
    /**
     * Filter which aero_summaries to delete
     */
    where?: aero_summaryWhereInput
  }


  /**
   * aero_summary without action
   */
  export type aero_summaryArgs = {
    /**
     * Select specific fields to fetch from the aero_summary
     */
    select?: aero_summarySelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Aero_runsScalarFieldEnum: {
    parameter_set: 'parameter_set',
    likelihood: 'likelihood',
    horizontal_flux_total: 'horizontal_flux_total',
    vertical_flux: 'vertical_flux',
    PM1: 'PM1',
    PM2_5: 'PM2_5',
    PM10: 'PM10',
    PrimaryKey: 'PrimaryKey',
    rid: 'rid'
  };

  export type Aero_runsScalarFieldEnum = (typeof Aero_runsScalarFieldEnum)[keyof typeof Aero_runsScalarFieldEnum]


  export const Aero_summaryScalarFieldEnum: {
    PrimaryKey: 'PrimaryKey',
    horizontal_flux_total_LPI: 'horizontal_flux_total_LPI',
    horizontal_flux_total_UPI: 'horizontal_flux_total_UPI',
    horizontal_flux_total_MD: 'horizontal_flux_total_MD',
    horizontal_flux_total_MN: 'horizontal_flux_total_MN',
    horizontal_flux_total_STD: 'horizontal_flux_total_STD',
    vertical_flux_LPI: 'vertical_flux_LPI',
    vertical_flux_UPI: 'vertical_flux_UPI',
    vertical_flux_MD: 'vertical_flux_MD',
    vertical_flux_MN: 'vertical_flux_MN',
    vertical_flux_STD: 'vertical_flux_STD',
    PM1_LPI: 'PM1_LPI',
    PM1_UPI: 'PM1_UPI',
    PM1_MD: 'PM1_MD',
    PM1_MN: 'PM1_MN',
    PM1_STD: 'PM1_STD',
    PM2_5_LPI: 'PM2_5_LPI',
    PM2_5_UPI: 'PM2_5_UPI',
    PM2_5_MD: 'PM2_5_MD',
    PM2_5_MN: 'PM2_5_MN',
    PM2_5_STD: 'PM2_5_STD',
    PM10_LPI: 'PM10_LPI',
    PM10_UPI: 'PM10_UPI',
    PM10_MD: 'PM10_MD',
    PM10_MN: 'PM10_MN',
    PM10_STD: 'PM10_STD',
    rid: 'rid'
  };

  export type Aero_summaryScalarFieldEnum = (typeof Aero_summaryScalarFieldEnum)[keyof typeof Aero_summaryScalarFieldEnum]


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


  export type aero_runsWhereInput = {
    AND?: Enumerable<aero_runsWhereInput>
    OR?: Enumerable<aero_runsWhereInput>
    NOT?: Enumerable<aero_runsWhereInput>
    parameter_set?: IntNullableFilter | number | null
    likelihood?: FloatNullableFilter | number | null
    horizontal_flux_total?: FloatNullableFilter | number | null
    vertical_flux?: FloatNullableFilter | number | null
    PM1?: FloatNullableFilter | number | null
    PM2_5?: FloatNullableFilter | number | null
    PM10?: FloatNullableFilter | number | null
    PrimaryKey?: StringNullableFilter | string | null
    rid?: IntFilter | number
  }

  export type aero_runsOrderByWithRelationInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    PrimaryKey?: SortOrder
    rid?: SortOrder
  }

  export type aero_runsWhereUniqueInput = {
    rid?: number
  }

  export type aero_runsOrderByWithAggregationInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    PrimaryKey?: SortOrder
    rid?: SortOrder
    _count?: aero_runsCountOrderByAggregateInput
    _avg?: aero_runsAvgOrderByAggregateInput
    _max?: aero_runsMaxOrderByAggregateInput
    _min?: aero_runsMinOrderByAggregateInput
    _sum?: aero_runsSumOrderByAggregateInput
  }

  export type aero_runsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<aero_runsScalarWhereWithAggregatesInput>
    OR?: Enumerable<aero_runsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<aero_runsScalarWhereWithAggregatesInput>
    parameter_set?: IntNullableWithAggregatesFilter | number | null
    likelihood?: FloatNullableWithAggregatesFilter | number | null
    horizontal_flux_total?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux?: FloatNullableWithAggregatesFilter | number | null
    PM1?: FloatNullableWithAggregatesFilter | number | null
    PM2_5?: FloatNullableWithAggregatesFilter | number | null
    PM10?: FloatNullableWithAggregatesFilter | number | null
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    rid?: IntWithAggregatesFilter | number
  }

  export type aero_summaryWhereInput = {
    AND?: Enumerable<aero_summaryWhereInput>
    OR?: Enumerable<aero_summaryWhereInput>
    NOT?: Enumerable<aero_summaryWhereInput>
    PrimaryKey?: StringNullableFilter | string | null
    horizontal_flux_total_LPI?: FloatNullableFilter | number | null
    horizontal_flux_total_UPI?: FloatNullableFilter | number | null
    horizontal_flux_total_MD?: FloatNullableFilter | number | null
    horizontal_flux_total_MN?: FloatNullableFilter | number | null
    horizontal_flux_total_STD?: FloatNullableFilter | number | null
    vertical_flux_LPI?: FloatNullableFilter | number | null
    vertical_flux_UPI?: FloatNullableFilter | number | null
    vertical_flux_MD?: FloatNullableFilter | number | null
    vertical_flux_MN?: FloatNullableFilter | number | null
    vertical_flux_STD?: FloatNullableFilter | number | null
    PM1_LPI?: FloatNullableFilter | number | null
    PM1_UPI?: FloatNullableFilter | number | null
    PM1_MD?: FloatNullableFilter | number | null
    PM1_MN?: FloatNullableFilter | number | null
    PM1_STD?: FloatNullableFilter | number | null
    PM2_5_LPI?: FloatNullableFilter | number | null
    PM2_5_UPI?: FloatNullableFilter | number | null
    PM2_5_MD?: FloatNullableFilter | number | null
    PM2_5_MN?: FloatNullableFilter | number | null
    PM2_5_STD?: FloatNullableFilter | number | null
    PM10_LPI?: FloatNullableFilter | number | null
    PM10_UPI?: FloatNullableFilter | number | null
    PM10_MD?: FloatNullableFilter | number | null
    PM10_MN?: FloatNullableFilter | number | null
    PM10_STD?: FloatNullableFilter | number | null
    rid?: IntFilter | number
  }

  export type aero_summaryOrderByWithRelationInput = {
    PrimaryKey?: SortOrder
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
  }

  export type aero_summaryWhereUniqueInput = {
    rid?: number
  }

  export type aero_summaryOrderByWithAggregationInput = {
    PrimaryKey?: SortOrder
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
    _count?: aero_summaryCountOrderByAggregateInput
    _avg?: aero_summaryAvgOrderByAggregateInput
    _max?: aero_summaryMaxOrderByAggregateInput
    _min?: aero_summaryMinOrderByAggregateInput
    _sum?: aero_summarySumOrderByAggregateInput
  }

  export type aero_summaryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<aero_summaryScalarWhereWithAggregatesInput>
    OR?: Enumerable<aero_summaryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<aero_summaryScalarWhereWithAggregatesInput>
    PrimaryKey?: StringNullableWithAggregatesFilter | string | null
    horizontal_flux_total_LPI?: FloatNullableWithAggregatesFilter | number | null
    horizontal_flux_total_UPI?: FloatNullableWithAggregatesFilter | number | null
    horizontal_flux_total_MD?: FloatNullableWithAggregatesFilter | number | null
    horizontal_flux_total_MN?: FloatNullableWithAggregatesFilter | number | null
    horizontal_flux_total_STD?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_LPI?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_UPI?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_MD?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_MN?: FloatNullableWithAggregatesFilter | number | null
    vertical_flux_STD?: FloatNullableWithAggregatesFilter | number | null
    PM1_LPI?: FloatNullableWithAggregatesFilter | number | null
    PM1_UPI?: FloatNullableWithAggregatesFilter | number | null
    PM1_MD?: FloatNullableWithAggregatesFilter | number | null
    PM1_MN?: FloatNullableWithAggregatesFilter | number | null
    PM1_STD?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_LPI?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_UPI?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_MD?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_MN?: FloatNullableWithAggregatesFilter | number | null
    PM2_5_STD?: FloatNullableWithAggregatesFilter | number | null
    PM10_LPI?: FloatNullableWithAggregatesFilter | number | null
    PM10_UPI?: FloatNullableWithAggregatesFilter | number | null
    PM10_MD?: FloatNullableWithAggregatesFilter | number | null
    PM10_MN?: FloatNullableWithAggregatesFilter | number | null
    PM10_STD?: FloatNullableWithAggregatesFilter | number | null
    rid?: IntWithAggregatesFilter | number
  }

  export type aero_runsCreateInput = {
    parameter_set?: number | null
    likelihood?: number | null
    horizontal_flux_total?: number | null
    vertical_flux?: number | null
    PM1?: number | null
    PM2_5?: number | null
    PM10?: number | null
    PrimaryKey?: string | null
  }

  export type aero_runsUncheckedCreateInput = {
    parameter_set?: number | null
    likelihood?: number | null
    horizontal_flux_total?: number | null
    vertical_flux?: number | null
    PM1?: number | null
    PM2_5?: number | null
    PM10?: number | null
    PrimaryKey?: string | null
    rid?: number
  }

  export type aero_runsUpdateInput = {
    parameter_set?: NullableIntFieldUpdateOperationsInput | number | null
    likelihood?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10?: NullableFloatFieldUpdateOperationsInput | number | null
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aero_runsUncheckedUpdateInput = {
    parameter_set?: NullableIntFieldUpdateOperationsInput | number | null
    likelihood?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10?: NullableFloatFieldUpdateOperationsInput | number | null
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
  }

  export type aero_runsCreateManyInput = {
    parameter_set?: number | null
    likelihood?: number | null
    horizontal_flux_total?: number | null
    vertical_flux?: number | null
    PM1?: number | null
    PM2_5?: number | null
    PM10?: number | null
    PrimaryKey?: string | null
    rid?: number
  }

  export type aero_runsUpdateManyMutationInput = {
    parameter_set?: NullableIntFieldUpdateOperationsInput | number | null
    likelihood?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10?: NullableFloatFieldUpdateOperationsInput | number | null
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aero_runsUncheckedUpdateManyInput = {
    parameter_set?: NullableIntFieldUpdateOperationsInput | number | null
    likelihood?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10?: NullableFloatFieldUpdateOperationsInput | number | null
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    rid?: IntFieldUpdateOperationsInput | number
  }

  export type aero_summaryCreateInput = {
    PrimaryKey?: string | null
    horizontal_flux_total_LPI?: number | null
    horizontal_flux_total_UPI?: number | null
    horizontal_flux_total_MD?: number | null
    horizontal_flux_total_MN?: number | null
    horizontal_flux_total_STD?: number | null
    vertical_flux_LPI?: number | null
    vertical_flux_UPI?: number | null
    vertical_flux_MD?: number | null
    vertical_flux_MN?: number | null
    vertical_flux_STD?: number | null
    PM1_LPI?: number | null
    PM1_UPI?: number | null
    PM1_MD?: number | null
    PM1_MN?: number | null
    PM1_STD?: number | null
    PM2_5_LPI?: number | null
    PM2_5_UPI?: number | null
    PM2_5_MD?: number | null
    PM2_5_MN?: number | null
    PM2_5_STD?: number | null
    PM10_LPI?: number | null
    PM10_UPI?: number | null
    PM10_MD?: number | null
    PM10_MN?: number | null
    PM10_STD?: number | null
  }

  export type aero_summaryUncheckedCreateInput = {
    PrimaryKey?: string | null
    horizontal_flux_total_LPI?: number | null
    horizontal_flux_total_UPI?: number | null
    horizontal_flux_total_MD?: number | null
    horizontal_flux_total_MN?: number | null
    horizontal_flux_total_STD?: number | null
    vertical_flux_LPI?: number | null
    vertical_flux_UPI?: number | null
    vertical_flux_MD?: number | null
    vertical_flux_MN?: number | null
    vertical_flux_STD?: number | null
    PM1_LPI?: number | null
    PM1_UPI?: number | null
    PM1_MD?: number | null
    PM1_MN?: number | null
    PM1_STD?: number | null
    PM2_5_LPI?: number | null
    PM2_5_UPI?: number | null
    PM2_5_MD?: number | null
    PM2_5_MN?: number | null
    PM2_5_STD?: number | null
    PM10_LPI?: number | null
    PM10_UPI?: number | null
    PM10_MD?: number | null
    PM10_MN?: number | null
    PM10_STD?: number | null
    rid?: number
  }

  export type aero_summaryUpdateInput = {
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_STD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type aero_summaryUncheckedUpdateInput = {
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    rid?: IntFieldUpdateOperationsInput | number
  }

  export type aero_summaryCreateManyInput = {
    PrimaryKey?: string | null
    horizontal_flux_total_LPI?: number | null
    horizontal_flux_total_UPI?: number | null
    horizontal_flux_total_MD?: number | null
    horizontal_flux_total_MN?: number | null
    horizontal_flux_total_STD?: number | null
    vertical_flux_LPI?: number | null
    vertical_flux_UPI?: number | null
    vertical_flux_MD?: number | null
    vertical_flux_MN?: number | null
    vertical_flux_STD?: number | null
    PM1_LPI?: number | null
    PM1_UPI?: number | null
    PM1_MD?: number | null
    PM1_MN?: number | null
    PM1_STD?: number | null
    PM2_5_LPI?: number | null
    PM2_5_UPI?: number | null
    PM2_5_MD?: number | null
    PM2_5_MN?: number | null
    PM2_5_STD?: number | null
    PM10_LPI?: number | null
    PM10_UPI?: number | null
    PM10_MD?: number | null
    PM10_MN?: number | null
    PM10_STD?: number | null
    rid?: number
  }

  export type aero_summaryUpdateManyMutationInput = {
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_STD?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type aero_summaryUncheckedUpdateManyInput = {
    PrimaryKey?: NullableStringFieldUpdateOperationsInput | string | null
    horizontal_flux_total_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    horizontal_flux_total_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    vertical_flux_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM1_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM2_5_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_LPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_UPI?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MD?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_MN?: NullableFloatFieldUpdateOperationsInput | number | null
    PM10_STD?: NullableFloatFieldUpdateOperationsInput | number | null
    rid?: IntFieldUpdateOperationsInput | number
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

  export type aero_runsCountOrderByAggregateInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    PrimaryKey?: SortOrder
    rid?: SortOrder
  }

  export type aero_runsAvgOrderByAggregateInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    rid?: SortOrder
  }

  export type aero_runsMaxOrderByAggregateInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    PrimaryKey?: SortOrder
    rid?: SortOrder
  }

  export type aero_runsMinOrderByAggregateInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    PrimaryKey?: SortOrder
    rid?: SortOrder
  }

  export type aero_runsSumOrderByAggregateInput = {
    parameter_set?: SortOrder
    likelihood?: SortOrder
    horizontal_flux_total?: SortOrder
    vertical_flux?: SortOrder
    PM1?: SortOrder
    PM2_5?: SortOrder
    PM10?: SortOrder
    rid?: SortOrder
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

  export type aero_summaryCountOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
  }

  export type aero_summaryAvgOrderByAggregateInput = {
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
  }

  export type aero_summaryMaxOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
  }

  export type aero_summaryMinOrderByAggregateInput = {
    PrimaryKey?: SortOrder
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
  }

  export type aero_summarySumOrderByAggregateInput = {
    horizontal_flux_total_LPI?: SortOrder
    horizontal_flux_total_UPI?: SortOrder
    horizontal_flux_total_MD?: SortOrder
    horizontal_flux_total_MN?: SortOrder
    horizontal_flux_total_STD?: SortOrder
    vertical_flux_LPI?: SortOrder
    vertical_flux_UPI?: SortOrder
    vertical_flux_MD?: SortOrder
    vertical_flux_MN?: SortOrder
    vertical_flux_STD?: SortOrder
    PM1_LPI?: SortOrder
    PM1_UPI?: SortOrder
    PM1_MD?: SortOrder
    PM1_MN?: SortOrder
    PM1_STD?: SortOrder
    PM2_5_LPI?: SortOrder
    PM2_5_UPI?: SortOrder
    PM2_5_MD?: SortOrder
    PM2_5_MN?: SortOrder
    PM2_5_STD?: SortOrder
    PM10_LPI?: SortOrder
    PM10_UPI?: SortOrder
    PM10_MD?: SortOrder
    PM10_MN?: SortOrder
    PM10_STD?: SortOrder
    rid?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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