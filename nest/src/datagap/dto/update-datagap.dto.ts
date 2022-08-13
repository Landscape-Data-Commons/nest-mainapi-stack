import { PartialType } from '@nestjs/swagger';
import { CreateDatagapDto } from './create-datagap.dto';

export class UpdateDatagapDto extends PartialType(CreateDatagapDto) {}
