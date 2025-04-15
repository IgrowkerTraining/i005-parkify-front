import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import { useAuthStore } from "../../../store/auth.store";
import { useParkingStore } from "../../../store/parking.store";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../../../shared/ui/toast";

const ParkingEmptyState = () => {
  const logout = useAuthStore((state) => state.logout);
  const clearParkingData = useParkingStore((state) => state.clearParkingData);
  const navigate = useNavigate();
  //cerrar sesion
  const closeSession = () => {
    console.log("cerrar sesion");
    logout();
    clearParkingData();
    showSuccess("Sesión cerrada con éxito");
    navigate("/");
  };
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

        <ButtonPrimary
          text="Registrar estacionamiento"
          to="/register-parking"
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <ButtonSecondary text="Cerrar sesión" onClick={() => closeSession()} />
        <ButtonSecondary
          type="button"
          text="Cambiar contraseña"
          to="/change-password"
        />
        <ButtonDangerSecondary text="Eliminar cuenta" to="/delete-account" />
      </Box>
    </Box>
  );
};

export default ParkingEmptyState;
