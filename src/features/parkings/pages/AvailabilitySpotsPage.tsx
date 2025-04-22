import { Box, TextField, Typography } from "@mui/material";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import styles from "../../../shared/styles/ParkingForm.module.css";
//import { useParkingStore as useAvailabilityStore } from "../store/parkingStore";
import { useParkingStore } from "../../../store/parking.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../../../shared/ui/toast";
import ButtonSquare from "../components/ButtonSquare";

//proteger esta ruta solo se puede si hay un parking registrado
const AvailabilitySpotsPage = () => {
  const navigate= useNavigate()
  //de la lista de parking buscar este parking
  const setAvailability = useParkingStore((state) => state.setAvailability);
  const availability = useParkingStore((state) => state.availability);
  const { id, totalSpots } = useParkingStore((state) => state.parking);
  console.log(availability, 'ava')
  const [spots, setSpots] = useState(availability[id]);
  
  const handleRemoveSpots = () => {
    spots > 0 && setSpots(spots - 1);
  };
  
  const handleAddSpots = () => {
    spots < totalSpots && setSpots(spots + 1);
  };
  
  const handleOnChange = ( e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setSpots(Number(e.target.value))
  }
  const handleSubmit = () =>{
    //setea la disponibilidad en la store
    setAvailability(id, spots)
    showSuccess("Los cambios se han guardado")
    navigate("/")
  }
  return (
    <Box>
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
        <ButtonPrimary text="Guardar cambios" type="submit" onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default AvailabilitySpotsPage;
