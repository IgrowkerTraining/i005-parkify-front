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
    `🕒 Horario: ${parking.openTime ? parking.openTime : "No disponible"} a ${parking.closeTime ? parking.closeTime : "No disponible"}`,
    `✅ Plazas disponibles: ${parking.availableSpots}`,
    `⭐ Valoración: ${parking.rating ? parking.rating : "No disponible"}/5`,
    "",
    `🔗 Más info: http://localhost:5173/parking-availability?id=${parking.id}`,
  ].join("\n");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 0,
        borderRadius: 4,
        boxShadow: 3,
        width: "100%",
        maxWidth: 360,
        minHeight: 120,
        height: "auto",
      }}
    >
      {/* Imagen */}
      <Box
  sx={{
    height: "auto",
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
      width: 100,
      flex: 1,                  // 👈 fuerza a estirarse verticalmente
      objectFit: "cover",
      borderRadius: "8px 0 0 8px",
    }}
  />
</Box>

      {/* Contenido */}
      <CardContent
  sx={{
    px: 1.5,
    py: 1.5,
    flex: 1,
    height: "100%", // 👈 AÑADE ESTO
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
              {parking.rating}
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
                : "Horario no disponible"
            }
            size="small"
            sx={{
              bgcolor: "#f5f5f5",
              fontWeight: 500,
              borderRadius: 2,
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
  );
};
