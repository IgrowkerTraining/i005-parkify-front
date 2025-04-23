import { useEffect } from 'react';
import { getSocket } from '../lib/socket';  // Este ahora puede ser innecesario si usas directamente WebSocket
import { useParkingStore } from '../../../store/parking.store';

/**
 * Hook para manejar la conexión del socket y escuchar eventos de disponibilidad
 * @returns {void}
 */
export const useAvailabilitySocket = (): void => {
  const setAvailability = useParkingStore((state) => state.setAvailability);

  useEffect(() => {
    // Crear la instancia del WebSocket con la URL correcta
    const socket = new WebSocket('ws://34.107.135.109/socket-io');  // Reemplaza con tu URL de WebSocket correcta

    // Manejar la apertura de la conexión
    socket.addEventListener('open', () => {
      console.log('WebSocket connected');
    });

    // Evento: alguien modificó la disponibilidad
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data); // Parsear el mensaje recibido
      if (data && data.parkingId && data.slots !== undefined) {
        setAvailability(data.parkingId, data.slots); // Actualizar el estado de disponibilidad en el store
      }
    });

    // Evento de error
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    // Evento de cierre de conexión
    socket.addEventListener('close', () => {
      console.log('WebSocket closed');
    });

    // Cleanup: Cerrar la conexión y eliminar listeners cuando el componente se desmonte
    return () => {
      socket.close(); // Cerrar el WebSocket
      socket.removeEventListener('message', () => {}); // Eliminar el listener de mensajes
      socket.removeEventListener('open', () => {}); // Eliminar el listener de apertura
      socket.removeEventListener('error', () => {}); // Eliminar el listener de error
      socket.removeEventListener('close', () => {}); // Eliminar el listener de cierre
    };
  }, [setAvailability]); // El hook se ejecuta solo cuando `setAvailability` cambia
};

