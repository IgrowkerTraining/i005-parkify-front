import {create} from 'zustand';

interface ParkingState {
      id: string;
      name: string;
      address: string;
      contactNumber: string;
      hourlyRate: number;
      totalCapacity: number;
      availableSpots: number;
      bannerImage?: File | null;
      //action
    //permite la actualizacion de los campos que se desean modificar podiendo dejar  otros campos vacios
      setParkingData: (data: Partial<Omit<ParkingState, 'setParkingData'>>) => void;
      getParkingData: () => ParkingState;
  }



export const useParkingStore = create<ParkingState>((set, get) => ({
    id: '',
    name: '',
    address: '',
    contactNumber: '',
    hourlyRate: 0,
    totalCapacity: 0,
    availableSpots: 0,
    bannerImage: null,
    setParkingData: (data) => set((state) => ({ ...state, ...data })),
    getParkingData: () => get(),
  }));
