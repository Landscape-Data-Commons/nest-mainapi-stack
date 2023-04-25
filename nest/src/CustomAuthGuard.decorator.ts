import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import {
  Authorization,
  AuthorizationGuard
} from "@nestjs-cognito/auth";

@Injectable()
export class CustomAuthGuard extends AuthorizationGuard(["us-west-1_FgaW15JOh_Google"]) {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler()
    );

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}