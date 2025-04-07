import {create} from 'zustand';
import { persist } from 'zustand/middleware';


// interface AuthState {
//         token: string | null;
//         isAuthenticated: boolean;
//         login:(token: string) => void;
//         logout: () => void;
//         checkAuth: () => void;
//         getAuthState: () => AuthState;
// }
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      login: (token) => {
        set({ token, isAuthenticated: true });
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

// export const useAuthStore = create<AuthState>((set, get) => ({
//     token: localStorage.getItem("token") || null,
//     isAuthenticated: !!localStorage.getItem("token"),
  
//     login: (token) => {
//       localStorage.setItem("token", token);
//       set({ token, isAuthenticated: true });
//     },
  
//     logout: () => {
//       localStorage.removeItem("token");
//       set({ token: null, isAuthenticated: false });
//     },
  
//     checkAuth: () => {
//       const token = localStorage.getItem("token");
//       set({ token, isAuthenticated: !!token });
//     },
//     getAuthState: () => get(),
//   }));
  

  