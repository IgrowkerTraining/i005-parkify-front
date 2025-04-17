import { useParkingStore } from '../store/parkingStore'
import { Chip } from '@mui/material'

interface Props {
  parkingId: string
}

export const AvailabilityStatus = ({ parkingId }: Props) => {
  // Obtener la disponibilidad del parking desde el store
  // parkingId es el ID del parking que se pasa como prop al componente
  const slots = useParkingStore((state) => state.availability[parkingId])

  // Si no hay disponibilidad, retornar null
  // Esto es útil para evitar renderizar el componente si no hay datos
  if (slots === undefined) return null

  return (
    // Mostrar un Chip de Material UI con el número de plazas disponibles
    <Chip
      label={`${slots} plaza${slots === 1 ? '' : 's'} disponible${slots === 1 ? '' : 's'}`}
      color={slots > 0 ? 'success' : 'error'}
      variant="outlined"
      sx={{ bgcolor: "#f5f5f5", fontWeight: 500, borderRadius: 2 }}
    />
  )
}
