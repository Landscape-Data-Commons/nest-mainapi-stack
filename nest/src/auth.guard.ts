import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
// import { jwtConstants } from './constants';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private jwtVerifier = CognitoJwtVerifier.create({
    userPoolId: 'us-west-1_FgaW15JOh',
    tokenUse: 'id',
    clientId: '3ocfhcl3smtnnu6m0qkne8v8tg',
  });

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    try {
      console.log(token)
      const result = this.jwtVerifier.verify(request.header('authorization'));
      console.log(result)
      return !!result;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
