import { create } from 'zustand';
import { Parking } from '../../../shared/types/parking';

// Mapeo de disponibilidad por ID
interface ParkingAvailability {
  [parkingId: string]: number
}
interface ParkingStore {
  selected: Parking | null;
  setSelected: (parking: Parking) => void;

  // Almacena la disponibilidad de los parkings
  availability: ParkingAvailability
  setAvailability: (parkingId: string, slots: number) => void
}

export const useParkingStore = create<ParkingStore>((set) => ({
  // Almacena el parking seleccionado
  // Se inicializa como null porque no hay parking seleccionado al inicio
  selected: null,
  setSelected: (parking) => set({ selected: parking }),

  // Inicializa la disponibilidad de los parkings
  availability: {},
  setAvailability: (parkingId, slots) =>
    set((state) => ({
      availability: {
        ...state.availability,
        [parkingId]: slots,
      },
    })),
}));
