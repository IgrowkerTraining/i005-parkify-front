import { TextField } from "@mui/material";
import { UseFormRegister, FieldError } from "react-hook-form";
type InputFormProps = {
    placeholder: string
    name: string
    type: string
    register: UseFormRegister<any>; 
    error?: FieldError;
}

const InputForm = ({placeholder, name, type, register, error}: InputFormProps) => {
  return (
      <TextField
        id={name} 
        type={type}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        fullWidth
        placeholder={placeholder}
        
      />
    
  );
};

export default InputForm;
