import styles from "../../../shared/styles/ParkingForm.module.css";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";

import AuthFormContainer from "../components/AuthFormContainer";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import { FormValues } from "../types";

import {loginService } from "../services/AuthService";
import { useAuthStore} from "../../../store/auth.store";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import InputForm from "../../../shared/ui/components/InputForm";
import { useState } from "react";
import { handleError } from "../../../shared/utils/handleError";
import { AxiosError } from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useAuthStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 👈 Estado para mostrar error en el formulario

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      setErrorMessage(null); // Reiniciar el mensaje de error al enviar el formulario
      const response = await loginService(data)

      if (response.token) {
        login(response.token, response.user ) // 👈 Guardamos token y usuario en Zustand
        reset();
        navigate("/"); //redirijo a home pero me muestra perfil ver router
        showSuccess(`Bienvenido `);
      } 
    } catch (err) {
      console.error(err);
      const message = handleError(err as AxiosError); // 👈 Capturamos el mensaje real
      setErrorMessage(message); // 👈 Guardar mensaje de error
      showError('Hubo un error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };
  const log = {
    show: true,
    description: "¿Eres nuevo?",
    link: "Regístrate aquí",
  };
  return (
    <>
      <HeaderForm path="/" />
      <AuthFormContainer
        title="Iniciar Sesión"
        login={log}
        google="Iniciar sesión"
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={styles.registerForm}
        >
          <InputForm
            placeholder="Correo"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />
          <InputForm
            placeholder="Contraseña"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          {/* Mostrar mensaje de error si existe */}
          {errorMessage && (
            <Typography variant="body2" color="error" sx={{ my: 2 }}>
              {errorMessage}
            </Typography>
          )}

          <Typography component="h2" variant="body2" sx={{ my: 1 }}>
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: "black !important",
                textDecorationColor: "black",
              }}
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </Typography>
          <ButtonPrimary text={isLoading ? "Validando..." : "Continuar"} type="submit" disabled={isLoading}/>
        </Box>
      </AuthFormContainer>
    </>
    
  );
};

export default LoginPage;
