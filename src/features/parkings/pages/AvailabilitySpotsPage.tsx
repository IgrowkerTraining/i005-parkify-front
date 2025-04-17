import { Box, Button, IconButton, Typography } from "@mui/material";
import HeaderForm from "../../../shared/ui/components/HeaderForm";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import styles from '../../../shared/styles/ParkingForm.module.css'

const AvailabilitySpotsPage = () => {
  return (
    <Box>
      <HeaderForm path="/" />
      <ParkingBannerForm />
      <Box className= {styles.registerForm}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" textAlign="left" width="100%">
            <Typography variant="h1" fontWeight={700}>Plazas totales: 29</Typography>
            <Typography variant="h1" fontWeight={700} mt={6} mb={2}>Plazas disponibles:{" "}</Typography>
        </Box>
        <Box display="flex" gap={2} alignItems="center" justifyContent="center" mb={4}>
          <Button
            sx={{
              width: 50,
              height: 50,
              minWidth: "unset",
              borderRadius: 1,
              bgcolor: "primary.main",
              p: 2,
              py: 2,
              boxSizing: "border-box",
            }}
          >
            <RemoveCircleOutlineIcon sx={{ fontSize: 20, color: "white" }} />
          </Button>

          <Button
            sx={{
              width: 50,
              height: 50,
              minWidth: "unset",
              borderRadius: 1,
              bgcolor: "white",
              p: 2,
              border: "1px solid",
              borderColor: "primary.main",
              py: 2,
              boxSizing: "border-box",
            }}
          >
            9
          </Button>
          <Button
            sx={{
              width: 50,
              height: 50,
              minWidth: "unset",
              borderRadius: 1,
              bgcolor: "primary.main",
              p: 2,
              py: 2,
              boxSizing: "border-box",
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 20, color: "white" }} />
          </Button>
          
        </Box>
        <ButtonPrimary
          text= "Guardar cambios"
          type="submit"
        />
      </Box>
    </Box>
  );
};

export default AvailabilitySpotsPage;
