import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Transform, Type } from 'class-transformer';

export class dtoTblSchema {
  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  rid: number;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  Order: Prisma.Decimal;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Table: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Field: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Alias: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Description: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  DataType: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Length: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  DatatypeNotes: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  Min: Prisma.Decimal;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  Max: Prisma.Decimal;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => String(id)),
  )
  Unit: string;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  SigFig: Prisma.Decimal;

  @Transform(({ value }) =>
    value
      .trim()
      .split(',')
      .map((id) => Number(id)),
  )
  Version: string;

  @Type(() => Date)
  Uploaded: Date;
}
