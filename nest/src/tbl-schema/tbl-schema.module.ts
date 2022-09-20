import { Module } from '@nestjs/common';
import { TblSchemaService } from './tbl-schema.service';
import { TblSchemaController } from './tbl-schema.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TblSchemaController],
  providers: [TblSchemaService],
  imports: [PrismaModule],
})
export class TblSchemaModule {}
