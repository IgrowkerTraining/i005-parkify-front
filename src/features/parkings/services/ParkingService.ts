import { FormParkingValues } from "../../../shared/types";
import { Parking } from "../../../store/parking.store";

import { ChangePasswordFormData } from "../types";
import { api } from './../../../lib/axios';
import { AxiosError } from 'axios'; 

export const mapFrontToBackend = (
  formData: FormParkingValues,
  parkingData: { lat: number; lng: number }
) => ({
  name: formData.parkingName,
  address: formData.parkingAddress,
  latitude: parkingData.lat,
  longitude: parkingData.lng,
  capacity: formData.totalSpots,
  hourlyRate: formData.hourlyRate,
  workingHours: formData.openTime
});

export const mapBackendToFront = (data: any): Parking => ({
  id: data.id,
  imageParking: '',
  email: '',
  totalSpots: data.capacity,
  hourlyRate: data.hourlyRate,
  openTime: data.workingHours,
  closeTime: data.workingHours,
  parkingName: data.name,
  parkingAddress: data.address,
  parkingPhone: '',
  isParkingLoaded: false,
  lat: data.latitude,
  lng: data.longitude,
  availableSpots: data.currentAvailability,
  rating: 0,
  distance: 0,
  isOpen: false,
  ownerId: data.ownerId
});

// Función para Crear un parking
export async function registerParking(data: FormParkingValues, parking: {lat: number; lng: number }) {
  try {
    const payload = mapFrontToBackend(data, parking);
    const response = await api.post('/parkings/my', payload);
    console.log(mapBackendToFront(response.data))
    return mapBackendToFront(response.data);
    //throw new Error("Error en la registracion")
  } catch (error) {
    throw error as AxiosError; 
  }
}


const parkingService = {
 
    async updateParkingProfile(data: Omit<FormParkingValues, 'imageParking'> & { imageParking: File | null }) {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("totalSpots", data.totalSpots.toString());
        formData.append("hourlyRate", data.hourlyRate.toString());
        formData.append("openTime", data.openTime);
        formData.append("closeTime", data.closeTime);
        formData.append("parkingName", data.parkingName);
        formData.append("parkingAddress", data.parkingAddress);
        formData.append("parkingForm", data.parkingPhone);
        if (data.imageParking) {
            formData.append("imageParking", data.imageParking);
        }

        // return axios.post("/api/parking", formData, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        // });

        //simulo respuesta api, objeto actualizado
        return {
            id:'1',
            email: data.email,
            totalSpots: data.totalSpots,
            hourlyRate: data.hourlyRate,
            openTime: data.openTime,
            closeTime: data.closeTime,
            parkingName: data.parkingName,
            parkingAddress: data.parkingAddress,
            parkingPhone: data.parkingPhone,
            imageParking: '', 
          }
        //throw new Error("Error simulado")
    },
  
    // async registerParking (parkingData: FormParkingValues) {
    //     const formData = new FormData();
        
    //     // Agregar los datos del estacionamiento
    //     formData.append("parkingName", parkingData.parkingName);
    //     formData.append("parkingAddress", parkingData.parkingAddress);
    //     formData.append("totalSpots", parkingData.totalSpots.toString());
    //     formData.append("hourlyRate", parkingData.hourlyRate.toString());
    //     formData.append("openTime", parkingData.openTime);
    //     formData.append("closeTime", parkingData.closeTime);
    //     formData.append("parkingPhone", parkingData.parkingPhone);
      
    //     if (parkingData.imageParking) {
    //       formData.append("imageParking", parkingData.imageParking);
    //     }
      
    //     try {
    //     //   const response = await axios.post("/api/register-parking", formData, {
    //     //     headers: {
    //     //       "Content-Type": "multipart/form-data",
    //     //     },
    //     //   });
    //     return {
    //         id: '1',
    //         email: parkingData.email,
    //         totalSpots: parkingData.totalSpots,
    //         hourlyRate: parkingData.hourlyRate,
    //         openTime: parkingData.openTime,
    //         closeTime: parkingData.closeTime,
    //         parkingName: parkingData.parkingName,
    //         parkingAddress: parkingData.parkingAddress,
    //         parkingPhone: parkingData.parkingPhone,
    //         imageParking: '', 
    //       }
    //     } catch (error) {
    //       console.error("Error al registrar el estacionamiento:", error);
    //       throw error;
    //     }
    // },

    async deleteParking (id: string) {
      console.log(id)
      //llamada a la api delete-parking/id
      return "Parking eliminado"
    },
    async changePassword(data: ChangePasswordFormData){
      //llamada api - endpoint cambiar contraseña
      console.log(data)
      return 'Contraseña modificada con éxito'
    },
    async recoveryPassword(email: string){
      //llamada api - endpoint recuperar contraseña
      console.log(email)
      return 'Enviamos un enlace de recuperación a tu correo.'
    },
   
  };
  
  export default parkingService;