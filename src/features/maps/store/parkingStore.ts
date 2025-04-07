import { create } from 'zustand';
import { Parking } from '../types/parking';

interface ParkingStore {
  selected: Parking | null;
  setSelected: (parking: Parking) => void;
}

export const useParkingStore = create<ParkingStore>((set) => ({
  selected: null,
  setSelected: (parking) => set({ selected: parking }),
}));
