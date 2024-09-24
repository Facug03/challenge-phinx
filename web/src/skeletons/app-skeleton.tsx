import { Skeleton, Stack } from '@mui/material'
import { PokemonCardsSkeleton } from './pokemon-cards-skeleton'

export function AppSkeleton() {
  return (
    <Stack component='main' sx={{ maxWidth: '1280px', margin: '2rem auto' }}>
      <Skeleton variant='text' sx={{ marginBottom: '2rem', width: '25%', height: '2.5rem' }} />

      <Skeleton variant='text' sx={{ marginBottom: 'rem', width: '20%', height: '2.5rem' }} />

      <PokemonCardsSkeleton />
    </Stack>
  )
}
