import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import URL from 'url';

import { Authorization, AuthorizationGuard } from '@nestjs-cognito/auth';
import { Observable } from 'rxjs';

function alterPath(stringurl, add) {
  const URL = stringurl.replace(/(^\w+:|^)\/\//, '');
  const part1 = URL.substring(0, URL.indexOf('/') + 1);
  const part2 = URL.substring(URL.indexOf('/'), URL.length);
  console.log(stringurl);
  console.log(part1);
  console.log(part2);

  // console.log()
  // var result = "https://" + part1 + add + part2;
}

@Injectable()
export class CustomAuthGuard
  extends AuthorizationGuard(['us-west-1_FgaW15JOh_Google'])
  implements CanActivate
{
  constructor(
    // private readonly reflector: Reflector
    ) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const isPublic = this.reflector.get<boolean>(
    //   'isPublic',
    //   context.getHandler(),
    // );
    // const hasBearer = context.
    const req = context.switchToHttp().getRequest();
    //  let pathname = URL.parse(req.url).pathname
    //  let newpath = pathname + '/auth'
    //  let redirectUrl = (newpath + URL.parse(req.url).search)
    //  console.log(redirectUrl)
    // console.log(req.get('authorization'))
    if(req.get('authorization')){
      console.log("FOUND AUTHORIZATION HEADER")
      return true
    } else {
      console.log("DID NOT FIND AUTHORIZATION HEADER")
      return true;
    }
    // if (req.hasOwnProperty('')) {
    //   // return true;
    //   console.log('public check');
    //   return true;
    // }
    // else {
    //   return false
    // }
    // return 
    // return true
  }
}
