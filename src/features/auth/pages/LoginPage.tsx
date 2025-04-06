import styles from "../Auth.module.css";
import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import InputForm from "../components/InputForm";
import AuthFormContainer from "../components/AuthFormContainer";


interface LoginFormValues {
    email: string
    password: string
}

const LoginPage = () => {
    
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
      });
      const onSubmit = (data: any) => {
        reset()
        alert("Estacionamiento registrado")
        console.log(data)
      };
      const log = {
        show: true,
        description: "¿Eres nuevo?",
        link: "Regístrate aquí"
      }
  return (
    <AuthFormContainer title="Iniciar Sesión" login={log} google="Iniciar sesión">
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
        <Typography component="h2" variant="body2" sx={{mt:1}}>
             
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
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 1 }}
        >
          Continuar
        </Button>
      </Box>
    </AuthFormContainer>
  );
};

export default LoginPage;
