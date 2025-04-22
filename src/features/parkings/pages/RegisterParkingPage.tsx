//pagina de registro del parking
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import { useParkingStore } from "../../../store/parking.store";
import { registerParking } from "../../parkings/services/ParkingService";
import { FormParkingValues } from "../../../shared/types";
import ParkingFormContainer from "../components/ParkingFormContainer";
//import { useScrollToHeader } from "../../../shared/hooks/useScrollToHeader";
import { useState } from "react";
import { handleError } from "../../../shared/utils/handleError";
import { AxiosError } from "axios";
//import { useParkingStore as useAvailabilityStore } from "../store/parkingStore";

//proteger esta ruta solo se puede si no hay un parking registrado y estoy logueado
const RegisterParkingPage = () => {
  //const scrollToHeader = useScrollToHeader();
  const setParkingData = useParkingStore((state) => state.setParkingData);
  //const getParkingData = useParkingStore((state) => state.getParkingData);
  const parking = useParkingStore((state) => state.parking)
  const navigate = useNavigate();
  const setAvailability = useParkingStore((state) => state.setAvailability)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  //llevar un esatdo del email?
  //si cambia hace un patch?
  //el email arranca con los datos de la store del user?


  const handleRegister = async (data: FormParkingValues) => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const parkingResponse = await registerParking(data, parking);
      //setear la store
      setParkingData(parkingResponse);
      //setear la disponibilidad - arranca con el totalSpot
      setAvailability(parkingResponse.id, parkingResponse.totalSpots)
      //simular tardanza de respuesta api para ver efecto en boton
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      showSuccess("Estacionamiento Registrado");
      //scrollToHeader();
      navigate('/');
    } catch (err) {
      const message = handleError(err as AxiosError); 
      setErrorMessage(message);
      showError("Hubo un error");
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <>
      <HeaderForm />
      <ParkingFormContainer 
        mode="register" 
        onSubmit={handleRegister}
        isLoading={isLoading}
        errorMessage={errorMessage} 
      />
    </>
  );
};

export default RegisterParkingPage;
