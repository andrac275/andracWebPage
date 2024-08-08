import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(`GUARD: ${request.url}`);

    /* If I GET 'http://localhost:3000/greetWithGuard' this will return false. Returning false implies this will return an error*/
    if (request.url === '/greetWithGuard') return false;

    /* If I GET 'http://localhost:3000/greetWithGuard/?name=Andrac&age=33' this is correct and won't return false so this will work*/
    return true;
  }
}
