import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'
import { CatModule } from './core/cat/cat.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { Photo } from './core/photo/photo.entity';
import { PhotoModule } from './core/photo/photo.module'

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Zqy19970114',
      database: 'test',
      entities: [Photo],
      synchronize: true,
    }),
    CatModule,
    AuthModule,
    UsersModule,
    PhotoModule,
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}