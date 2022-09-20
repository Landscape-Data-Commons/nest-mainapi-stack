import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator';
import { TblSchemaService } from './tbl-schema.service';
import { dtoTblSchema } from './dto/get-tblschema.dto';
import { TblSchemaEnt } from './entities/tbl-schema.entity';

@Controller('tbl-schema')
export class TblSchemaController {
  constructor(private readonly tblSchemaService: TblSchemaService) {}

  @Get('version/:version')
  @ApiOkResponse({ type: TblSchemaEnt, isArray: true })
  GetTblSchema(@Param('version') SchemaVersionParam: string) {
    return this.tblSchemaService.FindManyTblSchema(SchemaVersionParam);
  }

  @Get('all')
  @ApiOkResponse({ type: TblSchemaEnt, isArray: true })
  GetAllTblSchema() {
    return this.tblSchemaService.FindAllTblSchema();
  }

  @Get('latest')
  @ApiOkResponse({ type: TblSchemaEnt, isArray: true })
  GetLatestSchema() {
    return this.tblSchemaService.FindLatestSchema();
  }
}
