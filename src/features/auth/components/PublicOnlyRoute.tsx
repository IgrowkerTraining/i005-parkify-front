import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store";

const PublicOnlyRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/perfil" replace />;
};

export default PublicOnlyRoute;
