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


export const registerParkingSchema = yup.object().shape({
  email: yup
  .string()
  .required("El email es obligatorio")
  .matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    "Ingresá un email válido"
  ),
  totalSpots: yup
  .number()
  .typeError("Debe ser un número")
  .required("La cantidad de plazas es obligatoria")
  .integer("Debe ser un número entero")
  .positive("Debe ser un número positivo"),
hourlyRate: yup
  .number()
  .typeError("Debe ser un número")
  .required("La tarifa por hora es obligatoria")
  .positive("Debe ser un número positivo"),

openTime: yup
  .string()
  .required("El horario de apertura es obligatorio"),

closeTime: yup
  .string()
  .required("El horario de cierre es obligatorio")
  .test(
    "is-after-open",
    "El horario de cierre debe ser posterior al de apertura",
    function (value) {
      const { openTime } = this.parent;
      if (!openTime || !value) return true;
      return value > openTime;
    }
  ),

parkingName: yup
  .string()
  .required("El nombre del estacionamiento es obligatorio"),

parkingAddress: yup
  .string()
  .required("La dirección del estacionamiento es obligatoria"),

parkingPhone: yup
  .string()
  .required("El número de contacto es obligatorio")
  .matches(
    /^[\d\s()+-]{6,20}$/,
    "El número de teléfono no es válido"
  ),
imageParking: yup
.mixed<File>()
.nullable()
.test("fileType", "Debe cargar una imagen válida", (value) => {
  return (
    value === null ||
    (value instanceof File && value.type.startsWith("image/"))
  );
}),
}

)
