import { GoogleMap } from '@react-google-maps/api';
import { useUserLocationStore } from '../store/userLocation.store';
import { MarkerList } from './MarkerList';
import { Parking } from '../../../shared/types/parking'; // 👈 Asegúrate de tener este import

const containerStyle = { width: '100%', height: '100vh' };

// 👇 Este tipo define la prop que esperas recibir
type MapViewProps = {
  onParkingSelect: (parking: Parking) => void;
};

export const MapView = ({ onParkingSelect }: MapViewProps) => {
  const location = useUserLocationStore((s) => s.location);

  if (!location) return <p>Cargando ubicación...</p>;

  return (
    <GoogleMap
      center={location}
      zoom={15}
      mapContainerStyle={containerStyle}
      options={{
        clickableIcons: false, // ❌ evita info de Google
        styles: [
          {
            featureType: 'poi', // ❌ oculta puntos de interés (como Obelisco)
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
    >
      {/* ✅ Ahora MarkerList recibe el handler */}
      <MarkerList onParkingSelect={onParkingSelect} />
    </GoogleMap>
  );
};
