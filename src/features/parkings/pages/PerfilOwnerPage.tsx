import { useForm } from "react-hook-form";
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
import { showSuccess } from "../../../shared/ui/toast";
import { useModalStore } from "../../../store/modal.store";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import ParkingModal from "../components/ParkingModal";
import { useParkingStore } from "../../../store/parking.store";


const PerfilOwnerPage = () => {
  const  bannerImage= useParkingStore((state) => state.bannerImage);
  const openModal  = useModalStore((state) => state.openModal);
  console.log(bannerImage)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormParkingValues>({
    resolver: yupResolver(registerParkingSchema),
  });
  const onSubmit = (data: FormParkingValues) => {
    showSuccess("Los cambios se han guardado");
    console.log(data)
  };
  return (
    <div>
      <HeaderForm path="/" />
      <ParkingBannerForm />
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
                  { label: "Continuar", onClick: ()=>{} },
                  { label: "Cancelar", color: "error", onClick: ()=>{} },
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
