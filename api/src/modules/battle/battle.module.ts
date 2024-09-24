import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BattleService } from './battle.service'
import { BattleController } from './battle.controller'
import { Battle } from './entities/battle.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  controllers: [BattleController],
  providers: [BattleService]
})
export class BattleModule {}
