import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .required("La contraseña actual es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(50, "La contraseña no debe superar los 50 caracteres"),
    newPassword: yup
      .string()
      .required("La nueva contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(50, "La contraseña no debe superar los 50 caracteres")
      .test(
        "not-same-as-current",
        "La nueva contraseña debe ser distinta a la actual",
        function(value) {
          const { currentPassword } = this.parent;
          return value !== currentPassword; 
        }),
    confirmPassword: yup
      .string()
      .required("Debes confirmar tu contraseña")
      .oneOf([yup.ref("newPassword")], "Las contraseñas no coinciden"),
  });