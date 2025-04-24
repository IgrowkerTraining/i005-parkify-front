import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ButtonHomeActionProps {
    text: string;
  path?: string; 
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}
const ButtonHomeAction = ({text, onClick, type = "button", disabled, path} : ButtonHomeActionProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
      if (path) {
        navigate(path);
      } else if (onClick) {
        onClick();
      }
    };
    return (

    <Button
          variant="contained"
          type={type}
          onClick={handleClick}
          disabled={disabled}
          sx={{
            width:"100%",
            backgroundColor: (theme) => (theme.palette.tertiary as any)?.[500],
            color: (theme) => (theme.palette.tertiary as any)?.[800],
            fontWeight: 600 
          }}
        >
          {text}
    </Button>
  )
}

export default ButtonHomeAction