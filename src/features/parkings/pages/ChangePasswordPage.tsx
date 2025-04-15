import { Box, Typography } from "@mui/material";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import styles from "../../../shared/styles/ParkingForm.module.css";
import InputForm from "../../../shared/ui/components/InputForm";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import { useForm } from "react-hook-form";
import { showError, showInfo, showSuccess } from "../../../shared/ui/toast";
import parkingService from "../services/ParkingService";
import { ChangePasswordFormData } from "../types";
import { useAuthStore } from "../../../store/auth.store";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../schemas/parkingSchemas";



const ChangePasswordPage = () => {
  const email = useAuthStore((state) => state.user.email);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({resolver:yupResolver(changePasswordSchema)});

  const onSubmit = async (data: ChangePasswordFormData) => {
    console.log("submit");
    try {
      //llamar al service
      const result = await parkingService.changePassword(data);
      //si hay resultado mostrar toast
      result && showSuccess(result);
      reset();
    } catch (error) {
      showError("Hubo un error al cambiar la contraseña");
    }
  };

  //funcion q llama al service para recuperar contraseña
  const recoveryPassword = async () => {
    console.log("recuperar contrasenia");
    //estaria bien tomar el email de la store???
    const result = await parkingService.recoveryPassword(email);
    result && showInfo(result);
  };

  //arreglo con los input del form
  const inputs = [
    { name: "currentPassword",
      placeholder: "Contraseña actual",
      type: "password",
      error: errors.currentPassword,
    },
    {
      name: "newPassword",
      placeholder: "Nueva contraseña",
      type: "password",
      error: errors.newPassword,
    },
    {
      name: "confirmPassword",
      placeholder: "Reingrese nueva contraseña",
      type: "password",
      error: errors.confirmPassword,
    },
  ];


  return (
    <>
      <HeaderForm />
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
        >
          <Typography
            variant="h3"
            fontWeight={500}
            sx={{ alignSelf: "flex-start", mb: 5 }}
          >
            Por favor ingresa los datos
          </Typography>
          {inputs.map((input, index) =>(
             <InputForm
              key={index}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              register={register}
              error={input.error}
           />
          ))}
          <Box sx={{mt:4, width:"100%"}}>

          <ButtonPrimary text="Guardar cambios" type="submit" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.registerForm}>
        <ButtonDangerSecondary
          text="Recuperar contraseña"
          onClick={recoveryPassword}
        />
      </Box>
    </>
  );
};

export default ChangePasswordPage;
