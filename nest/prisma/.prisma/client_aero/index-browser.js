
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

exports.Prisma.Aero_runsScalarFieldEnum = makeEnum({
  parameter_set: 'parameter_set',
  likelihood: 'likelihood',
  horizontal_flux_total: 'horizontal_flux_total',
  vertical_flux: 'vertical_flux',
  PM1: 'PM1',
  PM2_5: 'PM2_5',
  PM10: 'PM10',
  PrimaryKey: 'PrimaryKey',
  rid: 'rid'
});

exports.Prisma.Aero_summaryScalarFieldEnum = makeEnum({
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
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  aero_runs: 'aero_runs',
  aero_summary: 'aero_summary'
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
