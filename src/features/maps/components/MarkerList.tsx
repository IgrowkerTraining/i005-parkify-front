
import { mockParkings} from "../data/mock-parkings";
import ParkingMarker from "./ParkingMarker";

export const MarkerList = () => {
  return (
    <>
      {mockParkings.map((p) => (
        <ParkingMarker parking={p} />
      ))}
    </>
  );
};
