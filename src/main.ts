import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('app.port');
  await app.listen(port);
}

bootstrap();
