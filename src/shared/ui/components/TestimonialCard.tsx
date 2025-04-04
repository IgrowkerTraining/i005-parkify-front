import React from "react";
import { Stack,Card, Typography, Box, Avatar } from "@mui/material";
import FormatQuote from "@mui/icons-material/FormatQuote";

const TestimonialCard : React.FC = () => {
    return (
      <Stack spacing={2} alignItems="center">
        {/* Contenedor del testimonio */}
        <Card
          sx={{
            backgroundColor: "#F6FFFC",
            padding: 3,
            maxWidth: 400,
            textAlign: "center",
            position: "relative",
            borderRadius: 2,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            width: { xs: "100%", md: "100%" } 
          }}
        >
          <FormatQuote sx={{ fontSize: 40, color: "#3445c5" }} />
          <Typography variant="body1" color="text.primary" 
           
          >
            "When our designs need an expert opinion or approval, I know I can rely on your agency. 
            Thank you for all your help."
          </Typography>
          {/* Triángulo en la parte inferior */}
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "15px solid #F6FFFC",
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
              backgroundColor: "#A1ABFF",
              border: "2px dashed #3445c5",
            }}
          />
          <Typography fontWeight="bold" color="#3445c5">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designation
          </Typography>
        </Stack>
      </Stack>
    );
  };

  export default TestimonialCard;