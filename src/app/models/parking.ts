export interface ParkingI {
  id?: number; // se asigna automáticamente
  name: string;
  address: string;
  totalCapacity: number;
  status: 'ACTIVE' | 'INACTIVE';
}