import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middlewares/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AuthGuard } from "./common/guard/auth.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalGuards(new AuthGuard()) // 全局守卫
  await app.listen(8000);
}
bootstrap();
