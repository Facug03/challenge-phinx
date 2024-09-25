import { useState } from 'react'
import { Stack, Typography } from '@mui/material'
import useSWR from 'swr'

import { PokemonCard } from '@/src/components/pokemon-card'
import { Battle } from '@/src/components/battle'
import { fetcher } from '@/src/services/fetcher'
import { Pokemon } from '@/src/models/pokemon'
import { AppSkeleton } from '@/src/skeletons/app-skeleton'
import { getRandomArrayElement } from '@/src/utils/get-random-element'

export function App() {
  const { data, error, isLoading } = useSWR<Pokemon[]>('/pokemon', fetcher)
  const [battle, setBattle] = useState<{
    fighterOne?: Pokemon
    fighterTwo?: Pokemon
  } | null>(null)

  if (isLoading) return <AppSkeleton />

  if (error || !data) return <Typography variant='h5'>Error: failed to load pokemons</Typography>

  const onSelectPokemon = (pokemon: Pokemon) => {
    const removeSelected = data.filter((p) => p.id !== pokemon.id)
    const randomOpponent = getRandomArrayElement(removeSelected)

    if (battle?.fighterTwo?.id === randomOpponent.id) {
      const removeOponent = removeSelected.filter((p) => p.id !== randomOpponent.id)
      const newRandomOpponent = getRandomArrayElement(removeOponent)

      setBattle({ fighterOne: pokemon, fighterTwo: newRandomOpponent })

      return
    }

    setBattle({ fighterOne: pokemon, fighterTwo: randomOpponent })
  }

  return (
    <Stack component='main' sx={{ maxWidth: '1280px', margin: '2rem auto' }}>
      <Typography variant='h4' component='h1' marginBottom='2rem'>
        Battle of Pokemon
      </Typography>

      <Typography variant='h5' component='h2' marginBottom='1rem'>
        Select your pokemon
      </Typography>

      {data.length === 0 && (
        <Typography variant='h5' component='h2' marginBottom='1rem'>
          No pokemons available
        </Typography>
      )}

      <Stack
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: '1rem',
          marginBottom: '2rem',
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}
      >
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} type='default' onClick={() => onSelectPokemon(pokemon)} />
        ))}
      </Stack>

      {Boolean(battle && battle?.fighterOne && battle.fighterTwo) && (
        <Battle fighterOne={battle!.fighterOne!} fighterTwo={battle!.fighterTwo!} />
      )}
    </Stack>
  )
}
