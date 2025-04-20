import {create} from 'zustand';
//import { Parking } from '../../../shared/types/parking';
import { Parking } from '../../../store/parking.store';
import { parkingsData } from '../data/mock-parkings';

// interface Parking {
//     id: number;
//     price: number;
//     distance: number;
//     isOpen: boolean;
// }

export interface Filters {
    price: number | null;
    distance: number | null;
    isOpen: boolean | null;
}
  
interface MapStore {
    parkings: Parking[];
    filters: Filters;
    filteredParkings: Parking[];
    applyFilters: () => void;
    updateFilters: (newFilters: Partial<Filters>) => void;
    initializeFilteredParkings: () => void
}



const useMapStore = create<MapStore>((set, get) => ({
  // Estado inicial
  parkings: parkingsData,
  
  // Filtros aplicados inicialmente
  filters: {
    price: Infinity,
    distance: Infinity,
    isOpen: null,
  } as Filters,

  // Lista filtrada de estacionamientos
  filteredParkings: [] as Parking[],

  // Acción para aplicar los filtros
  applyFilters: () => {
    const { parkings, filters } = get();
    const filtered = parkings.filter((p) => {
      //si es null no se aplica filtro || mira q precio/dist sea mejor a la elegida en el filtro
      const matchPrice = filters.price === null || p.hourlyRate <= filters.price;
      const matchDistance = filters.distance === null || (p.distance != null && p.distance <= filters.distance);
      //si es null no aplica el filtro || pasan los parking q tengan true en isOpen
      const matchOpen = filters.isOpen === null || p.isOpen === filters.isOpen;
      //q se cumplan los 3 filtros
      return matchPrice && matchDistance && matchOpen;
    });

    // Actualizamos el estado con la lista filtrada
    set({ filteredParkings: filtered });
  },

  // Acción para actualizar los filtros
  updateFilters: (newFilters) => {
    set((state) => {
      const updatedFilters = { ...state.filters, ...newFilters };
      return { filters: updatedFilters };
    });
  },
  initializeFilteredParkings: () => {
    // Inicializa la lista filtrada con la lista completa de estacionamientos, mock
    const { parkings } = get();
    set({ filteredParkings: parkings });
  },
}));

export default useMapStore;