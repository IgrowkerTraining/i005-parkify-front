import { Button } from '@mui/material'

interface ButtonPrimaryProps {
    text: string
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean
}
const ButtonPrimary = ({text, onClick, type, disabled} : ButtonPrimaryProps) => {
  return (
    <Button
          variant="contained"
          type={type}
          fullWidth
          onClick={onClick}
          disabled={disabled}
        >
          {text}
    </Button>
  )
}

export default ButtonPrimary
