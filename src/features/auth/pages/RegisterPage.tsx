import styles from "../../../shared/styles/ParkingForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { Resolver, useForm } from "react-hook-form";
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

import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import { useParkingStore } from "../../../store/parking.store";
import authService from "../services/AuthService";
import parkingService from "../../parkings/services/ParkingService";


const RegisterPage = ({ step, setStep, context }: RegisterPageProps) => {
  const setParkingData  = useParkingStore((state) => state.setParkingData);
  const getParkingData  = useParkingStore((state) => state.getParkingData);
  
  const navigate = useNavigate();
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  // const [step, setStep] = useState(0);

  const userForm = useForm<FormUserValues>({
    resolver: yupResolver(registerUserSchema),
  });

  const parkingForm = useForm<FormParkingValues>({
      resolver: yupResolver(registerParkingSchema) as Resolver<FormParkingValues>,
    });

  const onSubmitParking = async (data: FormParkingValues) => {
    const combinedData: FormRegisterValues = {
      ...userForm.getValues(),
      ...data,
    };
    const clonedData = JSON.parse(JSON.stringify(combinedData));

    console.log("Datos combinados:", clonedData);

    try {
      //registro user
      const userResponse = await authService.registerUser(userForm.getValues());
      console.log("resp user", userResponse)
      const parkingResponse = await parkingService.registerParking(data)

      setParkingData({
        email: parkingResponse.email,
        totalSpots: parkingResponse.totalSpots,
        hourlyRate: parkingResponse.hourlyRate,
        openTime: parkingResponse.openTime,
        closeTime: parkingResponse.closeTime,
        parkingAddress: parkingResponse.parkingAddress,
        parkingPhone: parkingResponse.parkingPhone,
        imageParking: parkingResponse.imageParking,
      })
    
      console.log('Datos actualizados en el store:', getParkingData());
      userForm.reset();
      parkingForm.reset();
      showSuccess("Estacionamiento Registrado")
      navigate("/login");
      //redirijo alguna ruta?
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    }
   
  };
  const checkEmail = async (data: FormUserValues) => {
    console.log(data);
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
            setValue = {parkingForm.setValue}
            trigger= {parkingForm.trigger}
          />
        )}
      </Box>
    </>
  );
};

export default RegisterPage;
