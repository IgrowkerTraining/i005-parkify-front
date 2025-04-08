import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TestimonialCard from "./TestimonialCard";

const Home: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Sección Header */}
      <Box
        sx={{
          border: "2px dashed #3445c5",
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="primary">
          Parkify
        </Typography>
        <Typography variant="h5">Encuentra tu parking más cercano</Typography>
        <Typography sx={{ mt: 2, maxWidth: "600px", margin: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          ¿Eres dueño de estacionamiento?
        </Button>
      </Box>

      {/* Sección Nosotros */}
      <Grid container spacing={4} alignItems="center" mt={4} columns={{ xs: 12, md: 12 }}>
        <Grid gridColumn={{ xs: "span 12", md: "span 6" }} id="sobre-nosotros">
          <Typography variant="h4" color="primary" fontWeight="bold">
            Nosotros
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            nobis? Odit eos a necessitatibus illum adipisci commodi placeat
            consequuntur sit reprehenderit. Sequi optio delectus, et
            consequuntur placeat commodi natus illum?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            fugit eligendi officiis ea quidem distinctio, aspernatur dolor!
            Similique iusto doloremque, numquam unde animi eveniet quis quos
            nemo magnam, porro recusandae.
          </Typography>
        </Grid>

        <Grid gridColumn={{ xs: "span 12", md: "span 6" }}>
          <Grid container spacing={2} columns={{ xs: 12 }}>
            {["Reservar plaza de estacionamiento", "Ver zonas con mayor disponibilidad", "Quiero registrar mi estacionamiento"].map((title, index) => (
              <Grid key={index} gridColumn={{ xs: "span 12" }}>
                <Card
                  sx={{
                    backgroundColor: "#A1ABFF",
                    color: "white",
                    boxShadow: 3,
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      padding: 1,
                    }}
                  >
                    <TimeToLeaveIcon />
                  </Box>

                  <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Cómo funciona */}
      <Box sx={{ mt: 8, textAlign: "center" }} id="como-funciona">
        <Typography variant="h4" color="primary" fontWeight="bold">
          Cómo funciona
        </Typography>
        <Grid container spacing={3} justifyContent="center" columns={{ xs: 12, md: 12 }} sx={{ mt: 3 }}>
          {["Paso 1", "Paso 2", "Paso 3"].map((step, index) => (
            <Grid key={index} gridColumn={{ xs: "span 12", md: "span 4" }} sx={{ textAlign: "center" }}>
              <AccessTimeFilledIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" fontWeight="bold">
                {step}
              </Typography>
              <Typography>Lorem ipsum dolor sit amet...</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Reseñas */}
      <Box sx={{ mt: 8, textAlign: "center" }} id="reseñas">
        <Typography variant="h4" color="primary" fontWeight="bold">
          Reseñas
        </Typography>
        <Grid container spacing={3} justifyContent="center" columns={{ xs: 12, md: 12 }} sx={{ mt: 3 }}>
          {[1, 2, 3].map((_, index) => (
            <Grid key={index} gridColumn={{ xs: "span 12", md: "span 4" }}>
              <TestimonialCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
