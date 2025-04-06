import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";


const LayoutAuth = () => (
    <>
      <Container disableGutters maxWidth={false} sx={{ p:0, mb:4}}>
        <Outlet />
      </Container>
    </>
  );
  
  export default LayoutAuth;