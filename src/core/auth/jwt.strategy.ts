import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

// jwt策略

// 对于我们的 JwtStrategy ，我们遵循了前面描述的所有 Passport 策略的相同配方。
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // 通过在 super() 调用中传递一个 options 对象，初始化策略
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret, // 我们使用权宜的选项来提供对称的秘密来签署令牌
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
