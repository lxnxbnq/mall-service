import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger, logger2 } from './common/middlewares/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// import { AllExceptionsFilter } from "./common/filters/any-exeception.filter";
import { AuthGuard } from "./common/guard/auth.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger)
  app.use(logger2)
  // app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalGuards(new AuthGuard())
  await app.listen(3001);
}
bootstrap();
