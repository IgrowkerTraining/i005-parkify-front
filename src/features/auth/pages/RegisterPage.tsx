import styles from "../Auth.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Form, useActionData } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useForm } from "react-hook-form";

//schema
export const parkingSchema = yup.object().shape({
  parckingName: yup.string().required("El nombre es obligatorio"),
  parckingAddress: yup.string().required("La dirección es obligatoria"),
  parckingPhone: yup
    .string()
    .required("El número de contacto es obligatorio")
    .matches(/^\d+$/, "Solo números"),
  parckingRate: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("La tarifa es obligatoria")
    .typeError("Solo se permiten números")
    .positive("Debe ser un número positivo"),
  parckingCapacity: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("La capacidad es obligatoria")
    .typeError("Solo se permiten números")
    .positive("Debe ser un número positivo")
    .integer("Debe ser un número entero"),
  acceptTerms: yup
    .bool()
    .default(false)
    .oneOf([true], "Debes aceptar los términos"),
});

type ParkingFormValues = {
  parckingName: string;
  parckingAddress: string;
  parckingPhone: string;
  parckingRate: number;
  parckingCapacity: number;
  acceptTerms: boolean;
};
//action
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  alert("Estacionamiento")
  return { success: "Registro exitoso" };
}

const RegisterPage = () => {
  const data = useActionData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ParkingFormValues>({
    resolver: yupResolver(parkingSchema),
  });
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          method="post"
            onSubmit={handleSubmit((data) => {alert("estacionamemiento registrago")})}
          className={styles.registerForm}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              my: 4,
            }}
          >
            <Typography component="h1" variant="h6">
              ¡Bienvenido!
            </Typography>
            <Typography component="h2" variant="subtitle2">
              Por favor complete sus datos
            </Typography>
          </Box>

          <InputForm
            label="Nombre del estacionamiento"
            placeholder="Complete aquí el nombre del estacionamiento"
            name="parckingName"
            type="text"
            register={register}
            error={errors.parckingName}
          />
          <InputForm
            label="Dirección del estacionamiento"
            placeholder="Complete aquí la ubicación"
            name="parckingAddress"
            type="text"
            register={register}
            error={errors.parckingAddress}
          />
          <InputForm
            label="Número de contacto"
            placeholder="Complete con el número al que se contactarán los conductores"
            name="parckingPhone"
            type="text"
            register={register}
            error={errors.parckingPhone}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              width: "100%",
              gap: [0, 2],
            }}
          >
            <InputForm
              label="Tarifa por hora"
              placeholder="Complete el valor de la plaza por hora"
              name="parckingRate"
              type="number"
              register={register}
              error={errors.parckingRate}
            />
            <InputForm
              label="Capacidad máxima"
              placeholder="Coloque la cantidad de plazas que tiene el estacionamiento"
              name="parckingCapacity"
              type="number"
              register={register}
              error={errors.parckingCapacity}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                {...register("acceptTerms")}
                size="small"
                sx={{ pl: 0 }}
              />
            }
            label={
              <Typography sx={{ fontSize: "0.8rem" }}>
                Acepto los Términos y condiciones
              </Typography>
            }
            sx={{ color: "gray", width: "100%", m: 0, p: 0 }}
          />
          {errors.acceptTerms && (
            <Typography color="error" variant="body2" sx={{ display: "block", textAlign: "left"}}>
              {errors.acceptTerms.message}
            </Typography>
          )}

          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Continue
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

export default RegisterPage;

// <Form method="post" className={styles.registerForm}>
// <Box
//   sx={{
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "left",
//     my: 4,
//   }}
// >
//   <Typography component="h1" variant="h6">
//     ¡Bienvenido!
//   </Typography>
//   <Typography component="h2" variant="subtitle2">
//     Por favor complete sus datos
//   </Typography>
// </Box>
// <InputForm
//   label="Nombre del estacionamiento"
//   placeholder="Complete aquí el nombre del estacionamiento"
//   name="parckingName"
//   type="text"
// />
// <InputForm
//   label="Dirección del estacionamiento"
//   placeholder="Complete aquí la ubicación"
//   name="parckingAddress"
//   type="text"
// />
// <InputForm
//   label="Número de contacto"
//   placeholder="Complete con el número al que se contactarán los conductores"
//   name="parckingPhone"
//   type="number"
// />
// <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
//   <InputForm
//     label="Tarifa por hora"
//     placeholder="Complete el valor de la plaza por hora"
//     name="parckingRate"
//     type="number"
//   />
//   <InputForm
//     label="Capacidad máxima disponible"
//     placeholder="Coloque la cantidad de plazas que tiene el estacionamiento"
//     name="parckingCapacity"
//     type="number"
//   />
// </Box>
// <FormControlLabel
//   control={<Checkbox size="small" sx={{pl:0}}   />}
//   label={<Typography sx={{ fontSize: '0.8rem' }}>Acepto los Términos y condiciones, política de privacidad</Typography>}
//   sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }, color:"gray", width:"100%", m:0, p:0}}
// />
// <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
//   Continue
// </Button>
// </Form>
