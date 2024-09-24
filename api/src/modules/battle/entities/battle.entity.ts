import { Pokemon } from '@/src/modules/pokemon/entities/pokemon.entity'
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'

@Entity()
export class Battle {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn({ name: 'winnerId' })
  winner: Pokemon

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn({ name: 'loserId' })
  loser: Pokemon

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: string
}
