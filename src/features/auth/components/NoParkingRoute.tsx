import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store";
import { useParkingStore } from "../../../store/parking.store";


const NoParkingRoute: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const parkingId = useParkingStore((state) => state.parking.id);

  return (isAuthenticated && !parkingId) ? <Outlet /> : <Navigate to="/profile" replace />

};

export default NoParkingRoute;