let socket: WebSocket | null = null;

export const getSocket = (): WebSocket | null => {
  const isSocketEnabled = import.meta.env.VITE_SOCKET_ENABLED?.toLowerCase() === 'true';
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!isSocketEnabled) {
    console.warn('WebSocket deshabilitado por configuración.');
    return null;
  }

  const wsUrl = apiUrl.replace(/^http/, 'ws') + '/ws'; // Ej: ws://34.107.135.109/ws
  console.log('🧩 Conectando a WebSocket en:', wsUrl);

  // Verificar si ya existe una conexión o si la conexión está cerrada
  if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log('✅ WebSocket conectado.');
    };

    socket.onmessage = (event) => {
      console.log('📨 Mensaje recibido:', event.data);
    };

    socket.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.warn('🔌 WebSocket cerrado:', event.reason);
    };
  }

  return socket;
};


