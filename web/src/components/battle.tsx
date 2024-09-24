import { useEffect, useRef, useState } from 'react'
import { Alert, Button, Stack, Typography } from '@mui/material'

import { PokemonCard } from '@/src/components/pokemon-card'
import { Pokemon } from '@/src/models/pokemon'
import { createBattle } from '../services/battle/battle'

interface Props {
  fighterOne: Pokemon
  fighterTwo: Pokemon
}

export function Battle({ fighterOne, fighterTwo }: Props) {
  const [winner, setWinner] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const lastBattle = useRef<string | null>(null)

  const onStartBattle = () => {
    if (lastBattle.current === `${fighterOne.id}-${fighterTwo.id}` && winner) return

    setLoading(true)
    createBattle(fighterOne, fighterTwo).then(([errorRes, data]) => {
      if (errorRes) {
        if (winner) setWinner(null)
        setLoading(false)
        return setError('An error ocurred')
      }

      if (error) setError(null)

      setLoading(false)
      setWinner(data.winner.id === fighterOne.id ? fighterOne : fighterTwo)
      lastBattle.current = `${fighterOne.id}-${fighterTwo.id}`
    })
  }

  useEffect(() => {
    setWinner(null)
    setError(null)
  }, [`${fighterOne.id}-${fighterTwo.id}`])

  return (
    <>
      {error && (
        <Alert severity='error' sx={{ marginBottom: '2rem' }}>
          {error}
        </Alert>
      )}

      {winner && (
        <Alert severity='info' icon={false} sx={{ marginBottom: '2rem', outline: 1, boxShadow: 5 }}>
          <Typography
            variant='h5'
            sx={{
              color: '#000'
            }}
          >
            {winner.name} wins!
          </Typography>
        </Alert>
      )}

      <Stack
        sx={{
          flexDirection: { sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          rowGap: '1rem'
        }}
      >
        <PokemonCard pokemon={fighterOne} type='stats' />

        <Button
          disabled={loading}
          variant='contained'
          size='large'
          sx={{
            height: '2.75rem',
            textTransform: 'none',
            backgroundColor: '#377538',
            fontSize: '1rem',
            fontWeight: 400
          }}
          onClick={onStartBattle}
        >
          Start Battle
        </Button>

        <PokemonCard pokemon={fighterTwo} type='stats' />
      </Stack>
    </>
  )
}
