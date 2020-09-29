import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import configuration from './db.config';

@Module({
  imports: [
    ConfigModule.forFeature(configuration),
    MongooseModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        uri: ConfigService.get('db.url'),
      }),
      inject: [ConfigService]
    })
  ],
})
export class DbConfigModule { }
