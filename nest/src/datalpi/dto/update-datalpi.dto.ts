import { PartialType } from '@nestjs/mapped-types';
import { CreateDatalpiDto } from './create-datalpi.dto';

export class UpdateDatalpiDto extends PartialType(CreateDatalpiDto) {}
