import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app/app.config';
import { DbConfigModule } from './config/db/db-config.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load: [appConfig],
    }),
    DbConfigModule,
  ],
  providers: [AppService],
})
export class AppModule {}
