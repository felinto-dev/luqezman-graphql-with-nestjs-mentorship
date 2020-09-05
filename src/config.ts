import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config = (): {
  database: TypeOrmModuleOptions;
} => ({
  database: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'fntwork',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    synchronize: false,
    logging: false,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
  },
});
