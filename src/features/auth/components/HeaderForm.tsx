import { Box, Button } from "@mui/material"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link as RouterLink } from "react-router-dom";
import { HeaderFormProps } from "../types";


const HeaderForm  = ({path, onBack}: HeaderFormProps) => {
  return (
    <Box
        sx={{
          pl: 4,
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {onBack ? (
        <Button startIcon={<KeyboardArrowLeftIcon />} onClick={onBack}>
          Volver
        </Button>
      ) : (
        <Button
          component={RouterLink}
          startIcon={<KeyboardArrowLeftIcon />}
          to={path || "/"}
        >
          Volver
        </Button>
      )}
      </Box>
  )
}

export default HeaderForm
