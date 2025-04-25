import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Chip,
} from "@mui/material";

import ButtonWhatsapp from "../../../shared/ui/components/ButtonWhatsapp";
import StarIcon from "@mui/icons-material/Star";
import { AvailabilityStatus } from "./AvailabilityStatus";
import { Parking } from "../../../store/parking.store";

type ParkingProfileProps = {
  parking: Parking;
  onReserve: () => void;
};

export const ParkingCard = ({ parking }: ParkingProfileProps) => {
  const message = [
    "Hola, quiero reservar una plaza en:",
    "",
    `📍 ${parking.parkingName}`,
    `🏠 Dirección: ${parking.parkingAddress}`,
    `💵 Precio por hora: ${parking.hourlyRate}€`,
   // `🕒 Horario: ${parking.openTime ? parking.openTime : "No disponible"} a ${parking.closeTime ? parking.closeTime : "No disponible"}`,
    `🕒 Horario: 09:00 a 24:00`,
    `✅ Plazas disponibles: ${parking.availableSpots}`,
    //`⭐ Valoración: ${parking.rating ? parking.rating : "No disponible"}/5`,
    `⭐ Valoración: 4,5`,
    "",
    `🔗 Más info: http://34.107.135.109/parking-availability?id=${parking.id}`,
  ].join("\n");

  return (
    <>
      {/* <Box position="absolute" zIndex={1000} top={-30} left={33} sx={{backgroundColor:"secondary"}}>
        <Typography variant="body2" sx={{p:0.6, backgroundColor:"secondary.main", borderRadius:1}}>Recomendado</Typography>
      </Box> */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: 0,
          position:"relative",
          boxShadow: 3,
          width: "100%",
          maxWidth: 360,
          minHeight: 100,
        }}
      > 
        
        {/* Imagen */}
        <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
    }}
  >
    <CardMedia
      component="img"
      image={parking.imageParking}
      alt={parking.parkingName}
      sx={{
        width: "100px",
        flex: 1,                  // 👈 fuerza a estirarse verticalmente
        objectFit: "cover",

      }}
    />
  </Box>

        {/* Contenido */}
        <CardContent
    sx={{
      px:1,
      pb:0,
      flex: 1, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >

          {/* Nombre y precio */}
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="subtitle1" fontWeight={600}>
              {parking.parkingName}
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {parking.hourlyRate}€ / h
            </Typography>
          </Box>

          {/* Dirección */}
          <Typography variant="body2" color="text.secondary">
            {parking.parkingAddress}
          </Typography>

          {/* Distancia + Estrellas */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={0.5}>
            <Typography variant="body2" color="success.main" fontWeight={500}>
              {/* {parking.distance} km ({parking.estimatedTime}) */}
              {/* {parking.distance.toFixed()} km ("11 min") */}
              {parking.distance != null
              ? `${parking.distance.toFixed(0)} km`
              : '—'}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography variant="body2" fontWeight={500}>
                {/* {parking.rating} */}4
              </Typography>
              <StarIcon sx={{ fontSize: 18, color: "#FFC107" }} />
            </Box>
          </Box>

          {/* Plazas + horario */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
            <Box display="flex" gap={1}>
              <AvailabilityStatus parkingId={parking.id} />
            </Box>

            <Chip
              label={
                parking.openTime && parking.closeTime
                  ? `${parking.openTime} a ${parking.closeTime}`
                  : "12:00 a 19:00" //ver xq no funciona
              }
              size="small"
              sx={{
                bgcolor: "#f5f5f5",
                fontWeight: 500,
                
              }}
            />
          </Box>

          {/* Botón */}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <ButtonWhatsapp
              phone={`34${parking.parkingPhone}`}
              message={message}
            />
          </Box>
        </CardContent>
      </Card>
    </>
    
  );
};
