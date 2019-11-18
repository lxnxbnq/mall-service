import { Module } from '@nestjs/common';
import { CatModule } from './core/cat/cat.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [CatModule, AuthModule, UsersModule]
})
export class AppModule {}