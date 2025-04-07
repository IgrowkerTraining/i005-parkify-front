import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { mockParkings } from '../data/mock-parkings';
import { useParkingStore } from '../store/parkingStore';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 40.4168,
  lng: -3.7038,
};

export const MapView = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const setSelected = useParkingStore((state) => state.setSelected);

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      {mockParkings.map((parking) => (
        <Marker
          key={parking.id}
          position={{ lat: parking.lat, lng: parking.lng }}
          onClick={() => setSelected(parking)}
        />
      ))}
    </GoogleMap>
  );
};
