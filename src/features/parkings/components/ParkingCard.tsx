import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  CardMedia,
  Chip,
} from "@mui/material";


import ButtonWhatsapp from "../../../shared/ui/components/ButtonWhatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        p: 2,
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

            }}
          />
        </Grid>

        {/* Contenido a la derecha */}
        <Grid sx={{ gridColumn: { xs: "span 12", md: "span 8" } }}>
          <CardContent sx={{ p: 0 }}>
            {/* Nombre y precio */}
            <Box display="flex" justifyContent="space-between" alignItems="center" gap={3}>

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
</Box>



            {/* Plazas + horario */}
            <Box display="flex" gap={1} mt={1} justifyContent={"space-between"}>
              {/* <Chip
                label={`${parking.availableSpots} plazas`}
                size="small"
                sx={{ bgcolor: "#f5f5f5", fontWeight: 500, borderRadius: 2 }}
              /> */}
              <AvailabilityStatus parkingId={parking.id} />
              <Chip
                label={
                  parking.openTime && parking.closeTime
                    ? `${parking.openTime} a ${parking.closeTime}`
                    : "Horario no disponible"
                }
                size="small"
                sx={{ bgcolor: "#f5f5f5", fontWeight: 500, borderRadius: 2 }}
              />
            </Box>

            {/* Botón */}
            <Box mt={1} display="flex" justifyContent="flex-end">
  { <ButtonWhatsapp onClick={onReserve}>
    <Box display="flex" alignItems="center">
      Reservar por whatsapp
      <WhatsAppIcon sx={{ ml: 1 }} />
    </Box>
  </ButtonWhatsapp> }
</Box>

          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

