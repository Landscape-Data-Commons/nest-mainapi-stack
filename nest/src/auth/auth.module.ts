import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { ApiKeyStrategy } from './strategy/apikey.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthConfig, ApiKeyStrategy],
  exports: [AuthService]
})
export class AuthModule {}
