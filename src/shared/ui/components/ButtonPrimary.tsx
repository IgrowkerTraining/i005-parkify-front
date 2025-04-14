import  Button  from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

interface ButtonPrimaryProps {
    text: string
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean
    to?: string,
}
const ButtonPrimary = ({text, onClick, type, disabled, to} : ButtonPrimaryProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick()
    if (to) navigate(to)
  }
  return (
    <Button
          variant="contained"
          type={type}
          fullWidth
          onClick={handleClick}
          disabled={disabled}
        >
          {text}
    </Button>
  )
}

// const ButtonPrimary = ({ children, onClick, type, disabled, }: ButtonPrimaryProps) => {
//   return (
//     <Button
//       variant="contained"
//       type={type}
//       fullWidth
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </Button>
//   );
// };

export default ButtonPrimary;
