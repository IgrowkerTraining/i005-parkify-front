import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const PublicLayout: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default PublicLayout;