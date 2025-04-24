import { useEffect } from "react";
import useMapStore from "../store/useMap.store";
import ParkingMarker from "./ParkingMarker";
import { Parking } from "../../../store/parking.store";
import Loader from "../../../shared/ui/components/Loader"; // ✅ Asegúrate que apunta bien

type MarkerListProps = {
  onParkingSelect: (parking: Parking) => void;
};

export const MarkerList = ({ onParkingSelect }: MarkerListProps) => {
  const filteredParkings = useMapStore((state) => state.filteredParkings);
  const initializeFilteredParkings = useMapStore((state) => state.initializeFilteredParkings);
  const isLoading = useMapStore((state) => state.isLoading); // ✅ aquí usamos el loading

  useEffect(() => {
    initializeFilteredParkings();
  }, [initializeFilteredParkings]);

  if (isLoading) return <Loader fullScreen />; // ✅ muestra el loader mientras carga

  return (
    <>
      {filteredParkings.length > 0 ? (
        filteredParkings.map((p) => (
          <ParkingMarker key={p.id} parking={p} onClick={() => onParkingSelect(p)} />
        ))
      ) : (
        <p>No se encontraron estacionamientos con los filtros seleccionados.</p>
      )}
    </>
  );
};
