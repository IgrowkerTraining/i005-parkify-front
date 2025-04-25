import styles from "../../../shared/styles/ParkingForm.module.css";
import { Box, Typography } from "@mui/material";
import ButtonDangerSecondary from "../../../shared/ui/components/ButtonDangerSecondary";
import ButtonDangerPrimary from "../../../shared/ui/components/ButtonDangerPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ParkingDataFields from "../../../shared/ui/components/ParkingDataFields";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import { FormParkingValues } from "../../../shared/types";
import { fields } from "../../../shared/constants/ParkingFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { useModalStore } from "../../../store/modal.store";
import ParkingModal from "./ParkingModal";
import { registerParkingSchema } from "../schemas/parkingSchemas";
import { useParkingStore } from "../../../store/parking.store";
import { deleteParking } from "../services/ParkingService";
import { showSuccess } from "../../../shared/ui/toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store";
import Loader from "../../../shared/ui/components/Loader";
import { useState } from "react";
interface ParkingFormContainerProps {
  mode: "register" | "edit";
  defaultValues?: FormParkingValues;
  onSubmit: (data: FormParkingValues) => void;
  showExtraButtons?: boolean;
  isLoading:boolean;
  errorMessage?: string | null;
}

const ParkingFormContainer = ({
  mode,
  defaultValues,
  onSubmit,
  showExtraButtons = false,
  isLoading,
  errorMessage
}: ParkingFormContainerProps) => {

  const clearParkingData = useParkingStore((state) => state.clearParkingData);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const navigate = useNavigate();
  const emailParking = useAuthStore((state) => state.user.email)
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormParkingValues>({
    defaultValues: {
      ...defaultValues,
      email: emailParking,
    },
    resolver: yupResolver(registerParkingSchema) as Resolver<FormParkingValues>,
  });

  //eliminar parking
  const handleDeleteParking = async () => {
    try {
      //llama al service
      setIsDeleting(true);
      const result = await deleteParking();
      if (result) {
        //actualizo la store
        clearParkingData()
        closeModal();
        showSuccess("Estacionamiento eliminado con éxito");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false); // ✅ Oculta loader al terminar
    }
  };
  

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <ParkingBannerForm
        setValue={setValue}
        errors={errors}
        trigger={trigger}
      />
      <ParkingDataFields
        fields={fields}
        register={register}
        errors={errors}
        setValue={setValue}
        mode={mode}
      />
      <Box className={styles.registerForm}>
        {errorMessage && (
          <Typography variant="body2" color="error">
            {errorMessage}
          </Typography>
        )}
      </Box>
      
      <Box className={styles.registerForm}>
        <ButtonPrimary
          text={
            isLoading ? <Loader size={20} /> :
            mode === "register"
              ? "Registrar estacionamiento"
              : "Guardar cambios"
          }
          type="submit"
          disabled={isLoading}
        />
        {mode === "register" && <ButtonSecondary text="Cancelar" to="/" />}

        {showExtraButtons && (
          <>
            <ButtonSecondary
              type="button"
              text="Cambiar contraseña"
              to="/change-password"
            />
            <ButtonDangerPrimary
              text="Eliminar estacionamiento"
              onClick={() =>
                openModal(
                  <ParkingModal
                    text="Estás a punto de eliminar este estacionamiento"
                    buttons={[
                      {
                        label: isDeleting ? <Loader size={20} /> : "Continuar",
                        onClick: () => {
                          handleDeleteParking();
                        },
                        disabled: isDeleting, // Bloquea doble click
                      },
                      {
                        label: "Cancelar",
                        color: "error",
                        onClick: () => {
                          closeModal();
                        },
                      },
                    ]}
                  />
                )
              }
            />
            <ButtonDangerSecondary
              text="Eliminar cuenta"
              to="/delete-account"
            />
          </>
        )}
      </Box>
    </Box>
  );
};
export default ParkingFormContainer;
