import { DataSource, DataSourceOptions } from 'typeorm'

export const configTypeOrm: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/pokemon.sqlite',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: true
}

export default new DataSource(configTypeOrm)
