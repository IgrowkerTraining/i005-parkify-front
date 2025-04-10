import { ReactNode } from "react";
import { FieldError, FieldErrors, useForm, UseFormRegister, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { registerUserSchema } from "../schemas/registerSchema";
import * as yup from "yup";
import { FormParkingValues } from "../../../shared/types";
export type FormValues = {
    email: string
    password: string
}

export type FormUserValues = yup.InferType<typeof registerUserSchema>;

export type FormRegisterValues = FormUserValues & FormParkingValues;

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
  setValue: UseFormSetValue<FormParkingValues>;
  trigger: UseFormTrigger<FormParkingValues>
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