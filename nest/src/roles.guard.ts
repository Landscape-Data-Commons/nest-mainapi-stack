import { SetMetadata } from '@nestjs/common';
// import { validateRequest } from './validateRequest' // your custom implementation

export const Public = () => SetMetadata('isPublic', true);
// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private reflector: Reflector) {}
//   canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();
//     const allowUnauthorizedRequest = this.reflector.get<boolean>('allowUnauthorizedRequest', context.getHandler());
//     return allowUnauthorizedRequest 
//     // || validateRequest(request);
//   }

// }