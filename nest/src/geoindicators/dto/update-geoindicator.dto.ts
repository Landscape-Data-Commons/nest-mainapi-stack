import { PartialType } from '@nestjs/mapped-types';
import { CreateGeoindicatorDto } from './create-geoindicator.dto';

export class UpdateGeoindicatorDto extends PartialType(CreateGeoindicatorDto) {}
