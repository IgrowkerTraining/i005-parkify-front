import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from "@mui/material/IconButton";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/react.svg"; // Change to new Logo path

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentUserType, setCurrentUserType] = useState<'landing' | 'OwnerNotLogged' | 'OwnerLogged'>('landing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Define the buttons for different user states
  const authenticatedButton = [
    {
      user: "landing",
      buttons: [
        { label: "Inicio", icon: <HomeOutlinedIcon /> },
        { label: "Panel de control", icon: <ManageAccountsOutlinedIcon /> },
        { label: "Mis estacionamientos", icon: <NoCrashOutlinedIcon /> },
        { label: "Salir", icon: <LogoutOutlinedIcon />, variant: "outlined" },
      ],
      menuIcon: <MenuIcon />,
    },
    {
      user: "OwnerNotLogged",
      buttons: [
        { label: "Cómo funciona", icon: <QuestionMarkOutlinedIcon /> },
        { label: "Reseña", icon: <ThreePOutlinedIcon /> },
        { label: "Seguinos", icon: <LanguageOutlinedIcon /> }
      ],
      menuIcon: <MenuIcon />,
    },
    {
      user: "OwnerLogged",
      buttons: [
        { label: "Mi cuenta", icon: <ManageAccountsOutlinedIcon /> },
        { label: "Cerrar Sesión", icon: <LogoutOutlinedIcon />, color: "error.main" },
      ],
      menuIcon: <AccountCircleOutlinedIcon />,
    },
  ]

  // Get the current user configuration
  const currentUserConfig = authenticatedButton.find(user => user.user === currentUserType) || authenticatedButton[0];

  // Handle menu open
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
    <Toolbar >
      {/* Logo */}
      <Box sx={{ flexGrow: 1 }}>
        <img src={Logo} alt="Parkify logo"/>
      </Box>

      {/* Buttons */}
      { isMobile ? (
        <>
        {/* Mobile version */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            {currentUserConfig.menuIcon}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': { 
                  backgroundColor: 'white',
                  color: 'black'
                }
            }}
          >
            { currentUserConfig.buttons.map((button) => (
              <MenuItem 
                key={button.label} 
                onClick={handleMenuClose}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box sx={{ display:"flex", alignItems: "center", justifyContent: "center", color: button.color || "inherit" }}>
                <IconButton color="inherit" sx={{ marginRight: 1}}>
                  {button.icon}
                </IconButton>
                {button.label}
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </>

      ) : (

      ( 
        <Box>
          {/* Desktop version */}
          { currentUserConfig.buttons.map((button) => (
            <Button 
              key={button.label}
              variant={button.variant || "text"}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      )

      )}
    </Toolbar>
  </AppBar>
  );
}

export default Header;