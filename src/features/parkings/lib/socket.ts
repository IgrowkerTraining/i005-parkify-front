import { io, Socket } from 'socket.io-client'

const SOCKET_URL = 'http://localhost:3000' // Cambiar por la URL real del backend

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    // Crear una nueva instancia de socket.io
    // y conectarse al servidor
    socket = io(SOCKET_URL, {
      // Configuración de la conexión
      // Puedes agregar opciones adicionales aquí según tus necesidades
      autoConnect: false,
      transports: ['websocket'],
    })
  }
  return socket
}
