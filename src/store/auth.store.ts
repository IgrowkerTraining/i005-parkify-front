import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  email: string,
  password: string
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
        password: ""
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


  