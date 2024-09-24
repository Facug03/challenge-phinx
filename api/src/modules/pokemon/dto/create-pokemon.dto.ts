import { IsString, IsUrl, IsInt, Min } from 'class-validator'

export class CreatePokemonDto {
  @IsString()
  id: string

  @IsString()
  name: string

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

  @IsString()
  type: string

  @IsUrl()
  imageUrl: string
}
