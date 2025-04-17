export interface Parking {
  id: string;
  name: string;
  address: string;
  contactNumber: string;
  hourlyRate: number;
  totalCapacity: number;
  availableSpots: number;
  lat: number;
  lng: number;
  imageParking?: string;
  openTime?: string;
  closeTime?: string;
  rating?: number;
  estimatedTime?: string;
  distance: number; 
  isOpen?: boolean;
}
