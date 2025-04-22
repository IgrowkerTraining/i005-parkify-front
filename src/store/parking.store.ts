import {create} from 'zustand';
import { persist } from "zustand/middleware";

export interface Parking {
  id: string;
  imageParking: string;
  email: string; //no iria xq ees del user
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
  availableSpots?: number;
  rating?: number;
  distance?: number;
  isOpen?: boolean;
  ownerId?: string;
}

interface ParkingAvailability {
  [parkingId: string]: number;
}

interface ParkingState {
    parking: Parking
    //permite la actualizacion de los campos que se desean modificar podiendo dejar  otros campos vacios
    setParkingData:(data: Partial<Parking>) => void;
    getParkingData: () => Parking;
    clearParkingData: () => void;
    // Parking seleccionado (para cuando se elige uno de una lista, por ejemplo)
    selected: Parking | null;
    setSelected: (parking: Parking) => void;
    // Disponibilidad por ID de parking
    availability: ParkingAvailability;
    setAvailability: (parkingId: string, slots: number) => void;
  }

  const initialState : Parking = {
    id: '',
    imageParking: '',
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
    availableSpots: 0,
    rating: 0,
    distance: 0,
    isOpen: false,
    ownerId: '',
  }

  export const useParkingStore = create<ParkingState>()(
    persist(
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
        selected: null,
        setSelected: (parking) => set({ selected: parking }),

        availability: {},
        setAvailability: (parkingId, slots) =>
          set((state) => ({
            availability: {
              ...state.availability,
              [parkingId]: slots,
            },
          })),
      }),{
        name: "parking-storage",
        partialize: (state) => ({ 
          parking: state.parking,
          selected: state.selected,
          availability: state.availability,
        }), 
      }
    )
  );
