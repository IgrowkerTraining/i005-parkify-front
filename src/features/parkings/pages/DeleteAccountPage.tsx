import { useForm } from "react-hook-form";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import { Box, TextField, Typography } from "@mui/material";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import styles from "../../../shared/styles/ParkingForm.module.css";
import { showSuccess } from "../../../shared/ui/toast";
import parkingService from "../services/ParkingService";
import { useAuthStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";
import authService from "../../auth/services/AuthService";
import { useParkingStore } from "../../../store/parking.store";

interface DeleteAccountForm {
  deletionReason: string;
}
const DeleteAccountPage = () => {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()
  const clearParkingData = useParkingStore((state) => state.clearParkingData)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteAccountForm>();

  const onSubmit = async (data:DeleteAccountForm) => {
    console.log(data)
    //eliminar cuenta de usuario
    const result = await authService.deleteAccount('1')
    //eliminar estacionamiento
    result && logout()
    const deleteParking = await parkingService.deleteParking('1')
    //limipiar la store
    deleteParking && clearParkingData()
    showSuccess(result);
    navigate('/')
  };

  return (
    <>
      <HeaderForm path="/profile" />
      <Box
        sx={{ mx: "auto" }}
        display="flex"
        flexDirection="column"
        px={2}
        pt={4}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={styles.registerForm}
          sx={{ pb: 10 }}
        >
          <Typography
            variant="h3"
            fontWeight={500}
            sx={{ alignSelf: "flex-start", mb: 3 }}
          >
            Quiero eliminar mi cuenta
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 300, fontStyle: "normal", mb: 2 }}
          >
            ¡Nos da mucha pena decirte adiós! Pero por supuesto respetamos tu
            decisión y por eso puedes darte de baja siempre que quieras. Por
            favor indica el motivo por el que quieres eliminar tu cuenta:
          </Typography>
          <TextField
            placeholder="Cuéntanos el motivo por el que quieres eliminar tu cuenta."
            multiline
            rows={5}
            variant="outlined"
            {...register("deletionReason", {
              required: "Este campo es obligatorio",
            })}
            error={!!errors.deletionReason}
            helperText={errors?.deletionReason?.message}
            fullWidth
            sx={{ mb: 1 }}
          />
          <ButtonDangerSecondary text="Eliminar cuenta" type="submit" />
        </Box>
      </Box>
    </>
  );
};

export default DeleteAccountPage;
