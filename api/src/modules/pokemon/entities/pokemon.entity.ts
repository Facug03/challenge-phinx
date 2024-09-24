import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string

  @Column({ unique: true })
  name: string

  @Column()
  attack: number

  @Column()
  defense: number

  @Column()
  hp: number

  @Column()
  speed: number

  @Column()
  type: string

  @Column()
  imageUrl: string
}
