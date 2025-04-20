import { io, Socket } from 'socket.io-client'

// Cambiar por la URL real del backend

let socket: Socket | null = null

export const getSocket = (): Socket | null => {
  const isSocketEnabled = import.meta.env.VITE_SOCKET_ENABLED === true;

  if (!isSocketEnabled) {
    console.warn('WebSocket connection disabled by environment configuration.');
    return null;
  }
  if (!socket) {
    try {
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
}
