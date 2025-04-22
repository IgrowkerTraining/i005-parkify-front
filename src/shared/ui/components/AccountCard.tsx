import CardContainer from "./CardContainer";
import ButtonHomeAction from "./ButtonHomeAction";
import { Box, Typography } from "@mui/material";
import { User } from "../../../store/auth.store";

interface AccountCardProps {
    user: User
}

const AccountCard = ({user}: AccountCardProps) => {
  return (
    <CardContainer>
      <Box textAlign="center">
        <Typography variant="body1" >
          ¡Hola!
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: 800 }}>
          {user.email ?? "Usuario"}
        </Typography>
      </Box>
      {/* <Typography variant='body1' >¡Hola!</Typography>
        <Typography variant='h1' sx={{fontWeight: 800}}>Armenia Parking</Typography> */}
      <ButtonHomeAction text="Mi cuenta" path="profile" />
    </CardContainer>
  );
};

export default AccountCard;
