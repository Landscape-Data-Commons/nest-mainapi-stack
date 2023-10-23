import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { Request as ExpRequest } from 'express';
import { NDOW_CLIENT, LIMITED_CLIENT } from 'src/ClientSwitch.constants';

@Injectable()
export class TokenService {
  // public stored_result: any;
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
    let result: any;
    if (headers.hasOwnProperty('authorization')) {
      const token = this.extractTokenFromHeader(request);
      // console.log("HAY TOKEN")
      // intentar validarlo
      try {
        result = await this.jwtVerifier.verify(token);
      } catch (error) {
        result = {};
      }
      // si es valido
      // console.log(result)

      if (typeof result === 'object' ) {

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
    }

    return this.groupDiscrimination(result, tableService, postDecoratorParams);
  }

  private extractTokenFromHeader(request: ExpRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private groupDiscrimination(JWTResponse, service, params){
    const res = JWTResponse
    if(res==undefined){
      console.log("no hay permiso: limited client")
      return service.FindMany(params, LIMITED_CLIENT);
    }
    if (res.hasOwnProperty("cognito:groups")){
      console.log("it found a group")
      const [grp] = res['cognito:groups'];
      switch(grp){
        case 'NDOW':
          console.log("NDOW")
          return service.FindMany(params, NDOW_CLIENT);
        default:
          console.log("but group not NDOW")
          return service.FindMany(params, LIMITED_CLIENT);
      }
    } else {
      console.log("no group found")
      return service.FindMany(params, LIMITED_CLIENT);
    }
  }
}
