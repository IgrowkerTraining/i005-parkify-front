import { Outlet } from "react-router-dom";
import Header from "../shared/ui/Header";
import MapControls from "../features/maps/components/MapControls";

const MapLayout = () => (
  <>
    <Header />
    <MapControls/>
    <Outlet />
  </>
);

export default MapLayout;
