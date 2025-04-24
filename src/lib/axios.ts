import axios from 'axios';
import { handleError } from '../shared/utils/handleError';
import { getToken } from '../store/auth.store';

// 1. Crear la instancia de axios
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usa la URL del .env.local
  timeout: 10000, // Tiempo máximo de espera de la petición (opcional)
});

// 2. Interceptor de request
api.interceptors.request.use(
  (config) => {
    // Aquí podrías añadir el token si existe en tu store (por ejemplo Zustand)
    const token = getToken();
    // Asegúrate de que config.headers esté definido
    config.headers = config.headers || {};

    // Si es una instancia de AxiosHeaders, usamos set()
    if (typeof config.headers.set === 'function') {
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }

      // Solo establecer Content-Type si no es FormData
      if (!(config.data instanceof FormData)) {
        config.headers.set('Content-Type', 'application/json');
      }
    } else {
      // fallback si headers es un objeto plano
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      if (!(config.data instanceof FormData)) {
        config.headers['Content-Type'] = 'application/json';
      }
    }
    return config;
  },
  (error) => {
    // Si hay un error antes de enviar la request
    handleError(error);
    return Promise.reject(error);
  }
);

// 3. Interceptor de response
api.interceptors.response.use(
  (response) => {
    // Si todo va bien, simplemente devuelve la respuesta
    return response;
  },
  (error) => {
    // Si hay un error en la respuesta, llamamos a handleError
    handleError(error);
    return Promise.reject(error);
  }
);

