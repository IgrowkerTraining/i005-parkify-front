import { styled } from "@mui/material/styles";
import { Box, IconButton, Link, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(4, 0),
  marginTop: "auto",
}));

export const LogoImage = styled("img")({
  width: 120,
  height: "auto",
});

export const SocialIcons = styled(Box)({
  display: "flex",
  gap: 16,
  justifyContent: "left",
});

export const SocialButton = styled(IconButton)(({theme}) => ({
  color: theme.palette.common.white,
}));

export const LinkGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 16,
});

export const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // todo alineado a la izquierda
  gap: theme.spacing(2),    // misma separación para todos los elementos del footer
}));
