import { OverlayView } from '@react-google-maps/api';
import styles from './Maps.module.css';
import { recommendedParkingIds } from '../data/mock-parkings';
import { Parking } from '../../../shared/types/parking';

type Props = {
  parking: Parking;
  onClick: () => void;
};

const ParkingMarker = ({ parking, onClick }: Props) => {
  const isRecommended = recommendedParkingIds.includes(Number(parking.id));
  const isFull = parking.availableSpots === 0;

  const classes = [styles.priceMarker];
  if (isFull) classes.push(styles.full);
  else if (isRecommended) classes.push(styles.recommendation);

  return (
    <OverlayView
      key={parking.id}
      position={{ lat: parking.lat, lng: parking.lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className={classes.join(' ')} onClick={onClick}>
        ${parking.hourlyRate}
        <div className={styles.priceMarkerArrow} />
      </div>
    </OverlayView>
  );
};

export default ParkingMarker;
