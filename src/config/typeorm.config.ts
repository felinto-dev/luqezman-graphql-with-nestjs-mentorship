import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'local_dev',
  password: 'local_dev',
  database: 'local_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
