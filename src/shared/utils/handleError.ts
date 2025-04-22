import { AxiosError } from 'axios';
//import { toast } from 'react-toastify';

// Función reutilizable para manejar errores de API
export function handleError(error: AxiosError) {
  let message = 'Error inesperado en el servidor';

  if (error.response) {
    // El servidor respondió con un status fuera de 2xx
    message = (error.response.data as any).message || message;
    //toast.error(message);
  } else if (error.request) {
    // La request fue hecha pero no hubo respuesta
    message = 'No hay respuesta del servidor. Intenta más tarde.';
    //toast.error(message);
  } else {
    // Algo pasó configurando la request
    message = 'Error al preparar la solicitud.';
    //toast.error(message);
  }
  return message; // 👈 Retornamos el mensaje que mostramos
}
