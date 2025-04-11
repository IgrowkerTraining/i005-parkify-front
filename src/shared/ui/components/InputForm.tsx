import { TextField } from "@mui/material";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldError, UseFormRegister } from "react-hook-form";
//import { InputFormProps } from "../../types";
type InputFormProps = {
    placeholder: string
    name: string
    type: string
    register: UseFormRegister<any>; 
    error?: FieldError;
}

const InputForm = ({placeholder, name, type, register, error}: InputFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
      <TextField
        id={name} 
        type={inputType}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        fullWidth
        placeholder={placeholder}
        sx={{
          '& .MuiInputBase-input': {
            padding: '12px', 
          },
        }}
        InputProps={{
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowPassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    
  );
};

export default InputForm;
