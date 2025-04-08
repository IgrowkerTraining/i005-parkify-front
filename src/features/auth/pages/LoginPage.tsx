import styles from "../Auth.module.css";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import InputForm from "../components/InputForm";
import AuthFormContainer from "../components/AuthFormContainer";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import { FormValues } from "../types";
import HeaderForm from "../components/HeaderForm";
import authService from "../services/AuthService";
import { useAuthStore } from "../../../store/auth.store";

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
  const onSubmit = async (data: FormValues) => {
    const token = await authService.login(data.email, data.password)
    if (token) {
      login(token)
      reset();
      alert("Estacionamiento registrado");
      navigate("/");
    } else {
      //podria devolver usuario inexistemte
      //contrasenña invalida
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
