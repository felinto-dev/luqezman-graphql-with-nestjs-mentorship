import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import dbConfig from './db.config';

@Module({
  imports: [
    ConfigModule.forFeature(dbConfig),
    MongooseModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        uri: ConfigService.get('db.uri'),
      }),
      inject: [ConfigService]
    })
  ],
})
export class DbConfigModule { }
