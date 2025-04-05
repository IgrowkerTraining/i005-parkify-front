import * as yup from "yup";
//schema
export const parkingSchema = yup.object().shape({
    parckingName: yup.string().required("El nombre es obligatorio"),
    parckingAddress: yup.string().required("La dirección es obligatoria"),
    parckingPhone: yup
      .string()
      .required("El número de contacto es obligatorio")
      .matches(/^\d+$/, "Solo números"),
    parckingRate: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === "" ? null : value))
      .required("La tarifa es obligatoria")
      .typeError("Solo se permiten números")
      .positive("Debe ser un número positivo"),
    parckingCapacity: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === "" ? null : value))
      .required("La capacidad es obligatoria")
      .typeError("Solo se permiten números")
      .positive("Debe ser un número positivo")
      .integer("Debe ser un número entero"),
  });