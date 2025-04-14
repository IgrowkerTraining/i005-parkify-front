import { Resolver, useForm } from "react-hook-form";
import { fields } from "../../../shared/constants/ParkingFields";
import ParkingDataFields from "../../../shared/ui/components/ParkingDataFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerParkingSchema } from "../../auth/schemas/registerSchema";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import { Box } from "@mui/material";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ButtonDangerPrimary from "../../../shared/ui/components/ButtonDangerPrimary";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import { showError, showSuccess } from "../../../shared/ui/toast";
import { useModalStore } from "../../../store/modal.store";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import ParkingModal from "../components/ParkingModal";
import parkingService from "../services/ParkingService";
import { useParkingStore } from "../../../store/parking.store";
import { FormParkingValues } from "../../../shared/types";
//import ParkingEmptyState from "../components/ParkingEmptyState";

const ProfileOwnerPage = () => {
  const openModal = useModalStore((state) => state.openModal);
  const setParkingData = useParkingStore((state) => state.setParkingData);
  const parkingData = useParkingStore((state) => state.getParkingData());

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormParkingValues>({
    defaultValues: parkingData,
    resolver: yupResolver(registerParkingSchema) as Resolver<FormParkingValues>,
  });

  const onSubmit = async (data: FormParkingValues) => {

    try {
      const updatedProfile = await parkingService.updateParkingProfile({
        ...data,
        imageParking: data.imageParking ?? null,
      });
      setParkingData({
        id: "1",
        email: updatedProfile.email,
        totalSpots: updatedProfile.totalSpots,
        hourlyRate: updatedProfile.hourlyRate,
        openTime: updatedProfile.openTime,
        closeTime: updatedProfile.closeTime,
        parkingName: updatedProfile.parkingName,
        parkingAddress: updatedProfile.parkingAddress,
        parkingPhone: updatedProfile.parkingPhone,
        imageParking: updatedProfile.imageParking,
        isParkingLoaded: true,
      });
      showSuccess("Los cambios se han guardado");
      console.log("Datos actualizados en el store:", parkingData);

      //redirijo alguna ruta?
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    }
  };
  
  return (
    <Box>
      <HeaderForm path="/" />
      {/* {parkingData.id === '' && !parkingData.isParkingLoaded ? (
        <ParkingEmptyState />
      ) : ( */}
        <>
          <ParkingBannerForm
            setValue={setValue}
            errors={errors}
            trigger={trigger}
          />
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <ParkingDataFields
              fields={fields}
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <Box
              sx={{
                px: 2,
                mt: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: "500px",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <ButtonPrimary text="Guardar cambios" type="submit" />
              <ButtonSecondary
                text="Cambiar contraseña"
                to="/cambiar-password"
              />
              <ButtonDangerPrimary
                text="Eliminar estacionamiento"
                onClick={() =>
                  openModal(
                    <ParkingModal
                      text="Estás a punto de eliminar este estacionamiento"
                      buttons={[
                        { label: "Continuar", onClick: () => {} },
                        {
                          label: "Cancelar",
                          color: "error",
                          onClick: () => {},
                        },
                      ]}
                    />
                  )
                }
              />
              <ButtonDangerSecondary
                text="Eliminar cuenta"
                to="/eliminar-cuenta"
              />
            </Box>
          </Box>
        </>
      {/* )} */}
    </Box>
  );
};

export default ProfileOwnerPage;
