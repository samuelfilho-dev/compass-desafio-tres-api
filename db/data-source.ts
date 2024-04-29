import { DataSource, DataSourceOptions } from 'typeorm';

export let dataSourceOptions: DataSourceOptions;

switch (process.env.NODE_ENV) {
  case 'development':
    dataSourceOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: ['**/*.entity.js'],
      database: 'desafio_tres',
      synchronize: false,
      logging: true,
      migrations: ['dist/migrations/**'],
    };
    break;
  case 'test':
    dataSourceOptions = {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      synchronize: true,
    };
    break;
  case 'production':
    dataSourceOptions = {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    };
    break;
  default:
    throw new Error('unknown environment');
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
