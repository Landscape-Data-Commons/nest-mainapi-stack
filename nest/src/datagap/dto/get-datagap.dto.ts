import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class dtoDataGap {
  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public take?: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public rid: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public ProjectKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public RecType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public SeqNo: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public GapStart: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public GapEnd: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public Gap: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public LineKey: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public RecKey: string;

  @Type(() => Date)
  public FormDate: Date;

  @Type(() => Date)
  public DateModified: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public FormType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public Direction: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public Measure: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public LineLengthAmount: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public GapMin: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public GapData: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public PerennialsCanopy: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public AnnualGrassesCanopy: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public AnnualForbsCanopy: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public OtherCanopy: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public Notes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public NoCanopyGaps: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  public NoBasalGaps: number;

  @Type(() => Date)
  public DateLoadedInDb: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public PerennialsBasal: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public AnnualGrassesBasal: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public AnnualForbsBasal: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public OtherBasal: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  public source: string;
}
