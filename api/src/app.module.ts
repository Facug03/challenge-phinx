import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonModule } from '@/src/modules/pokemon/pokemon.module'
import { BattleModule } from '@/src/modules/battle/battle.module'
import { configTypeOrm } from '@/src/config/type-orm'
import { HealthModule } from '@/src/modules/health/health.module'

@Module({
  imports: [TypeOrmModule.forRoot(configTypeOrm), PokemonModule, BattleModule, HealthModule]
})
export class AppModule {}
