import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //vytvori instani nest aplikace
  const app = await NestFactory.create(AppModule);
  //pouziti ValidationPipe v celem projektu
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  //server posloucha port 3333
  await app.listen(3333);
}
bootstrap();
