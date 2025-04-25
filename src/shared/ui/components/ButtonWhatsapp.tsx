import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ButtonWhatsappProps {
  phone: string;    // ej. "34646599104", sin '+' ni espacios
  message: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const ButtonWhatsapp = ({
  phone,
  message,
  fullWidth,
  disabled,
}: ButtonWhatsappProps) => {
  const handleClick = () => {
    // Limpio el número y codifico el mensaje
    const cleanedPhone = phone.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);

    // Uso siempre el enlace universal wa.me
    const url = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;

    // Abro en nueva pestaña (abre app o web según plataforma)
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      fullWidth={fullWidth}
      disabled={disabled}
      endIcon={<WhatsAppIcon />}
    >
      Reservar por WhatsApp
    </Button>
  );
};

export default ButtonWhatsapp;
