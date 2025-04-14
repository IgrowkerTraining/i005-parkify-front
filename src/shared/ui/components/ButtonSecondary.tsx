import Button  from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

interface ButtonSecondaryProps {
    text: string
    to?: string
    onClick?: () => void;
    disabled?: boolean
    type?: "button" | "submit" | "reset";
}
const ButtonSecondary = ({text, onClick, disabled, to, type} : ButtonSecondaryProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick()
    if (to) navigate(to)
  }
  return (
    <Button
        fullWidth
        variant="outlined"
        type={type}
        color="primary"
        sx={{
            fontSize: 14,
        }}
        onClick={handleClick}
        disabled={disabled}
        >
          {text}
    </Button>
  )
}

export default ButtonSecondary