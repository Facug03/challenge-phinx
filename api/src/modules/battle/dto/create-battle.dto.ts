import { IsString } from 'class-validator'

export class CreateBattleDto {
  @IsString()
  fighterOneId: string

  @IsString()
  fighterTwoId: string
}
