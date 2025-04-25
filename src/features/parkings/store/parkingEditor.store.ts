// import { create } from 'zustand';
// import { Parking } from '../../../shared/types/parking';

// interface ParkingEditorStore extends Parking {
//   setParkingData: (data: Partial<Parking>) => void;
//   reset: () => void;
// }

// export const useParkingEditorStore = create<ParkingEditorStore>((set) => ({
//   id: '',
//   name: '',
//   address: '',
//   contactNumber: '',
//   hourlyRate: 0,
//   totalCapacity: 0,
//   availableSpots: 0,
//   lat: 0,
//   lng: 0,
//   distance: 0,

//   setParkingData: (data) => set((state) => ({ ...state, ...data })),
//   reset: () =>
//     set({
//       id: '',
//       name: '',
//       address: '',
//       contactNumber: '',
//       hourlyRate: 0,
//       totalCapacity: 0,
//       availableSpots: 0,
//       lat: 0,
//       lng: 0,
//     }),
// }));
