import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";

const ParkingEmptyState = () => {
  return (
    <Box
      width="100%"
      maxWidth="500px"
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding={4}
      color={grey[400]}
      minHeight="80vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        sx={{
          mx: 3,
          "@media (min-width:375px)": {
            mx: 6,
          },
          "@media (min-width:420px)": {
            mx: 10,
          },
        }}
      >
        <Typography variant="body1" textAlign="center">
          Aún no tienes registrado ningún estacionamiento
        </Typography>

        <ButtonPrimary text="Registrar estacionamiento" to="/register" />
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <ButtonSecondary text="Cerrar sesión" />
        <ButtonDangerSecondary text="Eliminar cuenta" to="/eliminar-cuenta" />
      </Box>
    </Box>
  );
};

export default ParkingEmptyState;
