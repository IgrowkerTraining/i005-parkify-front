import { Button } from '@mui/material'

interface ButtonSecondaryProps {
    text: string
    onClick?: () => void;
    disabled?: boolean
}
const ButtonSecondary = ({text, onClick, disabled} : ButtonSecondaryProps) => {
  return (
    <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        sx={{
            fontSize: 14,
        }}
        onClick={onClick}
        disabled={disabled}
        >
          {text}
    </Button>
  )
}

export default ButtonSecondary