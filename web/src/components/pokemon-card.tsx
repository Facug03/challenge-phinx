import { Button, Divider, Stack, Typography } from '@mui/material'

import { Pokemon } from '@/src/models/pokemon'
import { Stat } from './stat'

interface Props {
  pokemon: Pokemon
  type: 'default' | 'stats'
  onClick?: () => void
}

export function PokemonCard({ pokemon, type, onClick }: Props) {
  if (type === 'stats') {
    return (
      <Stack
        component='article'
        sx={{
          width: 'max-content',
          boxShadow: 7,
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          flexDirection: 'column'
        }}
      >
        <img
          src={pokemon.imageUrl}
          alt='Pikachu'
          style={{ alignSelf: 'center', minWidth: '150px', width: '16vw', height: 'auto' }}
        />

        <Typography
          variant='h5'
          component='h3'
          sx={{
            color: '#000',
            textTransform: 'none',
            alignSelf: 'start'
          }}
        >
          {pokemon.name}
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Stat stat='HP' value={pokemon.hp} />
        <Stat stat='Attack' value={pokemon.attack} />
        <Stat stat='Defense' value={pokemon.defense} />
        <Stat stat='Speed' value={pokemon.speed} />
      </Stack>
    )
  }

  return (
    <Button
      onClick={onClick}
      variant='text'
      sx={{
        boxShadow: 6,
        borderRadius: '8px',
        padding: '0.5rem 1rem',
        flexDirection: 'column'
      }}
    >
      <img
        src={pokemon.imageUrl}
        alt='Pikachu'
        style={{
          alignSelf: 'center',
          minWidth: '100px',
          maxWidth: '200px',
          width: '12vw',
          height: 'auto',
          aspectRatio: '1'
        }}
        sizes='(max-width: 600px) 100px, (min-width: 1200px) 200px, 12vw'
      />

      <Typography
        variant='body1'
        component='h3'
        sx={{
          color: '#000',
          textTransform: 'none',
          alignSelf: 'start'
        }}
      >
        {pokemon.name}
      </Typography>
    </Button>
  )
}
