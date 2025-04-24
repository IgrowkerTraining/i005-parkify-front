import CardContainer from "./CardContainer";
import ButtonHomeAction from "./ButtonHomeAction";
import { Box, Typography } from "@mui/material";
import { useParkingStore } from "../../../store/parking.store";


const AccountCard = () => {
  //const user = useAuthStore((state) => state.user);
  const parking = useParkingStore((state) => state.parking)

  return (
    <CardContainer>
      <Box textAlign="center" display="flex" flexDirection="column" gap={1} mb={1}>
        <Typography variant="body1" >
          ¡Hola!
        </Typography>
        <Typography variant="h1"  sx={{fontWeight: 800}}>
          {parking.parkingName}
        </Typography>
      </Box>
      <Box sx={{width:"100%", maxWidth:"420px"}}>
        <ButtonHomeAction text="Mi cuenta" path="profile" />
      </Box>

      {/* <Typography variant='body1' >¡Hola!</Typography>
        <Typography variant='h1' sx={{fontWeight: 800}}>Armenia Parking</Typography> */}
    </CardContainer>
  );
};

export default AccountCard;
