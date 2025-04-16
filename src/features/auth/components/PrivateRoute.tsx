import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store";

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
