import { Box } from "@mui/material";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import parkingService from "../services/ParkingService";
import { Parking, useParkingStore } from "../../../store/parking.store";
import { FormParkingValues } from "../../../shared/types";
import ParkingEmptyState from "../components/ParkingEmptyState";
import ParkingFormContainer from "../components/ParkingFormContainer";
import { useScrollToHeader } from "../../../shared/hooks/useScrollToHeader";

//mapea de un parking a un FormParkingValues
const mapParkingToFormValues = (parking: Parking): FormParkingValues => ({
  imageParking: null, 
  email: parking.email,
  totalSpots: parking.totalSpots,
  hourlyRate: parking.hourlyRate,
  openTime: parking.openTime,
  closeTime: parking.closeTime,
  parkingName: parking.parkingName,
  parkingAddress: parking.parkingAddress,
  parkingPhone: parking.parkingPhone,
});

const ProfileOwnerPage = () => {
  const scrollToHeader = useScrollToHeader();
  const setParkingData = useParkingStore((state) => state.setParkingData);
  const parkingData = useParkingStore((state) => state.parking);
  const setAvailability = useParkingStore((state) => state.setAvailability)
  //actualizacion de perfil
  const handleUpdate = async (data: FormParkingValues) => {
    try {
      const updatedProfile = await parkingService.updateParkingProfile({
        ...data,
        imageParking: data.imageParking ?? null,
      });
      setParkingData(updatedProfile)
      setAvailability(updatedProfile.id, updatedProfile.totalSpots)
      showSuccess("Los cambios se han guardado");
      console.log("Datos actualizados en el store:", parkingData);
      scrollToHeader(); //scroll hasta el header
      //redirijo alguna ruta? al home?
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    }
  };

  return (
    <Box>
      <HeaderForm path="/" />
      {parkingData.id === '' && !parkingData.isParkingLoaded ? (
        <ParkingEmptyState />
      ) : (
        <ParkingFormContainer
          mode="edit"
          defaultValues={mapParkingToFormValues(parkingData)}
          onSubmit={handleUpdate}
          showExtraButtons
        />
      )}
    </Box>
  );
};

export default ProfileOwnerPage;
