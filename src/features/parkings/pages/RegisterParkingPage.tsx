//pagina de registro del parking
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import { useParkingStore } from "../../../store/parking.store";
import parkingService from "../../parkings/services/ParkingService";
import { FormParkingValues } from "../../../shared/types";
import ParkingFormContainer from "../components/ParkingFormContainer";
import { useScrollToHeader } from "../../../shared/hooks/useScrollToHeader";

const RegisterParkingPage = () => {
  const scrollToHeader = useScrollToHeader();
  const setParkingData = useParkingStore((state) => state.setParkingData);
  const getParkingData = useParkingStore((state) => state.getParkingData);
  const navigate = useNavigate();

  //registrar parking
  const handleRegister = async (data: FormParkingValues) => {
    try {
      //llamar al service
      const parkingResponse = await parkingService.registerParking(data);
      //setear la store
      setParkingData(parkingResponse);

      console.log("Datos actualizados en el store:", getParkingData);
      showSuccess("Estacionamiento Registrado");
      scrollToHeader();
      navigate("/profile");
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    }
  };

  return (
    <>
      <HeaderForm />
      <ParkingFormContainer mode="register" onSubmit={handleRegister} />
    </>
  );
};

export default RegisterParkingPage;
