import { useState } from 'react'
import { Stack, Typography } from '@mui/material'
import useSWR from 'swr'

import { PokemonCard } from '@/src/components/pokemon-card'
import { Battle } from '@/src/components/battle'
import { fetcher } from '@/src/services/fetcher'
import { Pokemon } from '@/src/models/pokemon'
import { AppSkeleton } from '@/src/skeletons/app-skeleton'

export function App() {
  const { data, error, isLoading } = useSWR<Pokemon[]>('/pokemon', fetcher)
  const [battle, setBattle] = useState<{
    fighterOne?: Pokemon
    fighterTwo?: Pokemon
  } | null>(null)

  if (isLoading) return <AppSkeleton />

  if (error || !data) return <Typography variant='h5'>Error: failed to load pokemons</Typography>

  return (
    <Stack component='main' sx={{ maxWidth: '1280px', margin: '2rem auto' }}>
      <Typography variant='h4' component='h1' marginBottom='2rem'>
        Battle of Pokemon
      </Typography>

      <Typography variant='h5' component='h2' marginBottom='1rem'>
        Select your pokemon
      </Typography>

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
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            type='default'
            onClick={() => {
              const removeSelected = data.filter((p) => p.id !== pokemon.id)
              const randomOpponent = removeSelected[Math.floor(Math.random() * removeSelected.length)]

              setBattle({ fighterOne: pokemon, fighterTwo: randomOpponent })
            }}
          />
        ))}
      </Stack>

      {Boolean(battle && battle?.fighterOne && battle.fighterTwo) && (
        <Battle fighterOne={battle!.fighterOne!} fighterTwo={battle!.fighterTwo!} />
      )}
    </Stack>
  )
}
