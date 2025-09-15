export interface VehicleI {
  id?: number;
  plate: string;
  type: 'carro' | 'moto' | 'bici';
  color: string;
  brand: string;
  client_id: number; // FK to client
}