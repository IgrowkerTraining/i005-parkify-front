import styles from "../../../shared/styles/ParkingForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormUserValues, } from "../types";
import { useState } from "react";
import { registerUserSchema } from "../schemas/registerSchema";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import authService from "../services/AuthService";
import UserRegistrationForm from "../components/UserRegistrationForm";

//pagina registro de usuario
const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const userForm = useForm<FormUserValues>({
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      //registro user
      //const userResponse = await authService.registerUser(userForm.getValues());
      const userResponse = await authService.registerUser();
      //simular tardanza de respuesta api para ver efecto en boton
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("resp user", userResponse);
      userForm.reset();
      showSuccess("Usuario Registrado");
      navigate("/login");
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    } finally{
      setIsLoading(false)
    }
  };
 
  return (
    <>
      <HeaderForm path='/' />
      <Box
        component="form"
        noValidate
        onSubmit={userForm.handleSubmit(onSubmit)}
        className={styles.registerForm}
      >
        <UserRegistrationForm
          register={userForm.register}
          errors={userForm.formState.errors}
          isLoading={isLoading}
        />
      </Box>
    </>
  );
};

export default RegisterPage;
