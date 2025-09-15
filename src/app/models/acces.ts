export interface AccessI {
  id?: number;              // ID único del acceso
  clientName: string;       // Nombre del cliente
  vehicleType: 'Carro' | 'Moto' | 'Bici'; // Tipo de vehículo
  vehiclePlate: string;     // Placa del vehículo
  parkingName: string;      // Nombre del parqueadero
  timeIn: string;           // Hora de entrada (ISO string o "HH:mm")
  timeOut?: string;        
}