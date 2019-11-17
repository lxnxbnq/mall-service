import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.group()
    console.log('Request---', req.query);
    next();
    console.log('Response---', res.req.body);
    console.groupEnd()
  }
}

export function logger(req: Request, res: Response, next: Function) {
  console.group()
  console.log('Request---', req.query);
  next();
  console.log('Response---', res.req.body);
  console.groupEnd()
}

export function logger2(req: Request, res: Response, next: Function) {
  console.log('logger2');
  next();
}