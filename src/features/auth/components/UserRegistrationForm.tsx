import styles from "../../../shared/styles/ParkingForm.module.css";
import { Box, Link, Typography } from "@mui/material";
import AuthFormContainer from "./AuthFormContainer";
import { FormUserValues, UserRegistrationFormProps,  } from "../types";

import { grey } from "@mui/material/colors";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import { FieldsType } from "../../../shared/types";
import InputForm from "../../../shared/ui/components/InputForm";
import Loader from "../../../shared/ui/components/Loader";

const fields: FieldsType[] = [
  { name: "email", placeholder: "Correo", type: "email" },
  { name: "password", placeholder: "Contraseña", type: "password" },
  {
    name: "confirmPassword",
    placeholder: "Repetir Contraseña",
    type: "password",
  },
];

const UserRegistrationForm = ({
  register,
  errors,
  isLoading,
  errorMessage,
}: UserRegistrationFormProps) => {
  return (
    <AuthFormContainer
      title="Regístrate"
      register="Crea tu cuenta para que tu estacionamemiento sea visible."
      google="Registrate"
    >
      <Box className={styles.registerForm}>
        {fields.map(({ name, placeholder, type }) => (
          <InputForm
            key={name}
            name={name}
            placeholder={placeholder ?? ""}
            type={type}
            register={register}
            error={errors[name as keyof FormUserValues]}
          />
        ))}
        <Typography variant="body2" sx={{ color: grey[600], my: 2 }}>
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
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ my: 2 }}>
            {errorMessage}
          </Typography>
        )}
        <ButtonPrimary
          text={isLoading ? <Loader size={20} /> : "Continuar"}
          type="submit"
          disabled={isLoading}
/>
      </Box>
    </AuthFormContainer>
  );
};

export default UserRegistrationForm;
