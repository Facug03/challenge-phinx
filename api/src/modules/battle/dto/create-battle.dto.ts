import { Type } from 'class-transformer'
import { IsInt, IsString, Min, ValidateNested } from 'class-validator'

class PokemonStatsDto {
  @IsString()
  id: string

  @IsInt()
  @Min(0)
  attack: number

  @IsInt()
  @Min(0)
  defense: number

  @IsInt()
  @Min(0)
  hp: number

  @IsInt()
  @Min(0)
  speed: number
}

export class CreateBattleDto {
  @ValidateNested()
  @Type(() => PokemonStatsDto)
  fighterOne: PokemonStatsDto

  @ValidateNested()
  @Type(() => PokemonStatsDto)
  fighterTwo: PokemonStatsDto
}
