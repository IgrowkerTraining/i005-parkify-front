import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket | null => {
  // Imprime el valor de la variable VITE_SOCKET_ENABLED antes de compararla
  console.log('VITE_SOCKET_ENABLED:', import.meta.env.VITE_SOCKET_ENABLED);

  // Convertir a minúsculas y luego hacer el parseo
  const isSocketEnabled = JSON.parse(import.meta.env.VITE_SOCKET_ENABLED.toLowerCase());

  // Imprime el valor de isSocketEnabled después de parsearlo
  console.log('Is WebSocket enabled?', isSocketEnabled);

  if (!isSocketEnabled) {
    console.warn('WebSocket connection disabled by environment configuration.');
    return null;
  }

  if (!socket) {
    try {
      // Intenta crear la conexión con WebSocket e imprime el URL de la API
      console.log('Connecting to WebSocket at URL:', import.meta.env.VITE_API_URL);
      socket = io(import.meta.env.VITE_API_URL, {
        autoConnect: false,
        transports: ['websocket'],
      });
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
      socket = null;
    }
  }

  return socket;
};