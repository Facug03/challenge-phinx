import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { Pokemon } from './entities/pokemon.entity'

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>) {}

  create(createPokemonDto: CreatePokemonDto) {
    return this.pokemonRepository.save(createPokemonDto)
  }

  findAll() {
    return this.pokemonRepository.find()
  }
}
