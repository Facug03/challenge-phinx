import { Pokemon } from '@/src/modules/pokemon/entities/pokemon.entity'
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'

@Entity()
export class Battle {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'winnerId' })
  winner: Pokemon

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'loserId' })
  loser: Pokemon

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date
}
