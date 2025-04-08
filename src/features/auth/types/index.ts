import { ReactNode } from "react";
import { FieldError, FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { registerParkingSchema, registerUserSchema } from "../schemas/registerSchema";
import * as yup from "yup";
export type FormValues = {
    email: string
    password: string
}

export type FormUserValues = yup.InferType<typeof registerUserSchema>;
export type FormParkingValues = yup.InferType<typeof registerParkingSchema>;

export type FormRegisterValues = FormUserValues & FormParkingValues;
// export type FormRegisterValues = yup.InferType<typeof registerUserSchema> | yup.InferType<typeof registerParkingSchema>;
// export type FormRegisterValues = {
//   email: string | undefined;
//   password: string | undefined;
//   confirmPassword: string | undefined;
//   totalSpots: number | undefined;
//   availableSpots: number | undefined;
//   hourlyRate: number | undefined;
// };

export interface FieldsType {
    name: keyof FormRegisterValues;
    placeholder?: string;
    label?: string;
    type: string;
}
export interface AuthFormContainerProps {
    children: ReactNode;
    title: string;
    register?: string;
    login?: {
      show: boolean;
      description: string;
      link: string;
    };
    google: string
};
export type UserRegistrationStepProps = {
  register: ReturnType<typeof useForm<FormUserValues>>["register"];
  errors: FieldErrors<FormUserValues>;
    isCheckingEmail: boolean
    handleNext:  (e?: React.BaseSyntheticEvent) => Promise<void>
}
export type RegisterPageProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  context: { onBack?: () => void };
};
export interface ParkingFormProps  {
  register: ReturnType<typeof useForm<FormParkingValues>>["register"];
  errors: FieldErrors<FormParkingValues>;
    onBack: () => void;
  };
  
export interface HeaderFormProps {
    path?: string
    onBack?: () => void
  }
  
export interface InputFormProps {
    placeholder: string
    name: string
    type: string
    register: UseFormRegister<any>; 
    error?: FieldError;
}