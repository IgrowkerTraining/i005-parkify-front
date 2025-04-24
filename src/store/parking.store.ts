import {create} from 'zustand';
import { persist } from "zustand/middleware";
import { getNearbyParkings } from "../features/parkings/services/ParkingService";

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

    nearbyParkings: Parking[];
    isLoadingNearby: boolean;
    fetchNearbyParkings: (lat: number, lon: number, radius: number) => Promise<void>;

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
        
        nearbyParkings: [],
        isLoadingNearby: false,

        fetchNearbyParkings: async (lat, lon, radius) => {
          set({ isLoadingNearby: true });
          try {
            // 1️⃣ llama al método de tu servicio
            const apiItems = await getNearbyParkings(lat, lon, radius);

            // 2️⃣ mapea ApiNearbyParking → Parking de tu store
            const mapped = apiItems.map(item => ({
              id: item.id,
              imageParking: item.parkingImageUrl,
              email: '',
              totalSpots: 0,
              hourlyRate: item.hourlyRate,
              openTime: '',
              closeTime: '',
              parkingName: item.name,
              parkingAddress: item.address,
              parkingPhone: item.parkingPhone,
              isParkingLoaded: true,
              lat: item.location.latitude,
              lng: item.location.longitude,
              availableSpots: item.currentAvailability,
              rating: 0,
              distance: item.distance,
              isOpen: true,
              ownerId: '',
            }));

            // 3️⃣ guarda en el store
            set({ nearbyParkings: mapped });
          } finally {
            set({ isLoadingNearby: false });
          }
        },
      }),
      {
        name: "parking-storage",
        partialize: (state) => ({ 
          parking: state.parking,
          selected: state.selected,
          availability: state.availability,
          nearbyParkings: state.nearbyParkings,
        }), 
      }
    )
  );
