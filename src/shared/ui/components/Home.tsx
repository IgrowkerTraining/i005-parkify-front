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
  const user = useAuthStore((state) => state.user);

  return (
    <Container sx={{ mt: 4, px:4 }}>
      <Box sx={{display:"flex", flexDirection:{xs:"column", md:"row"}, justifyContent:"space-between"}}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <img
            src={Banner}
            alt="Imagen de presentación"
            style={{width:"100%", maxWidth:"70vh", borderRadius: 8, height:"40vh", objectFit: "cover" }}
          />
        </Box>
        {/* Hero Section */}
        <Box m="auto">
          <Box sx={{ textAlign: "center" }}>
            <img
              src={BlueLogo}
              alt="Logo Parkify"
              style={{ height: 60, marginBottom: 16 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
              <Typography variant="h5" fontWeight="bold">
                Encuentra tu estacionamiento <br />sin demoras.
              </Typography>
              <ButtonPrimary text="Buscar estacionamiento" to="/mapa" />
            </Box>
          </Box>
        </Box>
        
      </Box>
      

      

      {/* Cuenta o llamada a la acción */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        {isAuthenticated ? (
          <AccountCard user={user} />
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
            gap: 4,
            mt: 4,
            px: 3
          }}
        >
          {[
            {
              title: "Encuentra tu plaza",
              desc: "Ingresa tu destino y descubre los estacionamientos disponibles cerca de ti. Filtra por ubicación, disponibilidad y precios.",
            },
            {
              title: "Reserva fácilmente",
              desc: "Selecciona el estacionamiento que prefieras y reserva tu plaza de forma rápida y sencilla a través de WhatsApp.",
            },
            {
              title: "Navega y estaciona",
              desc: "Navega hasta el estacionamiento reservado y disfruta de tu destino sin preocupaciones.",
            },
          ].map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Typography fontWeight="bold">{index + 1}</Typography>
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
          gap: 2,
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
