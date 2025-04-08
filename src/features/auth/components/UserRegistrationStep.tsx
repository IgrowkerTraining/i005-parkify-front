import styles from "../Auth.module.css";
import { Box, Link, Typography } from "@mui/material"
import AuthFormContainer from "./AuthFormContainer"
import { FieldsType, FormUserValues, UserRegistrationStepProps } from "../types";
import InputForm from "./InputForm";
import { grey } from "@mui/material/colors";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";


const fields: FieldsType[] = [
  { name: "email", placeholder: "Correo", type: "email" },
  { name: "password", placeholder: "Contraseña", type: "password" },
  {
    name: "confirmPassword",
    placeholder: "Repetir Contraseña",
    type: "password",
  },
];


const UserRegistrationStep = ({register, errors, isCheckingEmail, handleNext} :  UserRegistrationStepProps) =>{

    return (
        <AuthFormContainer
        title="Regístrate"
        register="Crea tu cuenta para que tu estacionamemiento sea visible."
        google="Registrate"
      >
        <Box
          className={styles.registerForm}
        >
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
          <ButtonPrimary 
            text={isCheckingEmail ? "Validando..." : "Continuar"}
            type="submit"
            onClick={handleNext}
            disabled={isCheckingEmail}
          />
        </Box>
      </AuthFormContainer>
    )
}

export default UserRegistrationStep