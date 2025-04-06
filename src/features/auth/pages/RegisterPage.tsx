import styles from "../Auth.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, Typography } from "@mui/material";
import InputForm from "../components/InputForm";
import { useForm } from "react-hook-form";
import { parkingSchema } from "../schemas/parckingSchema";
import { grey } from "@mui/material/colors";
import AuthFormContainer from "../components/AuthFormContainer";

type ParkingFormValues = {
  parckingName: string;
  parckingAddress: string;
  parckingPhone: string;
  parckingRate: number;
  parckingCapacity: number;
};


const RegisterPage: React.FC = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParkingFormValues>({
    resolver: yupResolver(parkingSchema),
  });
  const onSubmit = (data: any) => {
    reset()
    alert("Estacionamiento registrado")
    console.log(data)
  };
  return (
    <AuthFormContainer 
      title="Regístrate" 
      register="Crea tu cuenta para que tu estacionamemiento sea visible."
      google="Registrate"
      >
      <Box component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
        <InputForm
          placeholder="Nombre del estacionamiento"
          name="parckingName"
          type="text"
          register={register}
          error={errors.parckingName}
        />
        <InputForm
          placeholder="Dirección del estacionamiento"
          name="parckingAddress"
          type="text"
          register={register}
          error={errors.parckingAddress}
        />
        <InputForm
          placeholder="Número de contacto"
          name="parckingPhone"
          type="text"
          register={register}
          error={errors.parckingPhone}
        />
        <InputForm
          placeholder="$ Tarifa por hora"
          name="parckingRate"
          type="number"
          register={register}
          error={errors.parckingRate}
        />
        <InputForm
          placeholder="Cantidad de plazas disponibles"
          name="parckingCapacity"
          type="number"
          register={register}
          error={errors.parckingCapacity}
        />
        <Typography variant="body2" sx={{ color: grey[600], mt: 2 }}>
          Al continuar, aceptas los{" "}
          <Link
            href="#"
            target="_blank"
            rel="noopener"
            sx={{ color: grey[600], textDecorationColor: "black" }}
          >
            términos y condiciones
          </Link>
        </Typography>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Continuar
        </Button>
      </Box>
    </AuthFormContainer>
  );
};

export default RegisterPage;
