import { Pokemon } from '@/src/models/pokemon'
import { config } from '@/src/config'
import { BattleResponse } from './battle-response'

export const createBattle = async (
  fighterOne: Pokemon,
  fighterTwo: Pokemon
): Promise<[null, BattleResponse] | [Error, null]> => {
  try {
    const response = await fetch(`${config.API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fighterOne: {
          id: fighterOne.id,
          name: fighterOne.name,
          attack: fighterOne.attack,
          defense: fighterOne.defense,
          hp: fighterOne.hp,
          speed: fighterOne.speed
        },
        fighterTwo: {
          id: fighterTwo.id,
          name: fighterTwo.name,
          attack: fighterTwo.attack,
          defense: fighterTwo.defense,
          hp: fighterTwo.hp,
          speed: fighterTwo.speed
        }
      })
    })

    if (!response.ok) throw new Error('Something went wrong')

    const data: BattleResponse = await response.json()

    return [null, data]
  } catch (error) {
    if (error instanceof Error) return [error, null]

    return [new Error('Something went wrong'), null]
  }
}
