import styles from "../Auth.module.css";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { GoogleIcon } from "./GoogleIcon";
import { grey } from "@mui/material/colors";
import logo from "../../../assets/logo/logo-imagotipo-azul.svg"
import { ReactNode } from "react";
import HeaderForm from "./HeaderForm";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  register?: string;
  login?: {
    show: boolean;
    description: string;
    link: string;
  };
  google: string
};

const AuthLayout = ({ children, title, register, login, google }: AuthLayoutProps) => {
  return (
    <>
      <HeaderForm/>
      <Box sx={{ px: 2 }}>
        <Box className={styles.registerForm}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: 100, height: "auto", mb: 3 }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: 600}}
          >
            {title}
          </Typography>
          {register && (
            <Typography component="h2" variant="body2">
              {register}
            </Typography>
          )}
          {login?.show && (
            <Typography component="h2" variant="body2">
              {login.description}{" "}
             
              <Link
                component={RouterLink}
                to="/register"
                sx={{
                  color: "black !important",
                  fontWeight: "bold",
                  textDecorationColor: "black",
                  
                }}
              >
                {login.link}
              </Link>
            </Typography>
          )}
        </Box>
        {children}

        <Box className={styles.registerForm} sx={{ pt: 0 }}>
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
            También puedes
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
            {google} con Google
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
