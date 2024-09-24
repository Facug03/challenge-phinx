import { Skeleton, Stack } from '@mui/material'

export function PokemonCardsSkeleton() {
  return (
    <Stack
      sx={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: '1rem',
        marginBottom: '2rem',
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}
    >
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
    </Stack>
  )
}

function PokemonCardSkeleton() {
  return (
    <Skeleton
      variant='rectangular'
      sx={{
        borderRadius: '8px',
        padding: '0.5rem 1rem'
      }}
    >
      <Skeleton
        variant='rectangular'
        sx={{
          minWidth: '100px',
          maxWidth: '200px',
          width: '12vw',
          height: 'auto',
          aspectRatio: '1'
        }}
      />

      <Skeleton variant='text' width='50%' />
    </Skeleton>
  )
}
