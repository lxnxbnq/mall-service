
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { Connection } from 'typeorm'

// filter
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

// modules
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { PmsModule } from './core/pms/pms.module';

// entitys
// import { Photo } from './core/photo/photo.entity';

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
      password: 'zqy19970114',
      database: 'mall',
      entities: [],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    PmsModule,
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}