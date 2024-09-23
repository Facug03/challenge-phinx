import { IsString, IsNumber } from 'class-validator'

export class CreatePokemonDto {
  @IsString()
  id: string

  @IsString()
  name: string

  @IsNumber()
  attack: number

  @IsNumber()
  defense: number

  @IsNumber()
  hp: number

  @IsNumber()
  speed: number

  @IsString()
  type: string

  @IsString()
  imageUrl: string
}
