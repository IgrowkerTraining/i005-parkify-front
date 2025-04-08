import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Cambiar luego por lógica real
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Botones cuando no estás logueado
  const guestButtons = [
    { label: "Sobre nosotros", icon: <Diversity3OutlinedIcon/>, sectionId: "sobre-nosotros" },
    { label: "Cómo funciona", icon: <QuestionMarkOutlinedIcon />, sectionId: "como-funciona" },
    { label: "Reseñas", icon: <ThreePOutlinedIcon />, sectionId: "reseñas" },
    { label: "Síguenos", icon: <LanguageOutlinedIcon />, sectionId: "siguenos" },
  ];

  // Botones cuando estás logueado
  const loggedInButtons = [
    { label: "Mi cuenta", icon: <ManageAccountsOutlinedIcon />, path: "/" },
    { label: "Cerrar sesión", icon: <LogoutOutlinedIcon />, path: "/", color: "error.main" },
  ];

  const buttonsToShow = isLoggedIn ? loggedInButtons : guestButtons;

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId?: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (isMobile) handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
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
                    onClick={() => scrollToSection(button.sectionId)}
                    component={Link}
                    to={button.path || "#"}
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
                  component={Link}
                  onClick={() => scrollToSection(button.sectionId)}
                  to={button.path || "#"}
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
