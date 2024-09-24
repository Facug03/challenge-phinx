import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonModule } from './modules/pokemon/pokemon.module'
import { configTypeOrm } from './config/type-orm'

@Module({
  imports: [TypeOrmModule.forRoot(configTypeOrm), PokemonModule]
})
export class AppModule {}
