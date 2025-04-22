import React from "react";
import { Stack,Card, Typography, Box, Avatar } from "@mui/material";
import FormatQuote from "@mui/icons-material/FormatQuote";
import avatar from "../../../assets/avatar.svg"
const TestimonialCard : React.FC = () => {
    return (
      <Stack spacing={4} alignItems="center" position="relative" mx={2}>
        {/* Contenedor del testimonio */}
        <Card
          sx={{
            backgroundColor: "tertiary.100",
            padding: 4,
            px:9,
            maxWidth: 400,
            textAlign: "center",
            boxShadow: "none",
            borderRadius: 0,
            zIndex: 1,
            minHeight: '250px',
            // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            width: { xs: "100%", md: "100%" } 
          }}
        >
          <FormatQuote sx={{ fontSize: 40, color: "#3445c5" }} />
          <Typography variant="body1" color="text.primary" 
          >
            La función de recomendaciones me llevó al estacionamiento perfecto, justo donde necesitaba.
          </Typography>
          
        </Card>
          {/* Triángulo en la parte inferior */}
        <Box
            sx={{
              width: 10,
              height: 10,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "15px solid #EBEDFF",
              position: "absolute",
              bottom:{ xs:"8.9rem", sm:"9.21rem", md:"9.25rem"},
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10
            }}
          />
        {/* Sección del usuario */}
        <Stack spacing={1} alignItems="center" >
          <Avatar
            src={avatar}
            sx={{
              width: 60,
              height: 60,
            }}
          />
          <Typography variant="body1" color="primary">
          Martín Núñez
          </Typography>
          <Typography variant="body1" color="primary" fontWeight={300}>
            Comercial
          </Typography>
        </Stack>
      </Stack>
    );
  };

  export default TestimonialCard;