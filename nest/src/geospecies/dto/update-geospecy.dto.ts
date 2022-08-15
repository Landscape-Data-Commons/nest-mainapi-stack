import { PartialType } from '@nestjs/swagger';
import { CreateGeospecyDto } from './create-geospecy.dto';

export class UpdateGeospecyDto extends PartialType(CreateGeospecyDto) {}
