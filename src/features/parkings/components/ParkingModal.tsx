import { Box, Button, Divider, Typography } from "@mui/material";
import car from "../../../assets/carIcon.svg";
import { ReactNode } from "react";

interface ModalButton {
  label: string;
  color?: "primary" | "secondary" | "error" ;
  onClick?: () => void;
  endIcon?: ReactNode;
}

interface ParkingModalProps {
  text: string;
  buttons: ModalButton[];
}

const ParkingModal = ({ text, buttons }: ParkingModalProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          pb: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={car}
          alt="Icon car"
          sx={{ width: 20, height: "auto" }}
        />
        <Typography textAlign="center">{text}</Typography>
      </Box>
      <Divider
        sx={{
          width: "100%",
          backgroundColor: "rgba(223, 226, 231, 0.3)",
        }}
      />
      {buttons.map((btn, index) => (
        <Box key={index} sx={{ width: "100%" }}>
          {index > 0 && (
            <Divider
              sx={{
                width: "100%",
                backgroundColor: "rgba(223, 226, 231, 0.8)",
              }}
            />
          )}
          <Button
            fullWidth
            variant="outlined"
            color={btn.color || "primary"}
            sx={{ border: "none", p:0, mt: index > 0 ? 1 : 0 }}
            endIcon={btn.endIcon}
            onClick={btn.onClick}
          >
            {btn.label}
          </Button>
        </Box>
      ))}
      {/* <Divider
        sx={{
          width: "100%",
          backgroundColor: "1px solid rgba(223, 226, 231, 0.3)",
        }}
      />
      <Button variant="outlined" sx={{ border: "none" }}>
        Continuar
      </Button>
      <Divider
        sx={{
          width: "100%",
          backgroundColor: "1px solid rgba(223, 226, 231, 0.3)",
        }}
      />
      <Button variant="outlined" color="error" sx={{ border: "none" }}>
        Cancelar
      </Button> */}
    </Box>
  );
};

export default ParkingModal;
