
import { OverlayView } from '@react-google-maps/api';
import styles from './Maps.module.css';
import { recommendedParkingIds } from '../data/mock-parkings';
import { Parking } from '../../../shared/types/parking';
import { useParkingStore } from '../../parkings/store/parkingStore';


const ParkingMarker = ({ parking }: { parking: Parking }) => {
  const setSelected = useParkingStore((s) => s.setSelected);
  //verifica si el parking esta en la lista de recomendados
  const isRecommended = recommendedParkingIds.includes(Number(parking.id));
  //verifica si hay disponibilidad
  const isFull = parking.availableSpots === 0;

  //clases
  const classes = [styles.priceMarker];

  //si esta completo agrega clase full
  if (isFull) classes.push(styles.full);

  //si esta recomendado agrega clase 
  else if (isRecommended) classes.push(styles.recommendation);

  return (
    <OverlayView
      key={parking.id}
      position={{ lat: parking.lat, lng: parking.lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className={classes.join(' ')} onClick={() => setSelected(parking)}>
        ${parking.hourlyRate}
        <div className={styles.priceMarkerArrow} />
      </div>
    </OverlayView>
  );
};

export default ParkingMarker