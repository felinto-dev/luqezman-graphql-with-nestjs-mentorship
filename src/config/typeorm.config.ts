import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.1.125',
  port: 5432,
  username: 'local_dev',
  password: 'local_dev',
  database: 'local_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
