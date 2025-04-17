
import { useEffect } from "react";
import useMapStore from "../store/useMap.store";
import ParkingMarker from "./ParkingMarker";

export const MarkerList = () => {
  const filteredParkings = useMapStore((state) => state.filteredParkings);
  const initializeFilteredParkings = useMapStore((state) => state.initializeFilteredParkings);

  // Usamos useEffect para inicializar los estacionamientos al montar el componente
  useEffect(() => {
    initializeFilteredParkings();
  }, [initializeFilteredParkings]);

  return (
    <>
    {filteredParkings.length > 0 ? (
        filteredParkings.map((p) => (
          <ParkingMarker key={p.id} parking={p} />
        ))
      ) : (
        <p>No se encontraron estacionamientos con los filtros seleccionados.</p>
      )}
      {/* {mockParkings.map((p) => (
        <ParkingMarker key={p.id} parking={p} />
      ))} */}
    </>
  );
};
