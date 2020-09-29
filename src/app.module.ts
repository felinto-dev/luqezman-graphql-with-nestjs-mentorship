import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app/app.config';
import { DbConfigModule } from './config/db/db-config.module';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load: [appConfig],
    }),
    DbConfigModule,
    ProductsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
