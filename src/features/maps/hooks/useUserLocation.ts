import { useEffect } from 'react';
import { useUserLocationStore } from '../store/userLocation.store';

export const useUserLocation = () => {
  const setLocation = useUserLocationStore((s) => s.setLocation);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      // () => {
      //   // Fallback: Buenos Aires
      //   setLocation({ lat: -34.6037, lng: -58.3816 });
      // }
    );
  }, []);
};
