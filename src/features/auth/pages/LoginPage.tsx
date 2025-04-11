import styles from "../../../shared/styles/ParkingForm.module.css";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";

import AuthFormContainer from "../components/AuthFormContainer";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import { FormValues } from "../types";

import authService from "../services/AuthService";
import { useAuthStore} from "../../../store/auth.store";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import InputForm from "../../../shared/ui/components/InputForm";

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
  //const onSubmit = async (data: FormValues) => {
  const onSubmit = async () => {
    try {
      //const response = await authService.login(data.email, data.password)
      const response = await authService.login()
      if (response.token) {
        login(response.token, response.user )
        reset();
        navigate("/");
        showSuccess(`Bienvenido ${response.user.email}`);
      } 
    } catch (err) {
      showError('Hubo un error al registrar el usuario');
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
          <ButtonPrimary text="Continuar" type="submit" />
        </Box>
      </AuthFormContainer>
    </>
    
  );
};

export default LoginPage;
