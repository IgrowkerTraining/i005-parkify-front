import { Parking } from '../types/parking';

export const mockParkings: Parking[] = [
  {
    id: '1',
    name: 'Parking Central',
    address: 'Calle Mayor 12',
    contactNumber: '+34911111111',
    hourlyRate: 2,
    totalCapacity: 50,
    availableSpots: 12,
    lat: 40.416775,
    lng: -3.70379,
  },
  {
    id: '2',
    name: 'Parking Sur',
    address: 'Gran Vía 20',
    contactNumber: '+34912222222',
    hourlyRate: 3,
    totalCapacity: 30,
    availableSpots: 5,
    lat: 40.414, 
    lng: -3.706,
  },
];
