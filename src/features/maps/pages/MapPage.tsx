import { useState } from 'react';
import { useUserLocation } from '../hooks/useUserLocation';
import { MapWrapper } from '../components/MapWrapper';
import { MapView } from '../components/MapView';
import { Box } from '@mui/material';
import { Parking } from '../../../shared/types/parking';
import { ParkingProfile } from '../../parkings/components/ParkingProfile';

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
                pointerEvents: 'auto', // Permite hacer clic en la tarjeta
                width: '100%',
                maxWidth: 420,
              }}
            >
              <ParkingProfile parking={selectedParking} />
            </Box>
          </Box>
        )}
      </MapWrapper>
    </Box>
  );
};

export default MapPage;
