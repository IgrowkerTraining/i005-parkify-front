import Button from "@mui/material/Button";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const ButtonWhatsapp = ({
  children,
  onClick,
  type,
  disabled,
  fullWidth, // <- Asegúrate de tener esto aquí
}: ButtonPrimaryProps) => {
  return (
    <Button
      variant="contained"
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth} // <- Y aquí
    >
      {children}
    </Button>
  );
};

export default ButtonWhatsapp;
