import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import { useAuthStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";
import logoBlue from "../../../assets/logo/logo-azul.svg"
import handMapsImg from "../../../assets/logo/mano-sosteniendo-telefono-maps_8073.jpg"


const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box>
      {/* Imagen banner debajo del header */}
      <Box
        component="img"
        src={handMapsImg}
        alt="Persona usando Google Maps"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: 220,
          objectFit: "cover",
        }}
      />

      {/* Hero: Logo + Título + Botón */}
      <Box
        sx={{
          backgroundColor: "white",
          py: 4,
          px: 2,
          textAlign: "center",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <img
            src={logoBlue}
            alt="Parkify logo"
            style={{ height: 50 }}
          />
          
        </Box>

        <Typography variant="body1" fontWeight="bold" mt={2}>
          Encuentra tu estacionamiento sin demoras.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "tertiary.500",
            color: "white",
            "&:hover": {
              backgroundColor: "tertiary.600",
            },
          }}
          onClick={() => navigate("/map")}
        >
          Buscar estacionamiento
        </Button>
      </Box>

      {/* Acceso rápido (solo si no está autenticado) */}
      {!isAuthenticated && (
        <Box
          sx={{
            backgroundColor: "tertiary.100",
            p: 2,
            textAlign: "center",
            mt: 3,
            borderRadius: 2,
            mx: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            ¿Tienes un estacionamiento?
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mb: 1,
              backgroundColor: "tertiary.500",
              color: "white",
              "&:hover": {
                backgroundColor: "tertiary.600",
              },
            }}
            onClick={() => navigate("/register")}
          >
            Regístrate
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "tertiary.500",
              color: "white",
              "&:hover": {
                backgroundColor: "tertiary.600",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Ingresa a tu cuenta
          </Button>
        </Box>
      )}

      {/* Sobre nosotros */}
      <Container sx={{ mt: 5 }} id="sobre-nosotros">
        <Typography variant="h2" textAlign="center" fontWeight="bold" mb={2}>
          Sobre nosotros
        </Typography>
        <Typography variant="body2" textAlign="center">
          En Parkify, sabemos lo frustrante que es buscar estacionamiento. Por eso, hemos creado una solución innovadora que te permite encontrar y reservar plazas de forma rápida y sencilla.
        </Typography>
      </Container>

      {/* Cómo funciona */}
      <Container id="como-funciona" sx={{ mt: 6 }}>
        <Typography variant="h2" textAlign="center" fontWeight="bold" mb={4}>
          Cómo funciona
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Encuentra tu plaza",
              description:
                "Ingresa tu destino y descubre los estacionamientos disponibles cerca de ti. Filtra por ubicación, disponibilidad y precios.",
              step: 1,
            },
            {
              title: "Reserva fácilmente",
              description:
                "Selecciona el estacionamiento que prefieras y reserva tu plaza de forma rápida y sencilla a través de WhatsApp.",
              step: 2,
            },
            {
              title: "Navega y estaciona",
              description:
                "Navega hasta el estacionamiento reservado y disfruta de tu destino sin preocupaciones.",
              step: 3,
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index} textAlign="center">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  color: "black",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {item.step}
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" mt={1}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Reseñas */}
      {/* Reseñas */}
<Container id="reseñas" sx={{ mt: 6 }}>
  <Typography variant="h2" textAlign="center" fontWeight="bold" mb={4}>
    Quienes ya confían dicen:
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} md={6}>
      <TestimonialCard />
    </Grid>
  </Grid>
</Container>

    </Box>
  );
};

export default Home;
