import { Box } from "@mui/material";
import { showError, showSuccess } from "../../../shared/ui/toast";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import parkingService from "../services/ParkingService";
import { useParkingStore } from "../../../store/parking.store";
import { FormParkingValues } from "../../../shared/types";
import ParkingEmptyState from "../components/ParkingEmptyState";
import ParkingFormContainer from "../components/ParkingFormContainer";
import { useScrollToHeader } from "../../../shared/hooks/useScrollToHeader";

const ProfileOwnerPage = () => {
  const scrollToHeader = useScrollToHeader();
  const setParkingData = useParkingStore((state) => state.setParkingData);
  const parkingData = useParkingStore((state) => state.parking);

  //actualizacion de perfil
  const handleUpdate = async (data: FormParkingValues) => {
    try {
      const updatedProfile = await parkingService.updateParkingProfile({
        ...data,
        imageParking: data.imageParking ?? null,
      });
      setParkingData(updatedProfile)
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
          defaultValues={parkingData}
          onSubmit={handleUpdate}
          showExtraButtons
        />
      )}
    </Box>
  );
};

export default ProfileOwnerPage;
