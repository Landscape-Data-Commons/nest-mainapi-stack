import { PartialType } from '@nestjs/mapped-types';
import { CreateDatasoilstabilityDto } from './create-datasoilstability.dto';

export class UpdateDatasoilstabilityDto extends PartialType(CreateDatasoilstabilityDto) {}
