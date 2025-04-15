import {create} from 'zustand';

interface Parking {
  id: string;
  imageParking: File | null;
  email: string;
  totalSpots: number;
  hourlyRate: number;
  openTime: string;
  closeTime: string;
  parkingName: string;
  parkingAddress: string;
  parkingPhone: string;
  isParkingLoaded: boolean;
  lat: number;
  lng: number;
}

interface ParkingState {
    parking: Parking
     // availableSpots: number;
      //action
    //permite la actualizacion de los campos que se desean modificar podiendo dejar  otros campos vacios
      setParkingData:(data: Partial<Parking>) => void;
      getParkingData: () => Parking;
      clearParkingData: () => void;
  }

  const initialState : Parking = {
    id: '',
    imageParking: null,
    email: '',
    totalSpots: 0,
    hourlyRate: 0,
    openTime: '',
    closeTime: '',
    parkingName: '',
    parkingAddress: '',
    parkingPhone: '',
    isParkingLoaded: false,
    lat:0,
    lng:0,
  }

  export const useParkingStore = create<ParkingState>(
      (set, get) => ({
        parking: initialState,
        setParkingData: (data) =>
          set((state) => ({
            parking: {
              ...state.parking,
              ...data,
            },
          })),
        getParkingData: () => get().parking,
        clearParkingData: () => set({ parking: initialState }),
      }
    )
  );
