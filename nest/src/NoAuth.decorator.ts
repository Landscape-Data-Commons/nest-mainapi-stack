import { SetMetadata, UseFilters, UseGuards, applyDecorators } from '@nestjs/common';
import { CustomAuthGuard } from './NoAuthGuard.decorator';
import { ForbiddenExceptionFilter } from './forbidden-exception.filter';
// export const Public = () => SetMetadata('isPublic', true);

export function NoAuth() {
  return applyDecorators(
    UseGuards(CustomAuthGuard), UseFilters(ForbiddenExceptionFilter)
    )
}