import CardContainer from './CardContainer'
import ButtonHomeAction from './ButtonHomeAction'
import { Box, Typography } from '@mui/material'

const HomeCard = () => {
  return (
    <CardContainer>
        
        <Typography variant='h2' sx={{fontWeight: 800}}>¿Tienes un estacionamiento?</Typography>
        <Box sx={{width:"175px", display:"flex", flexDirection:"column", gap:2}}>
          <ButtonHomeAction text='Regístrate' path='/register'/>
          <ButtonHomeAction text="Ingresa a tu cuenta" path='/login'/>
        </Box>
    </CardContainer>
  )
}

export default HomeCard
