import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
// import { LoggerMiddleware } from './common/middlewares/logger.middleware';
@Module({
  imports: [CatModule]
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes('cat');
//   }
// }
export class AppModule {}