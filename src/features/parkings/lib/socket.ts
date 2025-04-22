import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket | null => {
  const rawSocketFlag = import.meta.env.VITE_SOCKET_ENABLED;
  const rawApiUrl = import.meta.env.VITE_API_URL;

  console.log('VITE_SOCKET_ENABLED:', rawSocketFlag);
  console.log('VITE_API_URL:', rawApiUrl);

  const isSocketEnabled = rawSocketFlag?.toLowerCase() === 'true';

  console.log('Is WebSocket enabled?', isSocketEnabled);

  if (!isSocketEnabled) {
    console.warn('WebSocket connection disabled by environment configuration.');
    return null;
  }

  if (!socket) {
    try {
      // Asegurar que tenga http:// si no tiene protocolo
      let apiUrl = rawApiUrl;

      // Si no tiene protocolo, agregarlo (http o https)
      if (!apiUrl.startsWith('http://') && !apiUrl.startsWith('https://')) {
        apiUrl = `http://${apiUrl}`;
        console.log('No protocol in API URL, defaulting to:', apiUrl);
      }

      // Modificar la URL para que apunte a /socket-io/ (sin puerto)
      let wsUrl = apiUrl.replace(/^http(s)?:\/\//, 'ws://'); // Convertir http:// a ws://
      
      // Si no está el puerto 8080 en la URL, entonces se agrega la ruta correcta
      if (!wsUrl.includes(':8080')) {
        wsUrl = `${wsUrl}/socket-io/`; // Agregar la ruta correcta
      }

      console.log('Connecting to WebSocket at URL:', wsUrl);
      socket = io(wsUrl, {
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