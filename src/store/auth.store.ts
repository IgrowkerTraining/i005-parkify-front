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
  

  