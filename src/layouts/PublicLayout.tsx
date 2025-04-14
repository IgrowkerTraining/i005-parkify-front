import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";



import Footer from '../shared/ui/Footer/Footer';
import Header from "../shared/ui/Header";
import { Box } from "@mui/material";

const PublicLayout = () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Header />
    <Container disableGutters maxWidth={false} sx={{flexGrow: 1, p:0, mb:4}}>
      <Outlet />
    </Container>
    <Footer /> 
  </Box>
);

export default PublicLayout;
