import { Autocomplete } from '@react-google-maps/api';
import { TextField } from '@mui/material';
import { useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useParkingStore } from '../../../store/parking.store';

interface Props {
  setValue: UseFormSetValue<any>;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

export const AddressAutocomplete = ({ setValue, placeholder = "Dirección del estacionamiento", error, helperText }: Props) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setParkingData = useParkingStore((state) => state.setParkingData)
  const parkingData = useParkingStore((state) => state.getParkingData());

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (!place.geometry || !place.geometry.location) return;

      const parkingAddress = place.formatted_address ?? inputRef.current?.value ?? '';
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setValue("parkingAddress", parkingAddress, {
        shouldValidate: true,
        shouldTouch: true,
      });
      setParkingData({ parkingAddress, lat, lng });
    }
  };

  return (
    <Autocomplete
      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
      onPlaceChanged={onPlaceChanged}
    >
      <TextField
        inputRef={inputRef}
        fullWidth
        label={placeholder}
        defaultValue={parkingData.parkingAddress || ""}
        error={error}
        helperText={helperText}
        sx={{width:"100%"}}
      />
    </Autocomplete>
  );
};
