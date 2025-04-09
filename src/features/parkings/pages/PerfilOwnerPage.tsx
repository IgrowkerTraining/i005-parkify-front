import { Resolver, useForm } from "react-hook-form";
import { fields } from "../../../shared/constants/ParkingFields";
import ParkingDataFields from "../../../shared/ui/components/ParkingDataFields";
import { FormParkingValues } from "../../auth/types";
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

type FormValues = {
  imageParking?: File | null;
  email: string;
  totalSpots: number;
  hourlyRate: number;
  openTime: string;
  closeTime: string;
  parkingName: string;
  parkingAddress: string;
  parkingPhone: string;
};

const PerfilOwnerPage = () => {
  const openModal = useModalStore((state) => state.openModal);
  const setParkingData  = useParkingStore((state) => state.setParkingData);
  const getParkingData  = useParkingStore((state) => state.getParkingData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<FormValues>({
    resolver: yupResolver(registerParkingSchema) as Resolver<FormValues>,
  });

  const onSubmit = async (data: FormParkingValues) => {
    //console.log(data);

    try {
      const updatedProfile = await parkingService.updateParkingProfile({
        ...data,
        imageParking: data.imageParking ?? null, // ya es tipo File | null
      });
      setParkingData({
        email: updatedProfile.email,
        totalSpots: updatedProfile.totalSpots,
        hourlyRate: updatedProfile.hourlyRate,
        openTime: updatedProfile.openTime,
        closeTime: updatedProfile.closeTime,
        parkingName: updatedProfile.parkingName,
        parkingAddress: updatedProfile.parkingAddress,
        parkingPhone: updatedProfile.parkingPhone,
        imageParking: updatedProfile.imageParking,
      })
      showSuccess("Cambios guardados éxitosamente");
      console.log('Datos actualizados en el store:', getParkingData());
      
      //redirijo alguna ruta?
    } catch (err) {
      console.error(err);
      showError("Hubo un error");
    }
  };
  return (
    <div>
      <HeaderForm path="/" />
      <ParkingBannerForm setValue={setValue} errors={errors} trigger={trigger}/>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        
        <ParkingDataFields
          fields={fields}
          register={register}
          errors={errors}
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
          <ButtonSecondary text="Cambiar contraseña" to="/cambiar-password" />
          <ButtonDangerPrimary
            text="Eliminar estacionamiento"
            onClick={() =>
              openModal(
                <ParkingModal
                  text="Estás a punto de eliminar este estacionamiento"
                  buttons={[
                    { label: "Continuar", onClick: () => {} },
                    { label: "Cancelar", color: "error", onClick: () => {} },
                  ]}
                />
              )
            }
          />
          <ButtonDangerSecondary text="Eliminar cuenta" to="/eliminar-cuenta" />
        </Box>
      </Box>

    </div>
  );
};

export default PerfilOwnerPage;
