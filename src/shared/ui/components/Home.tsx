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
import Banner from "../../../assets/Banner.svg";

const Home: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img
          src={Banner}
          alt="Imagen de presentación"
          style={{ width: "100%", borderRadius: 8, maxHeight: 300, objectFit: "cover" }}
        />
      </Box>

      {/* Hero Section */}
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

      {/* Cuenta o llamada a la acción */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        {isAuthenticated ? (
          <AccountCard user={user} />
        ) : (
          <HomeCard />
        )}
      </Box>

      {/* Sección Sobre nosotros */}
      <Box mt={8} id="sobre-nosotros" textAlign="center">
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Sobre nosotros
        </Typography>
        <Typography sx={{ maxWidth: "700px", mx: "auto" }}>
          En Parkify, sabemos lo frustrante que es buscar estacionamiento. Por eso, hemos creado una
          solución innovadora que te permite encontrar y reservar plazas de forma rápida y sencilla.
        </Typography>
      </Box>

      {/* Cómo funciona (con MUI v6 compatible Grid) */}
      <Box mt={8} id="como-funciona" textAlign="center">
        <Typography variant="h4" color="primary" fontWeight="bold">
          Cómo funciona
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mt: 2,
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
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Testimonial */}
      <Box mt={8} textAlign="center">
        <TestimonialCard />
      </Box>
    </Container>
  );
};

export default Home;
