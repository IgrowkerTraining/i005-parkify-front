import React from "react";
import {
  Stack,
  Card,
  Typography,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack spacing={2} alignItems="center">
      {/* Contenedor del testimonio */}
      <Card
        sx={{
          backgroundColor: theme.palette.neutral?.[100],
          padding: 3,
          maxWidth: 400,
          textAlign: "center",
          position: "relative",
          borderRadius: 2,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          width: { xs: "100%", md: "100%" },
        }}
      >
        <FormatQuoteIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
        <Typography variant="body1" color="text.primary">
          “La función de recomendaciones me llevó al estacionamiento perfecto, justo donde necesitaba.”
        </Typography>

        {/* Triángulo en la parte inferior */}
        <Box
          sx={{
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: `15px solid ${theme.palette.neutral?.[100]}`,
            position: "absolute",
            bottom: -15,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Card>

      {/* Sección del usuario */}
      <Stack spacing={1} alignItems="center">
        <Avatar
          sx={{
            width: 60,
            height: 60,
            backgroundColor: theme.palette.tertiary?.[500],
            border: `2px dashed ${theme.palette.primary.main}`,
          }}
        />
        <Typography fontWeight="bold" color="primary.main">
          Martín Núñez
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Comercial
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TestimonialCard;
