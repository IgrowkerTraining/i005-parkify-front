import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";


import Footer from '../shared/ui/Footer/Footer';
import Header from "../shared/ui/Header";

const PublicLayout = () => (
  <>
    <Header />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Outlet />
    </Container>
    <Footer /> 
  </>
);

export default PublicLayout;
