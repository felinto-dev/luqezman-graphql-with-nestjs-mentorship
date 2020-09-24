import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './config/app/app.config';
import { DbConfigModule } from './config/db/db-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load: [appConfig],
    }),
    DbConfigModule,
  ],
})
export class AppModule {}
