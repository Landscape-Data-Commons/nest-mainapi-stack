import { PartialType } from '@nestjs/mapped-types';
import { CreateDataspeciesinventoryDto } from './create-dataspeciesinventory.dto';

export class UpdateDataspeciesinventoryDto extends PartialType(CreateDataspeciesinventoryDto) {}
