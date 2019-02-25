import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class TempMiddleware implements NestMiddleware {
  public resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      console.log('OK');
      next();
    };
  }
}
