import styles from "../../styles/ParkingForm.module.css";
import { Box, TextField } from "@mui/material";
import { FormParkingValues } from "../../../features/auth/types";
import { ParkingDataFieldsProps } from "../../types";

const ParkingDataFields = ({fields, register, errors}:ParkingDataFieldsProps) => {
  return (
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
  )
}

export default ParkingDataFields
