import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DbConfigModule } from './config/db/db-config.module';
import appConfig from './config/app/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
      load: [appConfig],
    }),
    DbConfigModule,
  ],
})
export class AppModule {}
