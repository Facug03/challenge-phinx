import { Controller, Get, Post, Body } from '@nestjs/common'
import { PokemonService } from './pokemon.service'
import { CreatePokemonDto } from './dto/create-pokemon.dto'

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto)
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll()
  }
}
