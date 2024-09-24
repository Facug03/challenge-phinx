import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateBattleDto } from './dto/create-battle.dto'
import { Battle } from './entities/battle.entity'

@Injectable()
export class BattleService {
  constructor(@InjectRepository(Battle) private battleRepository: Repository<Battle>) {}

  create(createBattleDto: CreateBattleDto) {
    const { fighterOne, fighterTwo } = createBattleDto

    const firstTurn = this.getFirstTurn(createBattleDto)
    const winnerId = this.fight(createBattleDto, firstTurn)

    return this.battleRepository.save({
      winner: {
        id: winnerId
      },
      loser: {
        id: winnerId === fighterOne.id ? fighterTwo.id : fighterOne.id
      }
    })
  }

  findAll() {
    return this.battleRepository.find({
      relations: ['winner', 'loser']
    })
  }

  fight(fighters: CreateBattleDto, turn: string): string {
    const { fighterOne, fighterTwo } = fighters
    const pokemonAttacking = fighterOne.id === turn ? fighterOne : fighterTwo
    const pokemonDefending = fighterOne.id === turn ? fighterTwo : fighterOne

    const damage =
      pokemonAttacking.attack <= pokemonDefending.defense ? 1 : pokemonAttacking.attack - pokemonDefending.defense
    pokemonDefending.hp -= damage

    if (pokemonDefending.hp > 0) return this.fight(fighters, pokemonDefending.id)

    return pokemonAttacking.id
  }

  getFirstTurn(fighters: CreateBattleDto): string {
    const { fighterOne, fighterTwo } = fighters

    if (fighterOne.speed === fighterTwo.speed) {
      return fighterOne.attack > fighterTwo.attack ? fighterOne.id : fighterTwo.id
    }

    return fighterOne.speed > fighterTwo.speed ? fighterOne.id : fighterTwo.id
  }
}
