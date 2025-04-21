import { useEffect } from "react";
import useMapStore from "../store/useMap.store";
import ParkingMarker from "./ParkingMarker";
import { Parking } from "../../../shared/types/parking";

type MarkerListProps = {
  onParkingSelect: (parking: Parking) => void;
};

export const MarkerList = ({ onParkingSelect }: MarkerListProps) => {
  const filteredParkings = useMapStore((state) => state.filteredParkings);
  const initializeFilteredParkings = useMapStore((state) => state.initializeFilteredParkings);

  useEffect(() => {
    initializeFilteredParkings();
  }, [initializeFilteredParkings]);

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
