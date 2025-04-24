import styles from "../../styles/ParkingForm.module.css";
import { Box, TextField } from "@mui/material";

import { FormParkingValues, ParkingDataFieldsProps } from "../../types";
import React from "react";
import { AddressAutocomplete } from "../../../features/parkings/components/AddressAutocomplete";

const ParkingDataFields = ({
  fields,
  register,
  errors,
  setValue,
  mode
}: ParkingDataFieldsProps) => {
  return (
    <Box className={styles.registerForm}>
      {fields.map(({ name, label, type }, index) => {
        if (name === "email") {
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
              InputProps={{
                readOnly: mode === "register",
              }}
            />
          );
        }
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
        if (name === "parkingPhone") {
          // 👇 Insertar AddressAutocomplete justo antes del teléfono
          return (
            <React.Fragment key={name}>
              <Box width="100%">
                <AddressAutocomplete
                  setValue={setValue}
                  error={!!errors.parkingAddress}
                  helperText={errors.parkingAddress?.message}
                />
              </Box>
              {/* <AddressAutocomplete setValue={setValue} /> */}
              <TextField
                {...register(name as keyof FormParkingValues)}
                name={name}
                label={label}
                type={type}
                error={!!errors[name as keyof FormParkingValues]}
                helperText={errors[name as keyof FormParkingValues]?.message}
                fullWidth
              />
            </React.Fragment>
          );
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
            inputProps={type === "number" ? { min: 0 } : undefined}
            onKeyDown={
              type === "number"
                ? (e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }
                : undefined
            }
          />
        );
      })}
    </Box>
  );
};

export default ParkingDataFields;
