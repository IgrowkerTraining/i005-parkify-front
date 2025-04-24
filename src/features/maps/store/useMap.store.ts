import { create } from 'zustand';
import { Parking } from '../../../store/parking.store';
import { parkingsData } from '../data/mock-parkings';

export interface Filters {
  price: number | null;
  distance: number | null;
  isOpen: boolean | null;
}

interface MapStore {
  parkings: Parking[];
  filters: Filters;
  filteredParkings: Parking[];
  isLoading: boolean;
  applyFilters: () => void;
  updateFilters: (newFilters: Partial<Filters>) => void;
  initializeFilteredParkings: () => void;
  setLoading: (value: boolean) => void;
}

const useMapStore = create<MapStore>((set, get) => ({
  parkings: parkingsData,

  filters: {
    price: Infinity,
    distance: Infinity,
    isOpen: null,
  },

  filteredParkings: [],

  isLoading: false, // ✅ Añadido correctamente

  setLoading: (value) => set({ isLoading: value }), // ✅ Setter limpio

  applyFilters: () => {
    const { parkings, filters } = get();
    const filtered = parkings.filter((p) => {
      const matchPrice = filters.price === null || p.hourlyRate <= filters.price;
      const matchDistance = filters.distance === null || (p.distance != null && p.distance <= filters.distance);
      const matchOpen = filters.isOpen === null || p.isOpen === filters.isOpen;
      return matchPrice && matchDistance && matchOpen;
    });

    set({ filteredParkings: filtered });
  },

  updateFilters: (newFilters) => {
    set((state) => {
      const updatedFilters = { ...state.filters, ...newFilters };
      return { filters: updatedFilters };
    });
  },

  initializeFilteredParkings: () => {
    set({ isLoading: true }); // ← simula operación asíncrona

    setTimeout(() => {
      const { parkings } = get();
      set({
        filteredParkings: parkings,
        isLoading: false,
      });
    }, 1500);
  },
}));

export default useMapStore;
