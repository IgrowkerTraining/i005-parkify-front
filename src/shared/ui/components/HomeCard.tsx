import CardContainer from './CardContainer'
import ButtonHomeAction from './ButtonHomeAction'
import { Typography } from '@mui/material'

const HomeCard = () => {
  return (
    <CardContainer>
        
        <Typography variant='h2' sx={{fontWeight: 800}}>¿Tienes un estacionamiento?</Typography>
        <ButtonHomeAction text='Registrarse' path='/register'/>
        <ButtonHomeAction text="Ingresa a tu cuenta" path='/login'/>
    </CardContainer>
  )
}

export default HomeCard
