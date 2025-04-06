import { Button } from '@mui/material'

interface ButtonPrimaryProps {
    text: string
}
const ButtonPrimary = ({text} : ButtonPrimaryProps) => {
  return (
    <Button
          variant="contained"
          type="submit"
          fullWidth
        >
          {text}
    </Button>
  )
}

export default ButtonPrimary
