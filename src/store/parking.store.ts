import {create} from 'zustand';

interface ParkingState {
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
     // availableSpots: number;
      //action
    //permite la actualizacion de los campos que se desean modificar podiendo dejar  otros campos vacios
      setParkingData:(data: Partial<ParkingState>) => void;
      getParkingData: () => ParkingState;
      clearParkingData: () => void;
  }

  export const useParkingStore = create<ParkingState>(
      (set, get) => ({
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
        setParkingData: (data) => set((state) => ({ ...state, ...data })),
        getParkingData: () => get(),
        clearParkingData: () => set({ id: '', isParkingLoaded: false }),
      }
    )
  );
