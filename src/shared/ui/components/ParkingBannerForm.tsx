import { Box, Typography } from "@mui/material";
import banner from "../../../assets/Banner.svg";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useModalStore } from "../../../store/modal.store";
import ParkingModal from "../../../features/parkings/components/ParkingModal";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useEffect, useRef, useState } from "react";
import { showSuccess } from "../toast";
import { FieldErrors, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { FormParkingValues } from "../../../shared/types";
interface Props {
  setValue?: UseFormSetValue<FormParkingValues>;
  errors?: FieldErrors<FormParkingValues>;
  trigger?: UseFormTrigger<FormParkingValues>
}
const ParkingBannerForm: React.FC<Props> = ({ setValue, errors, trigger } ) => {
  const [preview, setPreview] = useState<string | null>(null);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if(setValue) setValue("imageParking", file);
    if(trigger) await trigger("imageParking");
    if (file) {
      console.log("Archivo seleccionado:", file);
      const objectUrl = URL.createObjectURL(file); // genera URL temporal
      setPreview(objectUrl);
      // setParkingData({ bannerImage: file });
      showSuccess("Imagen cargada con éxito");
      closeModal();
      // subir imagen
      if(setValue) setValue("imageParking", file);
    }
  };
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: 500,
        mx: "auto",
        p: 2,
        borderRadius: "8px",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: 140,
            sm: 200,
          },
          borderRadius: "inherit",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={preview || banner}
          alt="banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "8px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
            zIndex: 1,
            borderRadius: "8px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 2,
            borderRadius: "8px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body1">¡Hola!</Typography>
          <Typography variant="h1" sx={{ fontWeight: 800 }}>
            Armenía Parking
          </Typography>
          {
            setValue && (
              <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() =>
              openModal(
                <>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <ParkingModal
                    text="Carga aquí una imagen que represente a tu estacionamiento"
                    buttons={[
                      {
                        label: "Cargar imagen",
                        color: "primary",
                        onClick: handleUploadClick,
                        endIcon: (
                          <FileUploadOutlinedIcon sx={{ color: "primary" }} />
                        ),
                      },
                    ]}
                  />
                </>
              )
            }
          >
            <EditIcon sx={{ color: "white", fontSize: 20 }} />
          </IconButton>
            )
          }
          
        </Box>
      </Box>
      <Typography color="error" variant="body1" textAlign="center" sx={{mt:1}}>
          {errors?.imageParking?.message}
      </Typography>
    </Box>
  );
};
export default ParkingBannerForm;
