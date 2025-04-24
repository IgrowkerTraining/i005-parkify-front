import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ButtonWhatsappProps {
  phone: string; // sin + ni espacios
  message: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const ButtonWhatsapp = ({ phone, message, fullWidth, disabled }: ButtonWhatsappProps) => {
  const handleClick = () => {
    console.log("Botón presionado");

    const cleanedPhone = phone.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);

    // Detectar si es móvil
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Usar protocolo distinto según el dispositivo
    const baseUrl = isMobile
      ? `whatsapp://send?phone=${cleanedPhone}&text=${encodedMessage}`
      : `https://api.whatsapp.com/send/?phone=${cleanedPhone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    console.log("URL generada:", baseUrl);
    window.open(baseUrl, "_blank");
  };

  return (
    <Button
    onClick={handleClick}
    variant="contained"
    color="primary" // Usa el color azul del theme
    fullWidth={fullWidth}
    disabled={disabled}
    endIcon={<WhatsAppIcon />}
  >
    Reservar por WhatsApp
  </Button>
  
  );
};

export default ButtonWhatsapp;
