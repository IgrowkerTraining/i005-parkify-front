
import { RequiredLabelField } from "../types";


export const fields: RequiredLabelField[] = [
  { name: "email", label: "tuemail@gmail.com", type: "email" },
  { name: "totalSpots", label: "Plazas totales", type: "number" },
  { name: "hourlyRate", label: "Tarifa por hora", type: "number" },
  { name: "openTime", label: "Horario apertura", type: "time" },
  { name: "closeTime", label: "Horario cierre", type: "time" },
  { name: "parkingName", label: "Nombre del estacionamiento", type: "text" },
  { name: "parkingAddress", label: "Dirección del estacionamiento", type: "text",},
  { name: "parkingPhone", label: "Número de contacto", type: "text" },
];