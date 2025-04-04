import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid,Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import TestimonialCard from "./TestimonialCard";

const Home : React.FC = () => {
  return (
    <Container  sx={{ mt: 4 }}
    
    >
      {/* Sección Header */}
      <Box sx={{ border: "2px dashed #3445c5", p: 4, borderRadius: 2,textAlign:'center' }}>
        <Typography variant="h1" color="primary">Parkify</Typography>
        <Typography variant="h5">Encuentra tu parking más cercano</Typography>
        <Typography sx={{ mt: 2, maxWidth: "600px", margin: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>¿Eres dueño de estacionamiento?</Button>
      </Box>

      {/* Sección Nosotros */}
      <Grid container 
      spacing={4} 
      alignItems="center"
      mt={4} 
      >
        {/* Texto */}
        <Box item xs={12} md={6}
          sx={{
            width: "100%", // Ocupa todo el ancho en móviles
            "@media (min-width: 900px)": { width: "50%" }, // Desde `md` (900px) ocupa el 50%
          }}
        >
          <Typography variant="h4" color="primary" fontWeight="bold">Nosotros</Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis? Odit eos a necessitatibus illum adipisci commodi placeat consequuntur sit reprehenderit. Sequi optio delectus, et consequuntur placeat commodi natus illum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit eligendi officiis ea quidem distinctio, aspernatur dolor! Similique iusto doloremque, numquam unde animi eveniet quis quos nemo magnam, porro recusandae.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis? Odit eos a necessitatibus illum adipisci commodi placeat consequuntur sit reprehenderit. Sequi optio delectus, et consequuntur placeat commodi natus illum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit eligendi officiis ea quidem distinctio, aspernatur dolor! Similique iusto doloremque, numquam unde animi eveniet quis quos nemo magnam, porro recusandae.
          </Typography>
        </Box>
        {/* Tarjetas de Servicio */}
        <Box item xs={12} md={6}
        sx={{
          width: "100%", // Ocupa todo el ancho en móviles
          "@media (min-width: 900px)": { width: "45%" }, // Desde `md` (900px) ocupa el 50%
        }}
        >
          <Grid container 
            spacing={2} 
           display="flex" 
           justifyContent="center" 
           alignItems="center"
           
            >
            {["Reservar plaza de estacionamiento", "Ver zonas con mayor disponibilidad", "Quiero registrar mi estacionamiento"]
              .map((title, index) => (
                <Grid item xs={12} md={12} key={index}>
                 
                  <Card sx={{ backgroundColor: "#A1ABFF", color: "white", boxShadow: 3, display:'flex' }}>
                    <Box
                    sx={{display:'flex', justifyContent:'center', alignItems:'center', mx:'auto',padding:1}}
                    >
                    <TimeToLeaveIcon />
                    </Box>
                 
                    <CardContent>
                      <Typography variant="h6">{title}</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>

      <Box sx={{ mt: 8, textAlign: "center" }}>
  <Typography variant="h4" color="primary" fontWeight="bold">
    Cómo funciona
  </Typography>
  <Grid 
    container 
    spacing={3} 
    justifyContent="center" 
    sx={{ mt: 3, width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" } }}
  >
    {["Paso 1", "Paso 2", "Paso 3"].map((step, index) => (
      <Grid 
        item 
        xs={12} 
        md={4} 
        key={index} 
        sx={{ width: { xs: "90%", md: "unset" }, mx: "auto", textAlign: "center" }}
      >
        <AccessTimeFilledIcon sx={{ fontSize: 50, color: "primary.main" }} />
        <Typography variant="h6" fontWeight="bold">{step}</Typography>
        <Typography>Lorem ipsum dolor sit amet...</Typography>
      </Grid>
    ))}
  </Grid>
</Box>

      {/* Sección Reseñas */}
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" color="primary" fontWeight="bold">Reseñas</Typography>
        <Grid container 
          spacing={3} 
          justifyContent="center" 
          sx={{ mt: 3, width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;