import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatahorizontalfluxService } from './datahorizontalflux.service';

@Controller('datahorizontalflux')
export class DatahorizontalfluxController {
  constructor(private readonly datahorizontalfluxService: DatahorizontalfluxService) {}

}
