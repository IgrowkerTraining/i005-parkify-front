import { useEffect } from 'react'
import { useParkingStore } from '../store/parkingStore'

export const useMockAvailabilityUpdates = () => {
  // Simular actualizaciones de disponibilidad cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const randomSlots = Math.floor(Math.random() * 10)
      // Simular un ID de parking ficticio
      // En un caso real, esto vendría del servidor o de la base de datos
      const fakeParkingId = 'mock-parking-1'
      // Actualizar la disponibilidad en el store
      // Esto se hace para que el componente que lo necesite se vuelva a renderizar
      useParkingStore.getState().setAvailability(fakeParkingId, randomSlots)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
}
