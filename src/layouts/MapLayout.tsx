import { Outlet } from "react-router-dom";
import Header from "../shared/ui/Header";

const MapLayout = () => (
  <>
    <Header />    
    <Outlet />
  </>
);

export default MapLayout;
