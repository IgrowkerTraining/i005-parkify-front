import { GoogleMap } from '@react-google-maps/api';
import { useUserLocationStore } from '../store/userLocation.store';
import { MarkerList } from './MarkerList';
import { Parking, useParkingStore  } from '../../../store/parking.store';
import Loader from '../../../shared/ui/components/Loader'; // Asegúrate que la ruta es correcta
import { useEffect } from 'react';
import MapControls from './MapControls';

const containerStyle = { width: '100%', height: '100vh' };

type MapViewProps = {
  onParkingSelect: (parking: Parking | null) => void;
};

export const MapView = ({ onParkingSelect }: MapViewProps) => {
  const location = useUserLocationStore((s) => s.location);
  const {
    //nearbyParkings,
    isLoadingNearby,
    fetchNearbyParkings
  } = useParkingStore();

  useEffect(() => {
    if (location) {
      // sólo cuando location exista, pedimos al backend
      fetchNearbyParkings(location.lat, location.lng, 5);
    }
  }, [location, fetchNearbyParkings]);

  if (!location || isLoadingNearby) {
    // mostramos loader mientras obtenemos la ubicación o los parkings
    return <Loader fullScreen />;
  }

  return (
    <GoogleMap
      center={location}
      zoom={15}
      mapContainerStyle={containerStyle}
      onClick={() => onParkingSelect(null)}
      options={{
        clickableIcons: false,
        gestureHandling: "greedy", // 👈 esto permite mover con un solo dedo
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
      
    >
      <MapControls/>
      <MarkerList onParkingSelect={onParkingSelect} />
    </GoogleMap>
  );
};
