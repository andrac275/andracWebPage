import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    console.log(`ANDRAC AUTH middleware on users module`);
    if (!authorization) {
      throw new HttpException(
        'ANDRAC auth-middleware: Unauthorized',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (authorization !== 'abcd123') {
      throw new HttpException(
        'ANDRAC auth-middleware: Forbidden',
        HttpStatus.FORBIDDEN,
      );
    }
    next();
  }
}
