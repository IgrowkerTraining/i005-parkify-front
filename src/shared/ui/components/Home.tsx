import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import HomeCard from "./HomeCard";
import AccountCard from "./AccountCard";
import { useAuthStore } from "../../../store/auth.store";
import TestimonialCard from "./TestimonialCard";
import BlueLogo from "../../../assets/logo/logo-azul.svg";
import ButtonPrimary from "./ButtonPrimary";
import Banner from "../../../assets/home.svg";

const Home: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const user = useAuthStore((state) => state.user);

  return (
    <Container sx={{ mt: 4, px:{xs:4, sm:6, md:8} }}>
      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Box
            component="img"
            src={Banner}
            alt="Imagen de presentación"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "70vw",  
                sm: "80vw",
                md: "120vh",
              },
              height: {
                xs: "30vh",
                sm: "40vh",
                md: "45vh",
              },
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Box>
        {/* Hero Section */}
        <Box m="auto">
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={BlueLogo}
              alt="Logo Parkify"
              sx={{ height: {xs: "12vh", sm: "15vh", md: "22vh"} }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
              <Typography variant="h1" fontWeight={600} px={2}>
                Encuentra tu estacionamiento sin demoras.
              </Typography>
              <Box sx={{width:{xs:"100%", sm:"65%"}}}>
                <ButtonPrimary text="Buscar estacionamiento" to="/mapa" />
              </Box>
            </Box>
          </Box>
        </Box>
        
      </Box>
      

      

      {/* Cuenta o llamada a la acción */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        {isAuthenticated ? (
          <AccountCard  />
        ) : (
          <HomeCard />
        )}
      </Box>

      {/* Sección Sobre nosotros */}
      <Box mt={8} id="sobre-nosotros" textAlign="center"  sx={{ scrollMarginTop: '80px' }}>
        <Typography variant="h2" mb={2} fontWeight={600} gutterBottom>
          Sobre nosotros
        </Typography>
        <Typography sx={{ maxWidth: "700px", mx: "auto" }}>
          En Parkify, sabemos lo frustrante que es buscar estacionamiento. Por eso, hemos creado una
          solución innovadora que te permite encontrar y reservar plazas de forma rápida y sencilla.
        </Typography>
      </Box>

      {/* Cómo funciona (con MUI v6 compatible Grid) */}
      <Box mt={8} px={2} id="como-funciona" textAlign="center"  sx={{ scrollMarginTop:'80px' }}>
        <Typography variant="h2" fontWeight={600}>
          Cómo funciona
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: {
              xs:4, sm:6
            },
            mt: 4,
          }}
        >
          {[
            {
              title: "Encuentra tu plaza",
              desc: "Ingresá tu destino y descubre los estacionamientos disponibles cerca de ti. Filtra por ubicación, disponibilidad y servicios.",
            },
            {
              title: "Reserva fácilmente",
              desc: "Seleccioná el estacionamiento que prefieras y reserva tu plaza de forma rápida y sencilla a través de WhatsApp.",
            },
            {
              title: "Navega y estaciona",
              desc: "Navega hasta el estacionamiento reservado y disfruta de tu destino sin preocupaciones.",
            },
          ].map((item, index) => (
            <Box key={index} sx={{ textAlign: "center", px:1 }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Typography variant="h2" fontWeight="bold">{index + 1}</Typography>
              </Box>
              <Typography variant="h3" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body1" fontWeight={300} sx={{ mt: 1 }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Testimonial */}
      <Box mt={8} textAlign="center" id="reseñas"  sx={{ scrollMarginTop: '80px' }}>
        <Typography variant="h2" fontWeight={600} mb={4}>Quienes ya confían dicen:</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          height: 400,
          gap: {
            xs:4, sm:6
          },
          '@media (min-width:1000px)': {
            flexDirection: 'row',
            overflowY: 'visible',
            height:'auto'
          },
        }}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
