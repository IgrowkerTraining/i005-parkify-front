import { FC, ReactNode } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

interface Props {
  children: ReactNode;
}
//mover el array fuera para q no se cree con cada render
const libraries: ('places')[] = ['places'];
export const MapWrapper: FC<Props> = ({ children }) => {
  
  //asegura q los script este cargados antes de renderizar el mapa
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <p>Error cargando Google Maps</p>;
  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <>{children}</>
    // <LoadScript
    //   googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    //   libraries={libraries}
    // >
    //   {children}
    // </LoadScript>
  );
};
