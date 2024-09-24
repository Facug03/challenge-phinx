import { LinearProgress, Typography } from '@mui/material'

interface Props {
  stat: string
  value: number
}

export function Stat({ stat, value }: Props) {
  return (
    <>
      <Typography variant='body2'>{stat}</Typography>

      <LinearProgress
        variant='determinate'
        value={value * 10}
        sx={{
          height: '10px',
          borderRadius: '5px',
          backgroundColor: '#d9d9d9',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#75fb4d'
          },
          marginBottom: '0.5rem'
        }}
      />
    </>
  )
}
