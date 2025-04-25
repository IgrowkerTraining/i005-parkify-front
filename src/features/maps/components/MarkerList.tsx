// import { useEffect } from "react";
// import useMapStore from "../store/useMap.store";
import ParkingMarker from "./ParkingMarker";
import { Parking, useParkingStore } from "../../../store/parking.store";
import Loader from "../../../shared/ui/components/Loader"; 

type MarkerListProps = {
  onParkingSelect: (parking: Parking) => void;
};

export const MarkerList = ({ onParkingSelect }: MarkerListProps) => {
  // const filteredParkings = useMapStore((state) => state.filteredParkings);
  // const initializeFilteredParkings = useMapStore((state) => state.initializeFilteredParkings);
  // const isLoading = useMapStore((state) => state.isLoading);

  // 1️⃣ Leemos del store el array de parkings cercanos
  const nearbyParkings = useParkingStore((state) => state.nearbyParkings);

  // 2️⃣ Flag de carga para parkings cercanos
  const isLoadingNearby = useParkingStore((state) => state.isLoadingNearby);

  // useEffect(() => {
  //   initializeFilteredParkings();
  // }, [initializeFilteredParkings]);

  if (isLoadingNearby) return <Loader fullScreen />; 

  return (
    <>
      {nearbyParkings.length > 0 ? (
        nearbyParkings.map((p) => (
          <ParkingMarker
            key={p.id}
            parking={p}
            onClick={() => onParkingSelect(p)}
          />
        ))
      ) : (
        <p>No se encontraron estacionamientos con los filtros seleccionados.</p>
      )}
    </>
  );
};
