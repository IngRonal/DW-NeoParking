export interface SquareI {
  id?: number; 
  number: number; 
  type: 'Carro' | 'Moto' | 'Bici';
  status: 'Libre' | 'Ocupada' | 'Reservada' | 'Fuera de servicio';
  parkingId: number;
}