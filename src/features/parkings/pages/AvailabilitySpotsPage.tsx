import { Box, TextField, Typography } from "@mui/material";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import styles from "../../../shared/styles/ParkingForm.module.css";
//import { useParkingStore as useAvailabilityStore } from "../store/parkingStore";
import { useParkingStore } from "../../../store/parking.store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../../shared/ui/toast";
import ButtonSquare from "../components/ButtonSquare";
import { handleError } from "../../../shared/utils/handleError";
import { AxiosError } from "axios";
import { updateAvailabilityParking } from "../services/ParkingService";
import Loader from "../../../shared/ui/components/Loader";

//proteger esta ruta solo se puede si hay un parking registrado
const AvailabilitySpotsPage = () => {
  const navigate= useNavigate()
  //de la lista de parking buscar este parking
  const setAvailability = useParkingStore((state) => state.setAvailability);
  const availability = useParkingStore((state) => state.availability);
  const { id, totalSpots } = useParkingStore((state) => state.parking);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const [spots, setSpots] = useState<number>(availability[id] || 0);
  useEffect(() => {
    setSpots(availability[id] || 0);
  }, [availability[id]]);
  const handleRemoveSpots = () => {
    spots > 0 && setSpots(spots - 1);
  };
  
  const handleAddSpots = () => {
    spots < totalSpots && setSpots(spots + 1);
  };
  
  const handleOnChange = ( e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setSpots(Number(e.target.value))
  }
  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    //llamar al service
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const availabilityResponse = await updateAvailabilityParking(id, spots);
      //setea la disponibilidad en la store
      console.log(availabilityResponse)
      setAvailability(id, spots)
      showSuccess("Los cambios se han guardado")
      navigate("/")
    } catch (err) {
      const message = handleError(err as AxiosError); 
      setErrorMessage(message);
      showError("Hubo un error");
    } finally{
      setIsLoading(false)
    }

  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <HeaderForm path="/" />
      <ParkingBannerForm />
      <Box className={styles.registerForm}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          textAlign="left"
          width="100%"
        >
          <Typography variant="h1" fontWeight={700}>
            Plazas totales: {totalSpots}
          </Typography>
          <Typography variant="h1" fontWeight={700} mt={6} mb={2}>
            Plazas disponibles:{" "}
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <ButtonSquare
            disabled={spots <=0}
            onClick={handleRemoveSpots}
            icon={<RemoveCircleOutlineIcon sx={{ fontSize: 20, color: "white" }} />}
          />
          <TextField
            value={spots}
            onChange={(e) => handleOnChange(e)} 
            variant="outlined"
            inputProps={{
              style: {
                textAlign: "center", 
                padding: 0,
                height: 48,
                width: 50,
                boxSizing:"border-box"
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "white",
                border: "1px solid",
                borderColor: "primary.main",
              },
             
            }}
          />
          <ButtonSquare
            disabled={spots >= totalSpots}
            onClick={handleAddSpots}
            icon={<AddCircleOutlineIcon sx={{ fontSize: 20, color: "white" }} />}
          />
        </Box>
        <Box>
        {errorMessage && (
          <Typography variant="body2" color="error">
            {errorMessage}
          </Typography>
        )}
      </Box>
        <ButtonPrimary 
          text={
            isLoading ? <Loader size={10} /> : "Guardar cambios"}
            type="submit" disabled={isLoading} />
      </Box>
    </Box>
  );
};

export default AvailabilitySpotsPage;
