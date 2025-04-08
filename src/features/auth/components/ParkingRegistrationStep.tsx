import { Box, TextField } from "@mui/material";
import { FieldsType, FormParkingValues, ParkingFormProps } from "../types";
import styles from "../Auth.module.css";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ParkingBannerForm from "./ParkingBannerForm";

const fields: FieldsType[] = [
  { name: "email", label: "tuemail@gmail.com", type: "email" },
  { name: "totalSpots", label: "Plazas totales", type: "number" },
  { name: "availableSpots", label: "Plazas disponibles", type: "number" },
  { name: "hourlyRate", label: "Tarifa por hora", type: "number" },
  { name: "openTime", label: "Horario apertura", type: "time" },
  { name: "closeTime", label: "Horario cierre", type: "time" },
  { name: "parkingName", label: "Nombre del estacionamiento", type: "text" },
  {
    name: "parkingAddress",
    label: "Dirección del estacionamiento",
    type: "text",
  },
  { name: "parkingPhone", label: "Número de contacto", type: "text" },
];

const ParkingRegistrationStep = ({ register, errors }: ParkingFormProps) => {
  return (
    <>
      <ParkingBannerForm />

      <Box className={styles.registerForm}>
        {fields.map(({ name, label, type }, index) => {
          if (name === "openTime") {
            return (
              <Box key="timeFields" display="flex" gap={2} width="100%">
                {[fields[index], fields[index + 1]].map(
                  ({ name, label, type }) => (
                    <TextField
                      key={name}
                      {...register(name as keyof FormParkingValues)}
                      name={name}
                      label={label}
                      type={type}
                      error={!!errors[name as keyof FormParkingValues]}
                      helperText={
                        errors[name as keyof FormParkingValues]?.message
                      }
                      InputLabelProps={
                        type === "time" ? { shrink: true } : undefined
                      }
                      fullWidth
                    />
                  )
                )}
              </Box>
            );
          }

          if (name === "closeTime") {
            return null;
          }

          return (
            <TextField
              key={name}
              {...register(name as keyof FormParkingValues)}
              name={name}
              label={label}
              type={type}
              error={!!errors[name as keyof FormParkingValues]}
              helperText={errors[name as keyof FormParkingValues]?.message}
              fullWidth
            
            />
          );
        })}
      </Box>
      <Box className={styles.registerForm}>
        <ButtonPrimary text="Guardar cambios" type="submit" />
        <ButtonSecondary text="Cancelar" />
      </Box>
    </>
  );
};

export default ParkingRegistrationStep;
