import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logoHeader from "../../assets/logo/logo-blanco.svg"
import { useAuthStore } from "../../store/auth.store";
import { useParkingStore } from "../../store/parking.store";
import { getHeaderRef } from "../hooks/useScrollToHeader";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

type HeaderButton = {
  label: string;
  icon: React.ReactNode;
  path?: string;
  sectionId?: string;
  action?: string;
  color?: string;
};

const Header: React.FC = () => {
  const ref = getHeaderRef(); //referencio header para luego hacer scroll en registro y update
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout); // Solo si ya tienes una función logout
  const clearParkingData = useParkingStore((state) => state.clearParkingData); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  // Botones cuando no estás logueado
  const guestButtons: HeaderButton[] = [
    { label: "Sobre nosotros", icon: <Diversity3OutlinedIcon/>, sectionId: "sobre-nosotros" },
    { label: "Cómo funciona", icon: <QuestionMarkOutlinedIcon />, sectionId: "como-funciona" },
    { label: "Reseñas", icon: <ThreePOutlinedIcon />, sectionId: "reseñas" },
    { label: "Síguenos", icon: <LanguageOutlinedIcon />, sectionId: "siguenos" },
  ];

  // Botones cuando estás logueado
  const loggedInButtons: HeaderButton[] = [
    { label: "Mi cuenta", icon: <ManageAccountsOutlinedIcon />, path: "/profile" },
    { label: "Plazas disponibles", icon: <DirectionsCarIcon />, path: "/parking-availability",  },
    { label: "Cerrar sesión", icon: <LogoutOutlinedIcon />, action: "logout", color: "error.main" },
  ];

  const buttonsToShow = isLoggedIn ? loggedInButtons : guestButtons;

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (button: any) => {
    if (button.action === "logout") {
      logout();   
      clearParkingData();        
      navigate("/");      
    } else if (button.path) {
      navigate(button.path); 
    } else if (button.sectionId) {
      if (location.pathname === "/") {
        const el = document.getElementById(button.sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate("/", { state: { scrollTo: button.sectionId } });
      }
    }
    if (isMobile) handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          ref={ref}
          sx={{
            flexGrow: 1,
            maxWidth: 1152,
            width: "100%",
            mx: "auto",
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src={logoHeader}
              alt="Logo"
              sx={{ width: 140, height: "auto", pt: 2 }}
            />
          </Box>

          {/* Botones */}
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                {buttonsToShow.map((button) => (
                  <MenuItem
                    key={button.label}
                    onClick={() => handleButtonClick(button)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: button.color || "inherit",
                      }}
                    >
                      <IconButton color="inherit" sx={{ mr: 1 }}>
                        {button.icon}
                      </IconButton>
                      {button.label}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box>
              {buttonsToShow.map((button) => (
                <Button
                  key={button.label}
                  onClick={() => handleButtonClick(button)}
                  sx={{
                    color: button.color || "inherit",
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
