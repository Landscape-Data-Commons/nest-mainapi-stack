import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { Request as ExpRequest } from 'express';
import { NDOW_CLIENT, LIMITED_CLIENT } from 'src/ClientSwitch.constants';

@Injectable()
export class TokenService {
  private jwtVerifier = CognitoJwtVerifier.create({
    // userPoolId: 'us-west-1_FgaW15JOh',
    userPoolId: 'us-east-1_x2q4CazBi', //sarah user pool
    tokenUse: 'id',
    // clientId: '3ocfhcl3smtnnu6m0qkne8v8tg',
    clientId: '6nui6oqeilk6vknb8fjr1t6mvp', //sarah user pool
  });

  public async validateRequest(
    headers: Headers,
    request: ExpRequest,
    tableService: any,
    take?: string,
    cursor?: string,
    postDecoratorParams?: any,
  ) {
    if (headers.hasOwnProperty('authorization')) {
      const token = this.extractTokenFromHeader(request);
      let result: any;
      // intentar validarlo
      try {
        result = await this.jwtVerifier.verify(token);
      } catch (error) {
        result = {};
      }
      // si es valido
      if (typeof result === 'object' && result.hasOwnProperty('identities')) {
        if (take) {
          postDecoratorParams['take'] = Number(take);
        }
        if (cursor) {
          postDecoratorParams['cursor'] = Number(cursor);
        }
        for (const [key, value] of Object.entries(
          postDecoratorParams['params'],
        )) {
          if (Array.isArray(value) && key != 'take' && key != 'cursor') {
            postDecoratorParams['params'][key] = { in: value };
          }
        }

        return tableService.FindMany(postDecoratorParams, NDOW_CLIENT);
      } else {
        return new UnauthorizedException();
      }
    } else {
      if (take) {
        postDecoratorParams['take'] = Number(take);
      }
      if (cursor) {
        postDecoratorParams['cursor'] = Number(cursor);
      }
      for (const [key, value] of Object.entries(
        postDecoratorParams['params'],
      )) {
        if (Array.isArray(value) && key != 'take' && key != 'cursor') {
          postDecoratorParams['params'][key] = { in: value };
        }
      }
      return tableService.FindMany(postDecoratorParams, LIMITED_CLIENT);
    }
  }

  private extractTokenFromHeader(request: ExpRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
