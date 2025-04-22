import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  email: string,
}
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      user: {
        email: "",
      },
      login: (token, user) => {
        set({ 
          token, 
          isAuthenticated: true,
          user
        });
      },

      logout: () => {
        set({ token: null, isAuthenticated: false });
      },
      
    }),
    {
      name: "auth-storage",
    }
  )
);

//funcion que devuelve el token, leo directo del localstorage sin depender 
// de si la store se cargo o no
//sirve para usarlo en el interceptor de axios q es algo q se ejecuta temprano
export const getToken = (): string | null => {
  const persisted = localStorage.getItem("auth-storage");
  if (!persisted) return null;
  const parsed = JSON.parse(persisted);
  return parsed.state.token;
};


  