import { FormControl, FormLabel, TextField } from "@mui/material";
import { UseFormRegister, FieldError } from "react-hook-form";
type InputFormProps = {
    label: string
    placeholder: string
    name: string
    type: string
    register: UseFormRegister<any>; 
    error?: FieldError;
}

const InputForm = ({label, placeholder, name, type, register, error}: InputFormProps) => {
  return (
    <FormControl sx={{ width: "100%", mb: 2 }}>
      <FormLabel htmlFor={name} sx={{ fontSize: "0.8rem" }}>
        {label}
      </FormLabel>
      <TextField
        id={name} 
        type={type}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        fullWidth
        placeholder={placeholder}
        sx={{
          "& input": { padding: "8px 10px", fontSize: "0.9rem" },
          "& input::placeholder": { fontSize: "0.8rem" },
        }}
      />
    </FormControl>
  );
};

export default InputForm;
