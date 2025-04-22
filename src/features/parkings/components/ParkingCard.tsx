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

type ParkingCardProps = {
  parking:  Parking;
  onReserve: () => void;
};

export const ParkingCard = ({ parking, onReserve }: ParkingCardProps) => {
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
      <Grid container spacing={2}>
        {/* Imagen a la izquierda */}
        <Grid sx={{ gridColumn: { xs: "span 12", md: "span 4", display:"flex" } }}>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt={parking.parkingName}
            sx={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 2,

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

              <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
                {parking.parkingName}
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  ${parking.hourlyRate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  por h.
                </Typography>
              </Box>
            </Box>

            {/* Dirección */}
            <Typography
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 500 }}
            >
              {parking.parkingAddress}
            </Typography>
            <StarIcon sx={{ fontSize: 18, color: "#FFC107" }} />
          </Box>
        </Box>

           {/* Distancia/tiempo y rating */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={0.5}>
  <Typography variant="body2" sx={{ color: "success.main", fontWeight: 500 }}>
    11 min (3.7 KM)
  </Typography>
  <Box display="flex" alignItems="center" gap={0.5}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      {4}
    </Typography>
    <StarIcon sx={{ fontSize: 18, color: "#FFC107" }} />
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
