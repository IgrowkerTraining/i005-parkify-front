import * as yup from "yup";
//schema
export const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("El email es obligatorio")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Ingresá un email válido"
      ),
    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(50, "La contraseña no debe superar los 50 caracteres"),
  });