import styles from "../Auth.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Button, Divider, Typography } from "@mui/material";
import { GoogleIcon } from "./GoogleIcon";
import { grey } from "@mui/material/colors";

import { ReactNode } from "react";

type AuthLayoutProps ={
    children: ReactNode;
  }

const AuthLayout = ({children} : AuthLayoutProps ) => {
  return (
    <>
      <Box
        sx={{
          pl: 4,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Button startIcon={<KeyboardArrowLeftIcon />}>Volver</Button>
      </Box>
      <Box sx={{ px: 2 }}>
        <Box className={styles.registerForm}>
          <Box
            component="img"
            src="/logoParkifyRegisterForm.svg"
            alt="Logo"
            sx={{ width: 100, height: "auto", mb: 4 }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Regístrate
          </Typography>
          <Typography component="h2" variant="body2">
            Crea tu cuenta para que tu estacionamemiento sea visible
          </Typography>
        </Box>
        {children}

        <Box className={styles.registerForm} sx={{pt:0}}>
          <Divider
            sx={{
              fontSize: 12,
              height: 2,
              width: "100%",
              alignItems: "center",
              my: 2,
              color: grey[400],
            }}
          >
            Tambien puedes
          </Divider>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            startIcon={<GoogleIcon />}
            sx={{
              fontSize: 14,
            }}
          >
            Registrarte con Google
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
