import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //White list removes unnecesary params from an object. For example a user that needs email and password, if I send email, password and location, location will be removed
    }),
  );
  await app.listen(3000);
}
bootstrap();
