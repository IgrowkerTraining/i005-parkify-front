import { useEffect } from 'react'
import { getSocket } from '../lib/socket'
import { useParkingStore } from '../../../store/parking.store';
//import { useParkingStore } from '../store/parkingStore'

/**
 * Hook para manejar la conexión del socket y escuchar eventos de disponibilidad
 * @returns {void}
 */
export const useAvailabilitySocket = (): void => {
  const setAvailability = useParkingStore((state) => state.setAvailability);  // Sacamos el hook de aquí


  // Conectar al socket y escuchar eventos de disponibilidad
  useEffect(() => {
    // Obtener la instancia del socket
    const socket = getSocket()

    // Solo conectar si no está ya conectado
    if (!socket.connected) socket.connect()

    // Evento: alguien modificó la disponibilidad
    socket.on('availabilityUpdated', ({ parkingId, slots }: { parkingId: string, slots: number }) => {
    // Actualizar el estado de disponibilidad en el store
    setAvailability(parkingId, slots);

    // Esto se hace para que el componente que lo necesite se vuelva a renderizar
      //useParkingStore.getState().setAvailability(parkingId, slots) //sacarlo del useeffct
    })

    return () => {
      // Desconectar el socket al desmontar el componente
      // y limpiar el evento de disponibilidad
      socket.off('availabilityUpdated')
    }
  }, [])
}
