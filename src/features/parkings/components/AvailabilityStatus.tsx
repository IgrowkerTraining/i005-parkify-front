//import { useParkingStore } from '../store/parkingStore'
import { Chip } from '@mui/material'
import { useParkingStore } from '../../../store/parking.store'

interface Props {
  parkingId: string
}

export const AvailabilityStatus = ({ parkingId }: Props) => {
  // Obtener la disponibilidad del parking desde el store
  // parkingId es el ID del parking que se pasa como prop al componente
  const slots = useParkingStore((state) => state.availability[parkingId])
  if (typeof slots !== 'number') return null

  // Si no hay disponibilidad, retornar null
  // Esto es útil para evitar renderizar el componente si no hay datos
  //if (slots === undefined) return null

  return (
    // Mostrar un Chip de Material UI con el número de plazas disponibles
    <Chip
  label={`${slots} plaza${slots === 1 ? '' : 's'}`}
  variant="filled" // 👈 sin borde
  sx={{
    bgcolor: "#f5f5f5",     // igual al de la hora
    color: "text.primary",  // texto como el resto
    fontWeight: 500,
    borderRadius: 2,
  }}
/>

  )
}
