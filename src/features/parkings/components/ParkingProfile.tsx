import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Chip,
} from "@mui/material";

import { Parking } from "../../../shared/types/parking";
import ButtonWhatsapp from "../../../shared/ui/components/ButtonWhatsapp";
import StarIcon from "@mui/icons-material/Star";
import { AvailabilityStatus } from "./AvailabilityStatus";

type ParkingProfileProps = {
  parking: Parking;
};

export const ParkingProfile = ({ parking }: ParkingProfileProps) => {
  const message = [
    "Hola, quiero reservar una plaza en:",
    "",
    `📍 ${parking.name}`,
    `🏠 Dirección: ${parking.address}`,
    `💵 Precio por hora: ${parking.hourlyRate}€`,
    `🕒 Horario: ${parking.openTime ? parking.openTime : "No disponible"} a ${parking.closeTime ? parking.closeTime : "No disponible"}`,
    `✅ Plazas disponibles: ${parking.availableSpots}`,
    `⭐ Valoración: ${parking.rating ? parking.rating : "No disponible"}/5`,
    "",
    `🔗 Más info: http://localhost:5173/parking-availability?id=${parking.id}`, // URL local para desarrollo
].join("\n");

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        p: 1.5,
        display: "inline-flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        gap: 1.5,
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        image={parking.imageParking}
        alt={parking.name}
        sx={{
          width: { xs: "100%", sm: 120 },
          height: 90,
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      {/* Contenido */}
      <CardContent sx={{ p: 0, flex: 1 }}>
        {/* Nombre y precio */}
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="subtitle1" fontWeight={600}>
            {parking.name}
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {parking.hourlyRate}€ / h
          </Typography>
        </Box>

        {/* Dirección */}
        <Typography variant="body2" color="text.secondary">
          {parking.address}
        </Typography>

        {/* Distancia + Estrellas */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={0.5}>
          <Typography variant="body2" color="success.main" fontWeight={500}>
            {parking.distance} km ({parking.estimatedTime})
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
    <Chip
      label={`${parking.availableSpots} plazas disponibles`}
      size="small"
      sx={{
        bgcolor: "#f5f5f5",
        fontWeight: 500,
        borderRadius: 2,
      }}
    />
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
            phone={`34${parking.contactNumber}`}
            message={message}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
