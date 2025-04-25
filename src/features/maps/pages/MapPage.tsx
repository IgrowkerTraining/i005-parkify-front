import { useState } from 'react';
import { useUserLocation } from '../hooks/useUserLocation';
import { MapWrapper } from '../components/MapWrapper';
import { MapView } from '../components/MapView';
import { Box } from '@mui/material';
import { Parking } from '../../../store/parking.store';
import { ParkingCard } from '../../../features/parkings/components/ParkingCard';

const MapPage = () => {
  useUserLocation();
  const [selectedParking, setSelectedParking] = useState<Parking | null>(null);

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <MapWrapper>
      
        <MapView onParkingSelect={setSelectedParking} />

        {selectedParking && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              pointerEvents: 'none', // No bloquea el mapa
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pointerEvents: 'auto', // Permite hacer clic en la tarjeta
                width: '100%',
                maxWidth: 420,
              }}
            >
              <ParkingCard parking={selectedParking} onReserve={() => {
                const phone = selectedParking.parkingPhone;
                const message = encodeURIComponent(`Hola, quiero reservar una plaza en ${selectedParking.parkingName}.`);
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}/>
            </Box>
          </Box>
        )}
      </MapWrapper>
    </Box>
  );
};

export default MapPage;
