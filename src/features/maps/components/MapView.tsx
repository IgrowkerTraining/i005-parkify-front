import { GoogleMap } from '@react-google-maps/api';
import { useUserLocationStore } from '../store/userLocation.store';
import { MarkerList } from './MarkerList';
import { Parking } from '../../../store/parking.store';
import Loader from '../../../shared/ui/components/Loader'; // Asegúrate que la ruta es correcta

const containerStyle = { width: '100%', height: '100vh' };

type MapViewProps = {
  onParkingSelect: (parking: Parking) => void;
};

export const MapView = ({ onParkingSelect }: MapViewProps) => {
  const location = useUserLocationStore((s) => s.location);

  if (!location) return <Loader fullScreen />;

  return (
    <GoogleMap
      center={location}
      zoom={15}
      mapContainerStyle={containerStyle}
      options={{
        clickableIcons: false,
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
    >
      <MarkerList onParkingSelect={onParkingSelect} />
    </GoogleMap>
  );
};
