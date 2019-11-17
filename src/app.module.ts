import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [CatModule]
})
export class AppModule {}