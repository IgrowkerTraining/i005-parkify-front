import { Box, Typography } from '@mui/material'
import banner from "../../../assets/Banner.svg";

const ParkingBannerForm: React.FC = () => {
  return (
    <Box
    sx={{
      position: "relative",
      overflow: "hidden",
      width: "100%",
      maxWidth: 500,
      mx:"auto",
      p: 2, 
      borderRadius: "8px",
      backgroundColor: "transparent", 
    }}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 200,
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
    
      <Box
        component="img"
        src={banner}
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
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body1" >
            ¡Hola!
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: 800 }}>
          Armenía Parking
        </Typography>
      </Box>
    </Box>
  </Box>
  )
}
export default ParkingBannerForm