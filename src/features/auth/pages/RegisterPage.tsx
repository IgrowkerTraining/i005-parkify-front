import styles from "../Auth.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormParkingValues,
  FormRegisterValues,
  FormUserValues,
  RegisterPageProps,
} from "../types";
import { useState } from "react";
import ParkingRegistrationStep from "../components/ParkingRegistrationStep";
import UserRegistrationStep from "../components/UserRegistrationStep";
import {
  registerParkingSchema,
  registerUserSchema,
} from "../schemas/registerSchema";
import HeaderForm from "../components/HeaderForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ step, setStep, context }: RegisterPageProps) => {
  const navigate = useNavigate();
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  // const [step, setStep] = useState(0);

  const userForm = useForm<FormUserValues>({
    resolver: yupResolver(registerUserSchema),
  });

  const parkingForm = useForm<FormParkingValues>({
    resolver: yupResolver(registerParkingSchema),
  });

  const onSubmitParking = (data: FormParkingValues) => {
    const combinedData: FormRegisterValues = {
      ...userForm.getValues(),
      ...data,
    };

    const clonedData = JSON.parse(JSON.stringify(combinedData));

    console.log("Datos combinados:", clonedData);
    userForm.reset();
    parkingForm.reset();
    alert("Estacionamiento registrado");
    navigate("/");
  };
  const checkEmail = async (data: FormUserValues) => {
    console.log("hola");
    try {
      setIsCheckingEmail(true);
      //chequear q el email no existe antes de pasar al 2do paso
      // const response = await fetch("/api/check-email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: data.email }),
      // });
      // const result = await response.json();
      //simula llamado a back
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = false;

      if (result) {
        userForm.setError("email", {
          type: "manual",
          message: "Este email ya está registrado",
        });
        return;
      }

      setStep(1);
    } catch (error) {
      console.error("Error al verificar el email:", error);
    } finally {
      setIsCheckingEmail(false);
    }
  };

  return (
    <>
      <HeaderForm onBack={context.onBack} />
      <Box
        component="form"
        noValidate
        onSubmit={
          step === 0
            ? userForm.handleSubmit(checkEmail)
            : parkingForm.handleSubmit(onSubmitParking)
        }
        className={styles.registerForm}
      >
        {step === 0 && (
          <UserRegistrationStep
            register={userForm.register}
            errors={userForm.formState.errors}
            handleNext={userForm.handleSubmit(checkEmail)}
            isCheckingEmail={isCheckingEmail}
          />
        )}
        {step === 1 && (
          <ParkingRegistrationStep
            register={parkingForm.register}
            errors={parkingForm.formState.errors}
            onBack={() => setStep(0)}
          />
        )}
      </Box>
    </>
  );
};

export default RegisterPage;
