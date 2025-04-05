import {create} from 'zustand';


interface AuthState {
        token: string | null;
        isAuthenticated: boolean;
        login:(token: string) => void;
        logout: () => void;
        checkAuth: () => void;
        getAuthState: () => AuthState;
}


export const useAuthStore = create<AuthState>((set, get) => ({
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  
    login: (token) => {
      localStorage.setItem("token", token);
      set({ token, isAuthenticated: true });
    },
  
    logout: () => {
      localStorage.removeItem("token");
      set({ token: null, isAuthenticated: false });
    },
  
    checkAuth: () => {
      const token = localStorage.getItem("token");
      set({ token, isAuthenticated: !!token });
    },
    getAuthState: () => get(),
  }));
  

  