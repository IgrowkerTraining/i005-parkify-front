import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";



import Footer from '../shared/ui/Footer/Footer';
import Header from "../shared/ui/Header";

const PublicLayout = () => (
  <>
    <Header />
    <Container disableGutters maxWidth={false} sx={{ p:0, mb:4}}>
      <Outlet />
    </Container>
    <Footer /> 
  </>
);

export default PublicLayout;
