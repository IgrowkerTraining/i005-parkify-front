import {create} from 'zustand';

interface ParkingState {
      id: string;
      name: string;
      address: string;
      contactNumber: string;
      hourlyRate: number;
      totalCapacity: number;
      availableSpots: number;

      //action
    //permite la actualizacion de los campos que se desean modificar podiendo dejar  otros campos vacios
      setParkingData: (data: Partial<Omit<ParkingState, 'setParkingData'>>) => void;
  }



export const useParkingStore = create<ParkingState>((set) => ({
    id: '',
    name: '',
    address: '',
    contactNumber: '',
    hourlyRate: 0,
    totalCapacity: 0,
    availableSpots: 0,
    setParkingData: (data) => set((state) => ({ ...state, ...data })),
  }));
