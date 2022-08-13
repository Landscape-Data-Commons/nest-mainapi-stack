import { PartialType } from '@nestjs/swagger';
import { CreateDataheaderDto } from './create-dataheader.dto';

export class UpdateDataheaderDto extends PartialType(CreateDataheaderDto) {}
