import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres-db',
  database: 'db',
  username: 'user',
  password: 'password',
  port: 5432,
  entities: [join(__dirname, '..', '..', '**/*.entity.js')],
  synchronize: false,
  migrations: [join(__dirname, '..', './migrations/*.js')],
  migrationsTableName: 'migrations',
  ssl: false // Set to true if using a production database
}

const dataSource = new DataSource(databaseConfig);
export default dataSource;