import { styled } from "@mui/material/styles";
import { Box, IconButton, Link, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#3445C5",
  color: "#FFFFFF",
  padding: theme.spacing(4, 0),
  marginTop: "auto",
}));

export const LogoImage = styled("img")({
  width: 120,
  height: "auto",
  marginBottom: 24,
});

export const SocialIcons = styled(Box)({
  display: "flex",
  gap: 16,
  justifyContent: "center",
  marginBottom: 24,
});

export const SocialButton = styled(IconButton)({
  color: "#FFFFFF",
});

export const LinkGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 16,
});

export const FooterLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

export const LegalText = styled(Typography)({
  marginTop: 32,
  fontSize: 12,
  textAlign: "left",
  color: "#FFFFFF",
});