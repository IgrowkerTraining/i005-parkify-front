import { FormUserValues, FormValues } from '../types';
import { api } from './../../../lib/axios';
import { AxiosError } from 'axios'; // Importante importar esto

// Función para registrarse
export async function register(data: FormUserValues) {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw error as AxiosError; // 👈 Propaga el error para capturarlo luego en la página
  }
}

// Función para iniciar sesión
export async function loginService (data: FormValues) {
  try {
    const response = await api.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

// Función para obtener datos del usuario actual
export async function me() {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
