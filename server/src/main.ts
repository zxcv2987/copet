import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configservice = app.get(ConfigService);
  const port = configservice.get('APP_PORT');

  app.enableCors({ origin: '*' }); // CORS 허용

  await app.listen(port);
}
bootstrap();
