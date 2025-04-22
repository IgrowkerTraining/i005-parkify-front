const socketURL = import.meta.env.VITE_API_URL;
const isSocketEnabled = JSON.parse(import.meta.env.VITE_SOCKET_ENABLED.toLowerCase());

if (!isSocketEnabled) {
  console.warn('WebSocket connection disabled by environment configuration.');
  return null;
}

if (socketURL && isSocketEnabled) {
  if (!socket) {
    try {
      const wsURL = socketURL.startsWith('https://') || socketURL.startsWith('http://')
        ? socketURL.replace('http', 'ws') // cambia http:// o https:// a ws:// o wss://
        : 'ws://' + socketURL; // Si no tiene protocolo, añadirlo con ws://

      socket = io(wsURL, {
        autoConnect: false,
        transports: ['websocket'],
      });
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
      socket = null;
    }
  }
}