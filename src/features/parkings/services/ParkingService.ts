import { FormParkingValues } from "../../../shared/types";
import { handleError } from "../../../shared/utils/handleError";
import { Parking } from "../../../store/parking.store";

import { ChangePasswordFormData } from "../types";
import { api } from './../../../lib/axios';
import axios, { AxiosError } from 'axios'; 

export const mapFrontToBackend = (
  formData: FormParkingValues,
  parkingData: { lat: number; lng: number },
  imageUrl: string
) => ({
  name: formData.parkingName,
  address: formData.parkingAddress,
  latitude: parkingData.lat,
  longitude: parkingData.lng,
  capacity: formData.totalSpots,
  hourlyRate: formData.hourlyRate,
  workingHours: `${formData.openTime}/${formData.closeTime}`,
  parkingPhone: formData.parkingPhone,
  parkingImageUrl: imageUrl,
  description: "",
  //parkingImageUrl: 'https://dimobaservicios.com/wp-content/uploads/2022/10/como-gestionar-parking.png'
});

export const mapBackendToFront = (data: any, hours: any): Parking => ({
  id: data.id,
  imageParking: data.parkingImageUrl,
  email: '',
  totalSpots: data.capacity,
  hourlyRate: data.hourlyRate,
  openTime: hours.openTime,
  closeTime: hours.closeTime,
  parkingName: data.name,
  parkingAddress: data.address,
  parkingPhone: data.parkingPhone,
  isParkingLoaded: false,
  lat: data.latitude,
  lng: data.longitude,
  availableSpots: data.currentAvailability,
  rating: 4,
  ownerId: data.ownerId
});
const parseTime = (time: string) : {openTime: string, closeTime: string}=>{
  let openTime = time.split("/")[0]
  let closeTime = time.split("/")[1]
  return{
    openTime,
    closeTime, 
  }
}

//cloudinary
export const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);


  try {
    // Usamos la instancia de 'api' que ya tienes configurada
    const response = await api.post(import.meta.env.VITE_CLOUDINARY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    return response.data.secure_url; // Devuelve la URL de la imagen subida
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw new Error("Error al subir la imagen");
  }
};

// Función para Crear un parking
export async function registerParking(data: FormParkingValues, parking: {lat: number; lng: number }) {
  try {
    //let imageUrl = 'https://dimobaservicios.com/wp-content/uploads/2022/10/como-gestionar-parking.png'
    let imageUrl = ''
    if(data.imageParking){
      imageUrl = await uploadImageToCloudinary(data.imageParking);
    }
    //payload.parkingImageUrl = imageUrl;
    const payload = mapFrontToBackend(data, parking, imageUrl);
    const response = await api.post('/parkings/my', payload);
    //console.log(response.data.workingHours)
    const hours = parseTime(response.data.workingHours)
    //console.log(mapBackendToFront(response.data, hours))
    return mapBackendToFront(response.data, hours);
    //throw new Error("Error en la registracion")
  } catch (error) {
    throw error as AxiosError; 
  }
}

export async function updateParking(data: FormParkingValues, parking: {lat: number; lng: number }, id: string) {
  try {
    let imageUrl = ''
    if(data.imageParking){
      imageUrl = await uploadImageToCloudinary(data.imageParking);
    }
    //payload.parkingImageUrl = imageUrl;
    const payload = mapFrontToBackend(data, parking, imageUrl);
    
    console.log("Payload a enviar:", JSON.stringify(payload, null, 2));
    const response = await api.put(`/parkings/${id}`, payload);
    //console.log(response.data.workingHours)
    const hours = parseTime(response.data.workingHours)
    //console.log(mapBackendToFront(response.data, hours))
    return mapBackendToFront(response.data, hours);
    //throw new Error("Error en la registracion")
  } catch (error) {
    throw error as AxiosError; 
  }
}


export async function getMyParking() {
  try {
    const response = await api.get('/parkings/my');
    if(response.status === 200){
      const hours = parseTime(response.data.workingHours)
      return mapBackendToFront(response.data, hours);
    } 
    
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      // Si el error es un 404, no pasa nada
      return null;
    }

    // Otros errores sí los tiramos hacia arriba
    throw error;
  }
}

//eliminar un parking
export async function deleteParking() {
  try {
    const response = await api.delete('/parkings/my');
    if(response.status === 204){
      return true
    } 
    
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      // Si el error es un 404, no pasa nada
      return null;
    }

    // Otros errores sí los tiramos hacia arriba
    throw error;
  }
}


// 📌 Define el tipo que devuelve tu back para cada parking cercano
interface ApiNearbyParking {
  id: string;
  name: string;
  address: string;
  location: { latitude: number; longitude: number };
  distance: number;
  currentAvailability: number;
  hourlyRate: number;
  parkingPhone: string;
  parkingImageUrl: string;
}

export async function getNearbyParkings(lat: number, lon: number, radius: number): Promise<ApiNearbyParking[]> {
  try {
    const { data } = await api.get<{ data: ApiNearbyParking[] }>('/parkings/nearby', {
      params: { lat, lon, radius },
    });
    return data.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}
const parkingService = {
 
    // async updateParkingProfile(data: Omit<FormParkingValues, 'imageParking'> & { imageParking: File | null }) {
    //     const formData = new FormData();
    //     formData.append("email", data.email);
    //     formData.append("totalSpots", data.totalSpots.toString());
    //     formData.append("hourlyRate", data.hourlyRate.toString());
    //     formData.append("openTime", data.openTime);
    //     formData.append("closeTime", data.closeTime);
    //     formData.append("parkingName", data.parkingName);
    //     formData.append("parkingAddress", data.parkingAddress);
    //     formData.append("parkingForm", data.parkingPhone);
    //     if (data.imageParking) {
    //         formData.append("imageParking", data.imageParking);
    //     }

    //     // return axios.post("/api/parking", formData, {
    //     //     headers: {
    //     //       "Content-Type": "multipart/form-data",
    //     //     },
    //     // });

    //     //simulo respuesta api, objeto actualizado
    //     return {
    //         id:'1',
    //         email: data.email,
    //         totalSpots: data.totalSpots,
    //         hourlyRate: data.hourlyRate,
    //         openTime: data.openTime,
    //         closeTime: data.closeTime,
    //         parkingName: data.parkingName,
    //         parkingAddress: data.parkingAddress,
    //         parkingPhone: data.parkingPhone,
    //         imageParking: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', 
    //       }
    //     //throw new Error("Error simulado")
    // },
  
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

    // async deleteParking (id: string) {
    //   console.log(id)
    //   //llamada a la api delete-parking/id
    //   return "Parking eliminado"
    // },
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