import { useForm } from "react-hook-form";
import { fields } from "../../../shared/constants/ParkingFields";
import ParkingDataFields from "../../../shared/ui/components/ParkingDataFields";
import { FormParkingValues } from "../../auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerParkingSchema } from "../../auth/schemas/registerSchema";
import HeaderForm from "../../auth/components/HeaderForm";
import ParkingBannerForm from "../../auth/components/ParkingBannerForm";
import { Box } from "@mui/material";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ButtonDangerPrimary from "../../../shared/ui/components/ButtonDangerPrimary";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import { showSuccess } from "../../../shared/ui/toast";
import { useModalStore } from "../../../store/modal.store";


const PerfilOwnerPage = () => {

  const openModal  = useModalStore((state) => state.openModal);
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
                <div>Estás apunto de eliminar este estacionamiento</div>
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
