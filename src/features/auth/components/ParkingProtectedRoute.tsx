import { Navigate, Outlet } from "react-router-dom";
import { useParkingStore } from "../../../store/parking.store";
import { useAuthStore } from "../../../store/auth.store";


const ParkingProtectedRoute: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const parkingId = useParkingStore((state) => state.parking.id); 

  if (!isAuthenticated) return <Navigate to="/" replace />;
  if (!parkingId) return <Navigate to="/profile" replace />;
  return <Outlet />;
};

export default ParkingProtectedRoute;