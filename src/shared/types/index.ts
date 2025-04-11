import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { FormRegisterValues } from "../../features/auth/types";


export type FormParkingValues = {
  imageParking?: File | null;
  email: string;
  totalSpots: number;
  hourlyRate: number;
  openTime: string;
  closeTime: string;
  parkingName: string;
  parkingAddress: string;
  parkingPhone: string;
};
export interface FieldsType {
    name: keyof FormRegisterValues;
    placeholder?: string;
    label?: string;
    type: string;
}
export interface RequiredLabelField {
    name: string;
    label: string; 
    type: string;
  };
  export interface ParkingDataFieldsProps {
      fields: RequiredLabelField[];
      register: UseFormRegister<FormParkingValues>;
      errors: FieldErrors<FormParkingValues>;
      setValue: UseFormSetValue<FormParkingValues>;
  }